import React from 'react';
export default function AccessibleForm() {
    return (
        <form>
            <label htmlFor='name'> Enter your name: </label>
            <input id="name" type="text" aria-required="true"/>
            <button type="submit"> Submit </button>
            </form>
    );
}