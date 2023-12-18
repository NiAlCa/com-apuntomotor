
import { Cards } from "../../components/Cards/Cards";
import { Carrusell } from "../../components/Carrusell/Carrusell";
import { Form } from "../../components/Form/Form";
import { Main } from "../../components/Main/Main";
import Map from "../../components/Maps/Map";
import { Navbar } from "../../components/Navbar/Navbar";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";




export const HomePage = () => {
  return (
    <>
         <Navbar />
         <div className="page">

   
       
      <Main />
      <Carrusell />
      <Services />
      <Cards />
      <Review />
      <Map />
      <Form/>
    </div>
    </>
  );
};
