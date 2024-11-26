import { useState, useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

function ColorPickerPage() {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const { setNavbarColor } = useContext(ColorContext);

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    setNavbarColor(newColor); // Update Navbar color dynamically
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: selectedColor,
        color: selectedColor === "#333" ? "#FFFFFF" : "#333",
        minHeight: "100vh",
      }}
    >
      <h1>Pick a Color</h1>
      <p>Use the input below to select a color and see the background change!</p>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        style={{ margin: "1rem", cursor: "pointer" }}
      />
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
}

export default ColorPickerPage;
