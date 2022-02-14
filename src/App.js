import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ListSquare from './components/listSquare/ListSquare';
import HeadCarousel from './components/headCarousel/HeadCarousel';
import ItemCounter from './components/counter/ItemCounter';
import {task} from "./helpers/promises"
import { useState } from 'react';
import ProductList from './components/productList/ProductList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ListSquareItemDetail from './components/listSquare/ListSquareItemDetail';

function App() {
  {/*const [errorMessage, setErrorMessage] = useState("");

  task.then((result) => {
    if(!result){
      throw new Error("Error de logica")
    }
    console.log({result})
  }, (error) => {
      console.log({error})
    }
  )
  .catch((error) => {
    setErrorMessage(error.message)
    console.log("error catch", error)
  }).finally(() => {
    console.log("Finalizado")
  })*/}
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <div className='div--separator'></div>
        <Routes>
          {/* <HeadCarousel></HeadCarousel> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path="/ListSquareItemDetail" element={<ListSquareItemDetail />} />
          {/* <div className='div--separator'></div>
          <h2 className='h2--title'>Premium Products</h2>
          <h3 className='h3--title'>My E-commerce</h3> */}
        </Routes>
        <div className='div--separator'></div>
        {/*<div>{errorMessage}</div>*/}
        {/*<ItemListContainer></ItemListContainer>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
