import { Link } from "react-router-dom";


const Use = ({use}) => {
    const {id,name, email,phone}=use;

    const useStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '10px',
        borderRadius: '15px'
    }
    return (
        <div style={useStyle}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/use/${id}`}>Show Details</Link>
        </div>
    );
};

export default Use;