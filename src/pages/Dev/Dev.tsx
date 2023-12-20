import { Cards } from "../../components/Cards/Cards";
import { Carrusell } from "../../components/Carrusell/Carrusell";
import  Form  from "../../components/Form/Form";
import { Main } from "../../components/Main/Main";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";
import "./Dev.scss";


export const Dev = () => {
  return (
    <div className="page">


      <Main />
      <Carrusell />
      <Services />
      <Cards />
      <Review />
      <Form/>

    </div>
  );
};
