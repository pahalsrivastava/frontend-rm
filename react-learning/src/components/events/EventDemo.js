import React, { useState }from 'react'

function EventDemo(){
    const [ count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count+1);
    };
    const handleFormSubmit =(e)=>{
        e.preventDefault();
        alert("Form Submitted");
    };
    return (
        <div style={{padding: "1rem"}}>
            <h2> EVENT HANDING IMPLEMENTATION </h2>
            <button onClick={handleClick}> CLICKED {count} times</button>
            <form onSubmit={handleFormSubmit} style={{marginTop:"1rem"}}>
                <input type ='text' placeholder='type here'/>
                <button type="submit"> SUBMIT </button>
            </form>
        </div>
    );
}
export default EventDemo;