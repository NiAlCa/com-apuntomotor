import punto from "../../assets/Logo2.png";
import "./Navbar.scss";
import "../../styles/variables.scss";
import Menu from "../Menu/Menu";

export const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-space-center border-bottom">
      <div className="nav-left col-8 col-sm-4">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={punto} alt="punto" style={{ maxWidth: '200px',}} />
        </a>
      </div>

      <Menu/>
    </header>
  );
};
