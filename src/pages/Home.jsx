import "./styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-title-container">
        <div className="home-title">CSS Project</div>
        <div className="home-author">
          I'm <span></span>
        </div>
      </div>
      <div className="home-description-container">
        <div className="home-description-border">
          <div className="home-description-text">
            This project is designed to practice and enhance CSS skills by
            building interactive and visually appealing components. The primary
            goal is to learn the core concepts of CSS, such as layout
            techniques, animations, responsive design, and styling practices.
          </div>
        </div>
      </div>
    </div>
  );
}
