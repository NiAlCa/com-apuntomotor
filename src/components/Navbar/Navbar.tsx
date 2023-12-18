import punto from "../../assets/Logo2.png";
import "./Navbar.scss";
import "../../styles/variables.scss";

export const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-space-center border-bottom">
      <div className="nav-left col-8">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={punto} alt="punto" width="250" />
        </a>
      </div>

      <ul className="nav nav-pills col-4">
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
