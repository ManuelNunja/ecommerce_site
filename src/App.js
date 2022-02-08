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
    <div className="App">
      <Navbar></Navbar>
      <div className='div--separator'></div>
      <HeadCarousel></HeadCarousel>
      <ListSquare></ListSquare>
      <ProductList></ProductList>
      {/*<div>{errorMessage}</div>*/}
      {/*<ItemListContainer></ItemListContainer>*/}
    </div>
  );
}

export default App;
