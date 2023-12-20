import { ContenedorPage } from "../../components/Contenedor/Contenedor";
import Form from "../../components/Form/Form";
import Map from "../../components/Maps/Map";

export const Contacto = () => {
  return (
    <div>
      <ContenedorPage bg="bg-light">
        <br></br>
        <br></br>
        <h1 className="text-secondary text-center mx-3">CONTACTANOS</h1>
        <br></br>
        <br></br>
        <Map />
        <br></br>
        <br></br>
        <Form />
      </ContenedorPage>
    </div>
  );
};
