import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';



const resources: Resource = {
  en: {
    translation: {
      services: 'Services',
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
    },
  },
  es: {
    translation: {
      services: 'Servicios',
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
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'es', // Idioma de respaldo
  interpolation: {
    escapeValue: false, // No es necesario escapar valores en React
  },
});

export default i18n;
