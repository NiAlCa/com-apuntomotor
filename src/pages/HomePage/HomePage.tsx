import { Cards } from "../../components/Cards/Cards";
import { Carrusell } from "../../components/Carrusell/Carrusell";

import  Form  from "../../components/Form/Form";
import { Main } from "../../components/Main/Main";
import Map from "../../components/Maps/Map";
import { Navbar } from "../../components/Navbar/Navbar";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";
import image from "../../assets/imagenes/1.jpg"
import image2 from "../../assets/imagenes/4.jpg"
import { ContenedorPage } from "../../components/Contenedor/Contenedor";

export const HomePage = () => {



  return (
    <>
      <Navbar />
      <div className="page  align-items-center flex-column d-flex justify-content-center">
        <ContenedorPage
        bi={image }
        bgFilter={true}
        >
          <Main />
        </ContenedorPage>

        <Carrusell />

        <ContenedorPage bg="bg-warning">
          <Services />
        </ContenedorPage>

      <ContenedorPage bg="bg-light">    <Cards /> </ContenedorPage>
    <ContenedorPage  bi={image2}
    > <Review /></ContenedorPage>

        <ContenedorPage bg="bg-light">
        <Map />
        <Form />
        </ContenedorPage>

      </div>
    </>
  );
};
