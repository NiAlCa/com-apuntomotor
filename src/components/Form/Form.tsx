import './Form.scss';

export const Form = () => {
  return (
    <div className='d-flex justify-content-center mt-4'>
    <div className="col-md-6 templatemo_contactform  w-75 ">
    <div className="d-flex justify-content-around align-items-center mb-5">
        <div className="divider" />
        <h2 className="text-secondary text-center mx-3">
          FORMULARIO DE CONTACTO
        </h2>
        <div className="divider" />
      </div>
      <form action="enviar.php" method="post">
        <div className='div-inputs d-flex'>
        <input
          type="text"
          name="name"
          id="name"
          className="name"
          placeholder="NOMBRE"
        />
         <input
          type="text"
          name="apellido"
          id="apellido"
          className="apellido"
          placeholder="APELLIDO"
        />
        </div>
        <div className='div-inputs d-flex'>
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
        </div>
        <textarea
          name="message"
          className="message"
          placeholder="MENSAJE ... "
          id="message"
        />
        <div className="clear"></div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            ENVIAR{" "}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
