import punto from "../../assets/punto.png";
import "./Navbar.scss";
import "../../styles/variables.scss";

export const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-space-center py-3 border-bottom">
      <div className="nav-left">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">
            A<img src={punto} alt="punto" width="40" height="40" />
            MOTOR
          </span>
        </a>
      </div>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            INICIO
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            SERVICIOS
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            CONTACTO
          </a>
        </li>
      </ul>
    </header>
  );
};
