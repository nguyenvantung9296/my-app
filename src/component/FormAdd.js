import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Input, Form, Modal, FormGroup } from 'reactstrap'
import '../App.css'
const FormAdd = ({ onAddProduct, onSearchProduct }) => {

    const [modalAdd, setModalAdd] = useState(false);

    const toggle = () => setModalAdd(!modalAdd);

    const handleSubmitAddForm = (e) => {

        const info = [e.target.productName.value, e.target.productPrice.value, e.target.productImage.value, e.target.productStock.value, e.target.productCount.value, e.target.productDescription.value, e.target.productExtras.value,e.target.productSize.value]

        onAddProduct(info);
    }

    const handleSubmitSearchProduct = (e) => {
        e.preventDefault()

        onSearchProduct(e.target.searchBox.value)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-md-12-form">
                    <div className="content-title">
                        <h5>Trang CMS quản lý sản phẩm của <span className="home-h5">Home</span> Gym</h5>
                        <p className="p-name-admin">Admin - Tungnguyen - id:090296</p>
                    </div>
                    <div className="dashboard">
                        <div className="button-group">
                            <Button className="font-baloo-button" color="primary" onClick={toggle}>Thêm Mới Sản Phẩm</Button>
                            <Modal isOpen={modalAdd} toggle={toggle}>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <Form className="pt-5 pb-5 pr-5 pl-5 font-baloo-h2 " onSubmit={(e) => handleSubmitAddForm(e)}>
                                    <h2>Thêm Mới Sản Phẩm</h2>
                                    <p>To get your Full Membership Experience. Choose your preferred trial membership below.</p>
                                    <FormGroup>
                                        <Input type="text" name="productImage" id="productImage" placeholder="Nhập ảnh sản phẩm mới" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="productName" id="productName" placeholder="Nhập tên sản phẩm" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="productPrice" id="productPrice" placeholder="Nhập giá sản phẩm" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="productStock" id="productStock" placeholder="Nhập stock sản phẩm" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="productCount" id="productCount" placeholder="Nhập count sản phẩm" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="productDescription" id="productDescription" placeholder="Nhập description sản phẩm" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="productExtras" id="productExtras" placeholder="Nhập extras sản phẩm" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="productSize" id="productSize" placeholder="Nhập size sản phẩm" />
                                    </FormGroup>
                                    <Button className="btn-submit font-baloo" color="success" type="submit" onSubmit={(e) => handleSubmitAddForm(e)} >THÊM SẢN PHẨM</Button>
                                </Form>
                            </Modal>
                        </div>

                        <Form className=" form-group search-form" onSubmit={(e) => handleSubmitSearchProduct(e)}>
                            <Input type="text" name="searchBox" id="searchBox" placeholder="Nhập vào để tìm kiếm" />
                            <Button color="success" onSubmit={(e) => handleSubmitSearchProduct(e)}>Search</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormAdd;