import { useLoaderData } from "react-router-dom";
import Use from "../Use/Use";
import './User.css'


const User = () => {
    const user = useLoaderData();
    return (
        <div>
            <h1>user: {user.length}</h1>
           <h2>This is user page</h2> 
           <div className="user">
           {
            user.map(use=><Use key={use.id}
            use={use}></Use>)
           }
           </div>
        </div>
    );
};

export default User;