import React, { useState, useEffect } from 'react';
import Product from './component/Product';
import FormAdd from './component/FormAdd';
import productServices from './services';
import Pagination from './component/Pagination';
import axios from 'axios';
import './App.css'


function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPage] = useState(5);
  //pagination
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      const res = await axios.get('https://json-products.herokuapp.com/products');
      setProducts(res.data)
      setLoading(false)
    }

    fetchProduct()
  }, [])
  console.log(products)

  const indextLastProduct = currentPage * productPage;
  const indextFirstProduct = indextLastProduct - productPage;
  const currentProduct = products.slice(indextFirstProduct, indextLastProduct)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)



  //getAll
  useEffect(() => {
    productServices
      .getAll()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))
  }, [])

  //xoa product
  const onRemoveProduct = id => {
    productServices
      .remove(id)//xoa tren sever
      .then(() => setProducts(products.filter(product => product.id !== id)))// Xóa trong state
      .catch(error => console.error(error))
  }

  // them product
  const onAddProduct = (product) => {
    productServices
      .create({
        name: product[0],
        price: product[1],
        image: product[2],
        stock: product[3],
        count:product[4],
        description:product[5],
        extras:product[6],
        size:product[7]
      })
      .then(res => setProducts(products.concat(res.data)))
      .catch(error => console.error(error))
  }

  //edit product
  const onEditProduct = (product, id) => {
    axios
      .put('https://json-products.herokuapp.com/products/' + id, {
        name: product[0],
        price: product[1],
        image: product[2],
        stock: product[3],
        count:product[4],
        description:product[5],
        extras:product[6],
        size:product[7]
      })
      .then(res => setProducts(products.map(product =>
        product.id === id ? res.data : product)))
      .catch(error => console.error(error))
  }

  const onSearchProduct = (text) => {
    if (text !== '') {
      axios
        .get('https://json-products.herokuapp.com/products?q=' + text)
        .then(res => setProducts(res.data))
    }
    else {
      return
    }
  }
  return (
    <div>
      <FormAdd onSearchProduct={onSearchProduct} onAddProduct={onAddProduct} />
      <Product products={currentProduct} onRemoveProduct={onRemoveProduct} onEditProduct={onEditProduct} onAddProduct={onAddProduct} loading={loading} />
      <Pagination productPage={productPage} totalProduct={products.length} paginate={paginate} />
    </div>
  );
}

export default App;