import './App.css';
import Header from './components/Header';
import TableData from './components/TableData';
import ModalDialog from './components/ModalDialog';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [productList, setProductList] = useState([]);
  const [editProduct, setEditProduct] = useState({
    productId: null,
    productName: '', productQty: '', productPrice: ''
  });
  const [addProButton, setAddProButton] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  const handleShowModal = () => {
    setAddProButton(true);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setEditProduct({ productId: null, productName: '', productQty: '', productPrice: '' });
    setErrorMsg('');
  }

  const handleInputChange = (type, value) => {
    if (type === "Name") {
      addProButton ? setEditProduct({ ...editProduct, productId: productList.length + 1, productName: value })
        : setEditProduct({ ...editProduct, productName: value });
    }
    else if (type === "Qty") {
      addProButton ? setEditProduct({ ...editProduct, productId: productList.length + 1, productQty: value })
        : setEditProduct({ ...editProduct, productQty: value });

    }
    else if (type === "Price") {
      addProButton ? setEditProduct({ ...editProduct, productId: productList.length + 1, productPrice: value })
        : setEditProduct({ ...editProduct, productPrice: value });
    }
  }

  const validateUserInput = () => {
    if (editProduct.productName === "") {
      setErrorMsg("Product Name is Mandatory");
      return true;
    }
    if (editProduct.productQty === "" || editProduct.productQty < 0) {
      setErrorMsg("Product Quantity is Mandatory and must be a Positive Number");
      return true;
    }
    if (editProduct.productPrice === "" || editProduct.productPrice < 0) {
      setErrorMsg("Product Price is Mandatory and must be a greater than zero");
      return true;
    }
    return false;
  };


  const handleSaveChanges = (e) => {
    e.preventDefault();
    let error = validateUserInput();
    if (!error) {
      setProductList([...productList, editProduct]);
      handleCloseModal();
    }
  }

  const handleUpdateProduct = (productId, updatedData) => {
    const updatedList = productList.map((item) => {
      if (item.productId === productId) {
        return { ...item, ...updatedData };
      }
      return item;
    });

    setProductList([...updatedList]);
    handleCloseModal();
  };

  const handleEdit = (item) => {
    setAddProButton(false);
    setShowModal(true);
    setEditProduct(item);
  }



  return (
    <div className="App">
      <Header handleShowModal={handleShowModal}/>
      <ModalDialog showModal={showModal}
        handleCloseModal={handleCloseModal}
        editProduct={editProduct}
        handleInputChange={handleInputChange}
        errorMsg={errorMsg}
        handleSaveChanges={handleSaveChanges}
        handleUpdateProduct={handleUpdateProduct}
        addProButton ={addProButton}
      />

      <TableData productList={productList}
        setShowModal={setShowModal}
        setProductList={setProductList}
        handleEdit={handleEdit} />
    </div>
  );
}

export default App;
