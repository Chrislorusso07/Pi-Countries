import { Link } from "react-router-dom";
import "./landingpage.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <Link to={"/home"} className="enter-link">
          <button className="entrar"> Entrar </button>
        </Link>
      </div>
      <footer className="footer">
        <p>Todos los derechos reservados &copy; 2023</p>
      </footer>
    </div>
  );
};

export default Landing;
