import { footerData } from "../../data/footerData.mock";

const horario = footerData.find((item) => item.title === "HORARIO") || {
  title: "",
  text: "",
};
const direccion = footerData.find((item) => item.title === "DONDE ESTAMOS") || {
  title: "",
  text: "",
};
const contacto = footerData.find(
  (item) => item.title === "CONTACTO CON NOSOTROS"
) || { title: "", text: "", telefono: "", movil: "" };
const taller = footerData.find(
  (item) => item.title === "TALLER MECANICO CHIVA"
) || { title: "", title2: "", title3: "", title4: "", title5: "" };

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary py-3">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h5>{horario.title}</h5>
            <p className="text-white">{horario.text}</p>
            <h5>{direccion.title}</h5>
            <p className=" text-white">{direccion.text}</p>
          </div>
          <div className="col-md">
            <h5>{contacto.title}</h5>
            {contacto.text && <p className=" text-white">{contacto.text}</p>}
            {contacto.telefono && (
              <p className=" text-white"> {contacto.telefono}</p>
            )}
            {contacto.movil && <p className=" text-white">{contacto.movil}</p>}
          </div>
          <div className="col-md">
            <h5 className=" text-white">{taller.title}</h5>

            <h5 className=" text-white">{taller.title2}</h5>
            <h5 className=" text-white">{taller.title3}</h5>
            <h5 className=" text-white">{taller.title4}</h5>
            <h5 className=" text-white">{taller.title5}</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
