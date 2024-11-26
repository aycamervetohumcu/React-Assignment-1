import { useState } from "react";

function ColorPickPage() {
const [selectedColor, setSelectedColor] = useState("#000000");

const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
};
return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: selectedColor,
        color: selectedColor === "#000000" ? "#FFFFFF" : "#000000",
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