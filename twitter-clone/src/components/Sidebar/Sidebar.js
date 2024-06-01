import "./Sidebar.css";
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo";

function Sidebar() {
    return (
        <div className="sidebar">
            <Logo />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/notifications">Notifications</Link>
                </li>
                <li>
                    <Link to="/messages">Messages</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;