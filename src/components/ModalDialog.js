import React from 'react'
import { Form, ModalBody, Modal, ModalFooter, ModalHeader, ModalTitle, Button } from 'react-bootstrap'


export default function ModalDialog({showModal, handleCloseModal, editProduct, handleInputChange,
    errorMsg, handleSaveChanges, handleUpdateProduct,addProButton}) {


    return (
        <div>
            <Modal centered backdrop="static" keyboard="false" show={showModal} onHide={handleCloseModal} >
                <ModalHeader closeButton>
                    {
                        addProButton ?
                            (<ModalTitle>Add Product Information</ModalTitle>) :
                            (<ModalTitle>Edit Product Information</ModalTitle>)
                    }

                </ModalHeader>
                <ModalBody>
                    <Form>
                        {addProButton ?
                            (<Form.Group className='mb-3'>
                                <Form.Control required value={editProduct.productName}
                                    type='text' placeholder='Enter Product Name'
                                    onChange={(e) => { handleInputChange('Name', e.target.value) }} />
                            </Form.Group>) :
                            (<Form.Group className='mb-3'>
                                <Form.Control disabled value={editProduct.productName}
                                    type='text' placeholder='Enter Product Name'
                                    onChange={(e) => { handleInputChange('Name', e.target.value) }} />
                            </Form.Group>)
                        }
                        <Form.Group className='mb-3'>
                            <Form.Control required value={editProduct.productQty}
                                type='number' placeholder='Enter Product Quantity'
                                onChange={(e) => { handleInputChange('Qty', e.target.value) }} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control required value={editProduct.productPrice}
                                type='number' placeholder='Enter Product Price'
                                onChange={(e) => { handleInputChange('Price', e.target.value) }} />
                        </Form.Group>
                        {errorMsg && (<p className='error'>{errorMsg}</p>)}
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    {
                        addProButton ?
                            (<Button variant="primary" onClick={handleSaveChanges}> Add Product </Button>) :
                            (<Button variant="primary" onClick={() => handleUpdateProduct(editProduct.productId, editProduct)}> Update Product </Button>)
                    }


                </ModalFooter>
            </Modal>

        </div>
    )
}
