import { Link, useRouteError } from "react-router-dom";


const Error = () => {

    const error = useRouteError();
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>Page not found</p>
                    <Link to={'/'}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;