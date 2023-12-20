import Form from "../../components/Form/Form";
import Map from "../../components/Maps/Map";
import logo from "../../assets/Logo2.png";
import Menu from "../../components/Menu/Menu";

export const Contacto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-9 bg-light">
        <h1 className="text-secondary text-center mx-3 mt-5 mb-5">CONTACTANOS</h1>
        <Map />
        <br></br>
        <br></br>
        <Form />
      </div>

      <div className="col-3 d-flex flex-column align-items-center menuServicios">
        <a href="/">
          <img src={logo} width="250" alt="Logo" />
        </a>
        <Menu column={true} />
      </div>
    </div>
  );
};
