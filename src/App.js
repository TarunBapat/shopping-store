import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import AddProduct from './components/Products/AddProduct';
import {useSelector} from 'react-redux';
import Login from './components/Auth/Login';
import ProductList from './components/Products/ProductList';
import Cart from './components/Navigation/Cart';
import SearchBar from './components/Navigation/SearchBar';


let DUMMY_PRODUCTS=[
{id:'p1',productName:'Cricket Bat',productDesc:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum '},
{id:'p2',productName:'Food Cutter',productDesc:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum '},
{id:'p3',productName:'Plastic Mugs',productDesc:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum '},
{id:'p4',productName:'Amazon Firestick',productDesc:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum '},
{id:'p5',productName:'Cadbury Celebration',productDesc:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum '},
{id:'p6',productName:'Mugs',productDesc:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum '}

]

function App() {
  const [data,setData]=useState(DUMMY_PRODUCTS);

 
  const toggle=useSelector((state)=>state.toggleProduct.toggleProductInput);
  const isLoggedIn=useSelector((state)=>state.toggleLogin.isLoggedIn);
  const toggleCart=useSelector((state)=>state.cartLogin.cartState);

    const addDataHandler=(productName,productDesc)=>{
    let newData={
        id: new Date().toString(),
        productName:productName,
        productDesc:productDesc
      }
    console.log(newData);
    setData((prevData)=>{
      return(
        [...prevData,newData]
        )
    })

  }

  const onSearchHandler=(searchVal)=>{
    console.log(typeof(searchVal))
    let searchedData=data.filter((val)=>val.productName.toLowerCase().includes(searchVal.toLowerCase()))
    console.log(searchedData)
    setData((prevData)=>searchedData)
  }


  return (
    <div className="App">
      {isLoggedIn && <Navigation/>}
      {isLoggedIn && <SearchBar onSearch={onSearchHandler}/>}
      {toggle && isLoggedIn &&  <AddProduct onAddData={addDataHandler}/>}
      {!isLoggedIn && <Login />}
       {toggleCart && isLoggedIn &&<Cart/>}
      {isLoggedIn && !toggle && <ProductList data={data}/>}  
    </div>
  );
}

export default App;
