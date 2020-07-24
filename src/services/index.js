import axios from 'axios';
const baseUrl = 'https://json-products.herokuapp.com/products/';
const getAll = () =>{
    return axios.get(baseUrl)
}

const create = newPrice => {
    return axios.post(baseUrl, newPrice)
  }
  const remove = id =>{
      return axios.delete(`${baseUrl}/${id}`)
  }
  const editProduct = id =>{
    return axios.put(`${baseUrl}/${id}`)
}
const update = (id, changedPart) => {
    return axios.patch(`${baseUrl}/${id}`, changedPart)
  }
  
  export default {
    getAll,
    create,
    remove,
    update,
    editProduct
  }