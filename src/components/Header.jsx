import { Link } from "react-router-dom";
import '../App.css'

const Header = () => {

    return (
        <div >
            <Link to="/" className="mx-1">Home</Link>
            <Link to="/users">Users</Link>
        </div>
    );
};

export default Header;