import {  useLoaderData, useNavigate } from "react-router-dom";


const Postdetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const{id,title,body}=post

    const handleGoBack =()=>{
      navigate(-1);  
    }
    return (
        <div>
            <p>post id:{id}</p>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Postdetails;