import { Cards } from "../../components/Cards/Cards";
import { Carrusell } from "../../components/Carrusell/Carrusell";
import { Form } from "../../components/Form/Form";
import { Main } from "../../components/Main/Main";
import Review from "../../components/Review/Review";


export const HomePage = () => {
  return (
    <div className="page">
      <Main />
      <Carrusell />
      <Cards />
      <Review />
      <Form/>
    </div>
  );
};
