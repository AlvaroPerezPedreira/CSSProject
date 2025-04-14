import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Carousel from "./pages/Carousel";
import Home from "./pages/Home";
import Card from "./pages/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3d-carousel" element={<Carousel />} />
          <Route path="/3d-card" element={<Card />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
