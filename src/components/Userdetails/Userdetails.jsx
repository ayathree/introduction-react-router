import { useLoaderData } from "react-router-dom";


const Userdetails = () => {
    const use = useLoaderData();

    const {name}= use
    return (
        <div>
            <p>Details about user: {name}</p>
        </div>
    );
};

export default Userdetails;