import { useState } from "react";
export default function Counter() {
    const [ count, setCount ] = useState(0);
    return (
        <div>
            <p> Count: {count} </p>
            <button onClick= {() => setCount (c=>c+1)}> INCREMENT </button>
            <button onClick={() => setCount(c=>c-1)}> DECREMENT </button>
        </div>
    );
}