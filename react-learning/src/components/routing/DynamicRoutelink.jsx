import { useNavigate } from "react-router-dom";
function DynamicRoutelink() {
    const navigate = useNavigate();
    const handleGo = () => {
        const randomId = Math.floor(Math.random()*1000);
        navigate(`/dynamic/${randomId}`);
    };
    return <button onClick={handleGo}> Click here for the auto-generated route. </button>;
}

export default DynamicRoutelink;
