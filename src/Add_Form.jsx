import { useState } from "react";
import './add_form.css';

export default function Add_Form ({add, setAdd}){
    

    function handleChange(e){
        setAdd({...add,[e.target.name] : e.target.value})
    }

    return (
        <div className="Add_Form">
            <div className="inputComponent">

            <label htmlFor="name">Name : </label>
                <input onChange={handleChange} id="name" name="name" type="text" />
            </div>
            <div className="inputComponent">
                
            <label htmlFor="address">Address : </label>
                <textarea onChange={handleChange} id="address" name="address" type="text" />
            </div>
            <div className="inputComponent">

            <label htmlFor="ph">Phone No.</label>
                <input onChange={handleChange} id="ph" name="ph" type="number" />
            </div>
        </div>
    )
}