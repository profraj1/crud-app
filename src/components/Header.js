import React from 'react'
import { Button } from 'react-bootstrap'



export default function Header({ handleShowModal }) {

  return (
    <div>
      <h2>CRUD Operation Using Collection</h2>
      <Button variant="primary" onClick={handleShowModal}>Add Product Details</Button>
      <br /> <br />
    </div>
  )
}
