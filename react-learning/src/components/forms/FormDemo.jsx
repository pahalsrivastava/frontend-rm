import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormDemo(){
    const [formData, setFormData] = useState({
        name:"",
        city:""
    });
    const [ errors, setErrors ]= useState({});
    const navigate= useNavigate();

    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const validate = () =>{
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if(!formData.city) tempErrors.city = "City is required to go ahead";
        else if(/\d/.test(formData.city)) tempErrors.city = "Enter a valid city/address. ";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            alert(`Form submitted: \nName: ${formData.name} \nCity: ${formData.city}`);
            setFormData({name: "", city: ""});
            setErrors({});
            navigate(`/api-weather?city=${formData.city}`);
        }
    };
    return (
        <div>
            <h2> Enter your details (form sumbit and control components) </h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label> Name: </label> <br/>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                {errors.name && <div style={{color:"red"}}>  {errors.name} </div>}
            </div>
            <div>
                <label> City: </label><br/>
                <input type="text" name="city" value={formData.city} onChange={handleChange}/>
                {errors.city && <div style ={{color:"red"}}> {errors.city } </div>}
            </div>
            <button type="submit" style ={{marginTop: "1rem"}}> get weather </button>
            </form>
        </div>
    );
}

export default FormDemo;