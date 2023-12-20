import "./Form.scss";
import { useTranslation } from "react-i18next";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-center mt-4 mb-4">
      <div className="col-md-6 templatemo_contactform  w-75 ">
        <div className="d-flex justify-content-around align-items-center mb-5">
          <div className="divider" />
          <h2 className="text-secondary text-center mx-3">
            {t("servi.formulario")}
          </h2>
          <div className="divider" />
        </div>
        <form action="enviar.php" method="post">
          <div className="div-inputs d-flex">
            <div>
              <label htmlFor="name">Nombre<span className="required"></span>:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="name required"
                required
              />
            </div>
            <div>
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                className="apellido"
              />
            </div>
          </div>
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            name="mail"
            id="mail"
            className="email"
          />
          <div className="d-flex flex-column phone">
            <label htmlFor="phone">Teléfono<span className="required"></span>:</label>
            <input
              type="number"
              name="phone"
              id="subject"
              className="subject required"
              min={9}
              max={12}
              required
            />
          </div>
          <label htmlFor="message">Mensaje<span className="required"></span>:</label>
          <textarea name="message" className="message required" id="message" required />
          <div className="clear"></div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              {t("servi.formsend")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
