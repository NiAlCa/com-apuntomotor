import { footerData} from '../../data/footerData.mock';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const horario = footerData.find((item) => item.title === 'HORARIO') || {
    title: '',
    text: '',
    titleEn: '',
    textEn:'',
  };
  const direccion = footerData.find((item) => item.title === 'DONDE ESTAMOS') || {
    title: '',
    text: '',
    titleEn:'',
    textEn:'',
  };
  const contacto =
    footerData.find((item) => item.title === 'CONTACTO CON NOSOTROS') || {
      title: '',
      text: '',
      telefono: '',
      movil: '',
      titleEn: '',
      textEn:'',
      telefonoEn:'',
      movilEn:'',
    };
  const taller =
    footerData.find((item) => item.title === 'TALLER MECANICO CHIVA') || {
      title: '',
      title2: '',
      title3: '',
      title4: '',
      title5: '',
      titleEn: '',
      title2En: '',
      title3En: '',
      title4En: '',
      title5En:'',
    };

    return (
      <footer className="bg-secondary text-primary py-3">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h5>{t(i18n.language === 'en' ? horario.titleEn : horario.title)}</h5>
              <p className="text-white">{t(i18n.language === 'en' ? horario.textEn : horario.text)}</p>
              <h5>{t(i18n.language === 'en' ? direccion.titleEn : direccion.title)}</h5>
              <p className="text-white">{t(i18n.language === 'en' ? direccion.textEn : direccion.text)}</p>
            </div>
            <div className="col-md">
              <h5>{t(i18n.language === 'en' ? contacto.titleEn : contacto.title)}</h5>
              {contacto.text && <p className="text-white">{t(i18n.language === 'en' ? contacto.textEn : contacto.text)}</p>}
              {contacto.telefono && (
                <p className="text-white">{t(i18n.language === 'en' ? contacto.telefonoEn : contacto.telefono)}</p>
              )}
              {contacto.movil && (
                <p className="text-white">{t(i18n.language === 'en' ? contacto.movilEn : contacto.movil)}</p>
              )}
            </div>
            <div className="col-md">
  
              <h5 className="text-white">{t(i18n.language === 'en' ? taller.titleEn : taller.title)}</h5>
  
              <h5 className="text-white">{t(i18n.language === 'en' ? taller.title2En : taller.title2)}</h5>
              <h5 className="text-white">{t(i18n.language === 'en' ? taller.title3En : taller.title3)}</h5>
              <h5 className="text-white">{t(i18n.language === 'en' ? taller.title4En : taller.title4)}</h5>
              <h5 className="text-white">{t(i18n.language === 'en' ? taller.title5En : taller.title5)}</h5>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;