import React from 'react';
import ItemProduct from './ItemProduct'
function Product({ products, onRemoveProduct,onAddProduct,onEditProduct,loading }) {
    if(loading){
        return <h5>Loading...</h5>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table>
                        <tbody>
                            <tr className="th-head">
                                <td>STT</td>
                                <td>Ảnh</td>
                                <td>Tên Sản Phẩm</td>
                                <td>Giá</td>
                                <td>STOCK</td>
                                <td>Count</td>
                                <td>Xóa</td>
                            </tr>
                            {
                                products.map(product =>
                                    <ItemProduct
                                        key={product.id}
                                        product={product}
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                        stock={product.stock}
                                        description={product.description}
                                        extras={product.extras}
                                        count={product.count}
                                        size={product.size}
                                        onRemoveProduct={onRemoveProduct}
                                        onEditProduct={onEditProduct}
                                        onAddProduct={onAddProduct}
                                        
                                    />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Product;
