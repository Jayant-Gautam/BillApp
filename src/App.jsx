import { useState } from 'react'
import './App.css'
import Add_Form from './Add_Form';
import ProductForm from './ProductForm';
import Bill from './Bill';

function App() {
  let [Products,setProducts] = useState([]);
  let [product, set_product] = useState({pName : "", price : 0, quantity : 0, GST : 0})
  let [add, setAdd] = useState({name : "", ph : null, address : "", billNo : null, boxNo: null})
  let [generateBill,setGenerateBill] = useState("False")
  let [name, setName] = useState("JAIRAAG HERBALS")

  function handleClick(){
    setGenerateBill(!generateBill);
  }

  return (
    <div className='app'>
      <label htmlFor="">
        <input type="radio" value="JAIRAAG HERBALS" checked={name === "JAIRAAG HERBALS"} onChange={(e) => setName(e.target.value)}/>
        JAIRAAG HERBALS
      </label>
      <label htmlFor="">
        <input type="radio" value="M/s A.D. TRADERS" checked={name === "M/s A.D. TRADERS"} onChange={(e) => setName(e.target.value)}/>
        M/s A.D. TRADERS
      </label>
      { generateBill && <ProductForm Products={Products} setProducts={setProducts} product={product} set_product={set_product}/> }
      { generateBill && <Add_Form add={add} setAdd={setAdd}/> }
      { generateBill ? <button onClick={handleClick}>Generate Bill</button> : <button onClick={handleClick}>Edit</button> }

      {
        !generateBill && <Bill Products={Products} add={add} name={name}/>
      }
    </div>
  )
}

export default App
