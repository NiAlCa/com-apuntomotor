import Form from "../../components/Form/Form";
import Map from "../../components/Maps/Map";
import logo from "../../assets/Logo2.webp";
import Menu from "../../components/Menu/Menu";

export const Contacto = () => {
  return (
    <div className="row justify-content-center flex-md-row flex-column-reverse ">
      <div className="col-md-8 col-12 px-5 mt-5 mb-5  ">

        <Map />
        <br></br>
        <br></br>
        <Form />
      </div>

      <div className="col-xl-2 col-sm-4 menuServicios d-flex flex-sm-row flex-md-column col-12  justify-content-md-start justify-content-between px-5 px-sm-5 animate__animated animate__zoomInRight">
        <a href="/"  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none  ">
          <img src={logo} style={{ maxWidth: '200px',}} alt="Logo" />
        </a>
        <Menu column={true} />
      </div>
    </div>
  );
};
