import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/color-picker">Color Picker</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
