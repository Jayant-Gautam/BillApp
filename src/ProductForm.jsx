import DisplayProducts from './DisplayProducts';
import { useState } from 'react'
import './product_form.css'

function ProductForm({ Products, setProducts, product, set_product }) {
  let pDetails = {
    "JOINT CARE CAPSULE": 18,
    "FLAX SEED SOFTGEL": 18,
    "CALCIUM+ TABLET": 18,
    "NONI JUICE 500 ML": 12,
    "ADULSA PLUS COUGH SYRUP": 12,
    "ORTHO PAIN OIL 50 ML": 12,
    "KIDNEY CARE SYRUP": 12,
    "LADY CARE SYRUP": 12,
    "DIGESTIVE PLUS SYRUP": 12,
    "ORTHO FIT SOFTGEL": 12,
    "ORTHO POWER SOFTGEL": 12,
    "PAIN OIL (ROLL ON)": 12,
    "VATA CARE CAPSULE": 12,
    "LIVER HEALTH DS SYRUP": 12,
    "KAYA SODHAN CAPSULE": 12,
    "REAL MUSTANG CAPSULE": 12,
    "ANTI SUGAR TABLET": 12,
    "JOINT CARE STRIP": 18,
    "VATA CARE STRIP": 12,
    "WOMEN CARE CAPSULE": 12,
    "RED ALOEVERA JUICE - 1Ltr": 12,
    "PLETLET-PLUS": 12
  }

  function handleChange(e) {
    if (e.target.name == 'pName') {
      let gst = pDetails[e.target.value]
      set_product({ ...product, [e.target.name]: e.target.value, GST: gst });
    }
    else {
      set_product({ ...product, [e.target.name]: e.target.value });
    }
  }

  function addProduct(e) {
    e.preventDefault();
    //   console.log(e.form)
    setProducts([...Products, product])
    console.log(product)
    console.log(Products)
  }

  return (
    <>
      <form action="" onSubmit={addProduct} className='ProductForm'>
        {/* for Product */}
        <div className="inputComponent">
          <label htmlFor="product">Product Name : </label>
          <select onChange={handleChange} id="product" name='pName'>

            <option value="">--Please choose an option--</option>
            <option value="JOINT CARE CAPSULE">JOINT CARE CAPSULE</option>
            <option value="FLAX SEED SOFTGEL">FLAX SEED SOFTGEL</option>
            <option value="CALCIUM+ TABLET">CALCIUM+ TABLET</option>
            <option value="NONI JUICE 500 ML">NONI JUICE 500 ML</option>
            <option value="ADULSA PLUS COUGH SYRUP">ADULSA PLUS COUGH SYRUP</option>
            <option value="ORTHO PAIN OIL 50 ML">ORTHO PAIN OIL 50 ML</option>
            <option value="KIDNEY CARE SYRUP">KIDNEY CARE SYRUP</option>
            <option value="LADY CARE SYRUP">LADY CARE SYRUP</option>
            <option value="DIGESTIVE PLUS SYRUP">DIGESTIVE PLUS SYRUP</option>
            <option value="ORTHO FIT SOFTGEL">ORTHO FIT SOFTGEL</option>
            <option value="ORTHO POWER SOFTGEL">ORTHO POWER SOFTGEL</option>
            <option value="PAIN OIL (ROLL ON)">PAIN OIL (ROLL ON)</option>
            <option value="VATA CARE CAPSULE">VATA CARE CAPSULE</option>
            <option value="LIVER HEALTH DS SYRUP">LIVER HEALTH DS SYRUP</option>
            <option value="KAYA SODHAN CAPSULE">KAYA SODHAN CAPSULE</option>
            <option value="REAL MUSTANG CAPSULE">REAL MUSTANG CAPSULE</option>
            <option value="ANTI SUGAR TABLET">ANTI SUGAR TABLET</option>
            <option value="JOINT CARE STRIP">JOINT CARE STRIP</option>
            <option value="VATA CARE STRIP">VATA CARE STRIP</option>
            <option value="WOMEN CARE CAPSULE">WOMEN CARE CAPSULE</option>
            <option value="RED ALOEVERA JUICE - 1Ltr">RED ALOEVERA JUICE - 1Ltr</option>
            <option value="PLETLET-PLUS">PLETLET-PLUS</option>

          </select>
        </div>
        <div className="inputComponent">
          <label htmlFor="price">Price : </label>
          <input onChange={handleChange} id='price' name='price' type="number" />
        </div>
        <div className="inputComponent">
          <label htmlFor="quantity">Quantity : </label>
          <input onChange={handleChange} id='quantity' name='quantity' type="number" />
        </div>
        <button className='submitButton' type='submit'>Add Product</button>
        <DisplayProducts Products={Products} setProducts={setProducts} />
      </form>
    </>
  )
}

export default ProductForm