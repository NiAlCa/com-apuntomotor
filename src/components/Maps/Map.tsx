import home from '../../assets/contacto/home.svg';
import mail from '../../assets/contacto/mail.svg';
import phone from '../../assets/contacto/phone.svg'
import './Map.scss'
import { useTranslation } from 'react-i18next';


const Map = () => {
  const { t } = useTranslation();
  return (
    <div className='container-contacto animate__animated animate__jackInTheBox '>
      <div>
        <h1 className='text-secondary text-center'>{t('servi.visit')}</h1>
        <div className='contacto'>
            <img src={home} alt="home" />
            <p>C/ SAN JUAN BAUTISTA, 46170, CHIVA</p>
        </div>
        <div className='contacto'>
            <img src={mail} alt="mail" />
            <p>apuntomotor@outlook.es </p>
        </div>
        <div className='contacto'>
            <img src={phone} alt="phone" />
            <p>+34 963-013-809</p>
        </div>
      </div>

      <iframe
        className='mapa '
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12319.564088055995!2d-0.7142727!3d39.4717906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60fa62928af131%3A0xe25cdfcf6de0ec37!2sAPUNTOMOTOR!5e0!3m2!1ses!2ses!4v1702545255360!5m2!1ses!2ses"
        width="600"
        height="450"
        style={{ border: "0" }}
        //   allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
