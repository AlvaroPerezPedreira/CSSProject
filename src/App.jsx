import "./App.css";
import Carousel from "./pages/Carousel";
import Home from "./pages/Home";
import Card from "./pages/Card";
import CardHover from "./pages/CardHover";

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
          <CardHover />
        </div>
        <div className="section-container">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
