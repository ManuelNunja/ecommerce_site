import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ListSquare from './components/listSquare/ListSquare';
import HeadCarousel from './components/headCarousel/HeadCarousel';
import ItemCounter from './components/counter/ItemCounter';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeadCarousel></HeadCarousel>
      <ListSquare></ListSquare>
      {/*<ItemListContainer></ItemListContainer>*/}
    </div>
  );
}

export default App;
