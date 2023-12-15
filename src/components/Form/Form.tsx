import './Form.scss';

export const Form = () => {
  return (
    <div className="col-md-8 templatemo_contactform">
      <div className="templatemo_contacttitle">
        <h2>FORMULARIO DE CONTACTO</h2>
      </div>
      <form action="enviar.php" method="post">
        <input
          type="text"
          name="name"
          id="name"
          className="name"
          placeholder="NOMBRE"
        />
        <input
          type="text"
          name="mail"
          id="mail"
          className="email"
          placeholder="CORREO"
        />
        <input
          type="text"
          name="phone"
          id="subject"
          className="subject"
          placeholder="TELÉFONO"
        />
        <textarea
          name="message"
          className="message"
          placeholder="MENSAJE ... "
          id="message"
        />
        <div className="clear"></div>
        <div className="col-md-8">
          <button type="submit" className="btn btn-primary">
            ENVIAR{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
