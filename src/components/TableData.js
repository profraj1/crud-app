import React from 'react'
import { Button, Table } from 'react-bootstrap'

export default function TableData({ productList, setShowModal, setProductList, handleEdit }) {

    const handleRemove = (item) => {
        const newProductList = productList.filter(ele => ele !== item);
        setProductList([...newProductList]);
    }

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map(item => (
                        <tr key={item.productId}>
                            <td>{item.productId}</td>
                            <td>{item.productName}</td>
                            <td>{item.productQty}</td>
                            <td>{item.productPrice}</td>
                            <td>
                                <Button variant='primary' onClick={() => handleEdit(item)}> Edit </Button>
                            </td>
                            <td>
                                <Button variant='danger' onClick={() => handleRemove(item)}> Remove </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    )
}
