import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Form, FormGroup, Input, Modal } from 'reactstrap'
import icon from './img/171-512.png';
import edit from './img/edit.svg';

const ItemProduct = ({ onRemoveProduct, id, name, stock, price, image, onEditProduct,count,description,extras,size}) => {
    const [modalEdit, setModalEdit] = useState(false);

    const toggle = () => setModalEdit(!modalEdit);

    const handleSubmitEdit = (e) => {

        const productAfterEdit = [e.target.productName.value, e.target.productPrice.value, e.target.productImage.value, e.target.productStock.value, e.target.productCount.value, e.target.productDescription.value, e.target.productExtras.value,e.target.productSize.value]
        console.log(productAfterEdit, id);

        onEditProduct(productAfterEdit, id)
    }
    return (

        <tr>
            <th scope="row" className="id-stt">{id}</th>
            <td><img className="img-product" src={image} alt="image product" /></td>
            <td>{name}</td>
            <td>{price}<sup>$</sup></td>
            <td>{stock}</td>
            <td>{count}</td>
            <td className="active-td">{description}</td>
            <td className="active-td">{extras}</td>
            <td> <Button color="secondary edit" onClick={toggle}><img className="icon-delete" src={edit} /></Button>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    <img className="icon-delete" src={icon} />
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-delete" role="document">
                        <div class="modal-content modal-content-delete">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">GYM HOME</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                              <p>Bạn có chắc chắn rằng muốn xóa sản phẩm này ?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary button-delete" data-dismiss="modal">Close</button>
                                <button type="button" class="button-delete" data-dismiss="modal"> <Button className="delete" onClick={() => onRemoveProduct(id)}>Yess</Button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <Modal isOpen={modalEdit} toggle={toggle}>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <Form className="pt-5 pb-5 pr-5 pl-5" onSubmit={(e) => handleSubmitEdit(e)}>
                    <h2 className="font-baloo">Chỉnh Sửa Sản Phẩm</h2>
                    <p>To get your Full Membership Experience. Choose your preferred trial membership below.</p>
                    <FormGroup>

                        <Input type="text" name="productImage" id="productImage" defaultValue={image} />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="productName" id="productName" defaultValue={name} />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="productPrice" id="productPrice" defaultValue={price} />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="productStock" id="productStock" defaultValue={stock} />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="productCount" id="productCount" defaultValue={count} />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="productDescription" id="productDescription" defaultValue={description} />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="productExtras" id="productExtras" defaultValue={extras} />
                    </FormGroup>
                    <FormGroup>

                        <Input type="text" name="productSize" id="productSize" defaultValue={size} />
                    </FormGroup>
                    <Button className="btn-submit font-baloo" color="success" type="submit" onSubmit={(e) => handleSubmitEdit(e)}>Thay đổi Chỉnh Sửa</Button>
                </Form>
            </Modal>
        </tr>

    );
}

export default ItemProduct;
