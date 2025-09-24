import React, { useState } from "react";
function FormDemo(){
    const [formData, setFormData] = useState({
        name: "", 
        email: ""
    });
    const [ errors, setErrors ]= useState({});
    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const validate = () =>{
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if(!formData.email) tempErrors.email = "Email is required";
        else if(!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid, enter a valid email";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            alert(`Form submitted: \nName: ${formData.name} \nEmail: ${formData.email}`);
            setFormData({name: "", email: ""});
            setErrors({});
        }
    };
    return (
        <div>
            <h2> FORM DEMO AND CONTROLLED COMPONENTS </h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label> Name: </label> <br/>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                {errors.name && <div style={{color:"red"}}>  {errors.name} </div>}
            </div>
            <div>
                <label> Email: </label><br/>
                <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                {errors.email && <div style ={{color:"red"}}> {errors.email } </div>}
            </div>
            <button type="submit" style ={{marginTop: "1rem"}}> SUBMIT </button>
            </form>
        </div>
    );
}

export default FormDemo;