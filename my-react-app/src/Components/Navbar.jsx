import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../contexts/ColorContext";

function Navbar() {
  const { navbarColor } = useContext(ColorContext);

  return (
    <nav style={{ backgroundColor: navbarColor, padding: "1rem" }}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/color-picker">Color Picker</Link></li>
        <li><Link to="/to-do">To-Do List</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
