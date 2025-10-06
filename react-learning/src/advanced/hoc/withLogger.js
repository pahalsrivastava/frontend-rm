import React from "react";
export function withLogger(WrappedComponent) {
    return class extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('Old prosp:', prevProps);
            console.log('New props:', this.props);
        }
        render(){
            return <WrappedComponent {...this.props} />;
        }
    };
}

function User({name}){
    return <h3> User: {name}</h3>
}
const UserWithLogger = withLogger(User);

export default function HOCExample(){
    const [name, setName] = React.useState('Alice');
    return(
        <>
        <UserWithLogger name={name}/>
        <button onClick={() => setName('Bob')}> Change Name </button>
        </>
    );
}