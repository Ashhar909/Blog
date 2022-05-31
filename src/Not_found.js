import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>That page cannot be found</p>
            <br />
            <br />
            <br />
            <Link to='/'>Back to the home page .....</Link>
        </div>
     );
}
 
export default NotFound;