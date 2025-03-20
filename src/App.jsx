import { useState } from 'react'
import './App.css'
import Add_Form from './Add_Form';
import ProductForm from './ProductForm';
import Bill from './Bill';

function App() {
  let [Products,setProducts] = useState([]);
  let [product, set_product] = useState({pName : "", price : 0, quantity : 0, GST : 0})
  let [add, setAdd] = useState({name : "", ph : 0, address : ""})
  let [generateBill,setGenerateBill] = useState("False")

  function handleClick(){
    setGenerateBill(!generateBill);
  }

  return (
    <div className='app'>
      { generateBill && <ProductForm Products={Products} setProducts={setProducts} product={product} set_product={set_product}/> }
      { generateBill && <Add_Form add={add} setAdd={setAdd}/> }
      { generateBill ? <button onClick={handleClick}>Generate Bill</button> : <button onClick={handleClick}>Edit</button> }
      {
        !generateBill && <Bill Products={Products} add={add}/>
      }
    </div>
  )
}

export default App
