import "./App.css";
import Carousel from "./pages/Carousel/Carousel";
import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import CardHover from "./pages/CardHover/CardHover";
import Glassmorphism from "./pages/Glassmorphism/Glassmorphism";
import Slider from "./pages/Slider/Slider";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="section-container">
          <Home />
        </div>
        <div className="section-container">
          <Carousel />
        </div>
        <div className="section-container">
          <Glassmorphism />
        </div>
        <div className="section-container">
          <CardHover />
        </div>
        <div className="section-container">
          <Card />
        </div>
        <div className="section-container">
          <Slider />
        </div>
      </div>
    </>
  );
}

export default App;
