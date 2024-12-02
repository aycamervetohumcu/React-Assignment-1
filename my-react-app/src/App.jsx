import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import CounterPage from './pages/CounterPage';
import About from './pages/About';
import Gallery from './Components/Gallery';
import ColorPickPage from './pages/ColorPickPage';
import { ColorProvider } from './contexts/ColorContext';
import ToDoPage from "./pages/ToDoPage";

function App() {
  return (
    <ColorProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/color-picker" element={<ColorPickPage />} />
          <Route path="/to-do" element={<ToDoPage />} />
        </Routes>
        <Footer />
      </Router>
    </ColorProvider>
  );
}

export default App;
