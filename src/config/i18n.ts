import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';



const resources: Resource = {
  en: {
    translation: {
      services: 'SERVICES',
      tires: 'Tires and Braking System',
      airConditioning: 'Air Conditioning',
      mechanics: 'General Mechanics',
      lightsAnalysis: 'Lights Analysis',
      keyDuplication: 'Key Duplication',
      plates: 'Plates',
      electronics: 'Electronics',
      preITV: 'Pre-ITV',
      contactUs: 'Contact Us',
      serviceNotFound: 'Service not found',
      inicio: 'Home',
      contacto: 'Contact',
      horario: {
        title: 'OPENING HOURS',
        text: 'Opening hours: 09:00 AM to 02:00 PM and 04:00 PM to 07:30 PM.',
      },
      footer: {
        horario: {
          title: 'HORARIO',
          text: 'Horarios de Atención: 09:00h. a 14:00h. y 16:00h. a 19:30h.',
        },
        dondeEstamos: {
          title: 'WHERE WE ARE',
          text: 'C/ SAN JUAN BAUTISTA, 46370, CHIVA.',
        },
        contacto: {
          title: 'CONTACT US',
          text: 'Mail: APUNTOCOMOTORZ@OUTLOOK.ES',
          telefono: ' Teléfono: +34 963 013 809 ',
          movil: 'Móvil: +34 660 328 329',
        },
        taller: {
          title: 'MECHANICAL WORKSHOP CHIVA',
          title2: 'CAR WORKSHOP CHIVA',
          title3: 'WORKSHOP CHIVA',
          title4: 'SELF-SERVICE CHIVA',
          title5: 'AUTOMOTIVE WORKSHOP CHIVA',
        },
      },
    },
  },
  es: {
    translation: {
      services: 'SERVICIOS',
      tires: 'Neumáticos y Sistema de Frenado',
      airConditioning: 'Aire Acondicionado',
      mechanics: 'Mecánica General',
      lightsAnalysis: 'Análisis de Luces',
      keyDuplication: 'Haz Copia de Tu Llave de Coche',
      plates: 'Matrículas',
      electronics: 'Electrónica',
      preITV: 'Pre-ITV',
      contactUs: 'Contáctanos',
      serviceNotFound: 'Servicio no encontrado',
      inicio: 'Inicio',
      contacto: 'Contacto',
      horario: {
        title: 'HORARIO',
        text: 'Horarios de Atención: 09:00h. a 14:00h. y 16:00h. a 19:30h.',
      },
      footer: {
        horario: {
          title: 'HORARIO',
          text: 'Horarios de Atención: 09:00h. a 14:00h. y 16:00h. a 19:30h.',
        },
        dondeEstamos: {
          title: 'DÓNDE ESTAMOS',
          text: 'C/ SAN JUAN BAUTISTA, 46370, CHIVA.',
        },
        contacto: {
          title: 'CONTACTO CON NOSOTROS',
          text: 'Mail: APUNTOCOMOTORZ@OUTLOOK.ES',
          telefono: ' Teléfono: +34 963 013 809 ',
          movil: 'Móvil: +34 660 328 329',
        },
        taller: {
          title: 'TALLER MECÁNICO CHIVA',
          title2: 'TALLER DE COCHES CHIVA',
          title3: 'TALLER CHIVA',
          title4: 'AUTOSERVICIO CHIVA',
          title5: 'TALLER AUTOMOTRIZ CHIVA',
        },
      },
    },
  },
};


i18n.use(initReactI18next).init({
  resources,
  lng: 'es', 
  fallbackLng: 'es', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
