import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/home';
import CounterPage from './pages/CounterPage';
import About from './pages/About';
import Gallery from "./Components/Gallery.jsx";
import ColorPickPAge from "./pages/ColorPickPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/color-picker" element={<colorPickPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
