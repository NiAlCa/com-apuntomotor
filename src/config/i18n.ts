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
      servicesData: {
        'PRE ITV': {
          title: 'PRE ITV',
          txt: 'Do you have an appointment with the ITV or is it about to expire? At A Punto Motor, we ensure that your car passes the vehicle technical inspection without any problems. With our PRE-ITV service, we thoroughly inspect your vehicle to avoid any setbacks.',
        },
        'ELECTRICIDAD DEL AUTOMOVIL': {
          title: 'ELECTRIC VEHICLE SERVICE',
          txt: 'In our Chiva workshop, we are professionals in the repair and testing of alternators, charging systems, starter motors, and electric batteries. We also carry out installations of radio, Bluetooth, roof racks, trailers, and more.',
        },
        'DIANOSTICO MULTIMARCA': {
          title: 'MULTIBRAND DIAGNOSTICS',
          txt: 'We have a multi-brand diagnostic terminal. Our self-diagnosis equipment allows us to perform repairs related to engine injection, diesel injection, airbags, ABS, resets, air conditioning, and more.',
        },
        'CAMBIO DE NEUMATICOS': {
          title: 'TIRE REPLACEMENT',
          txt: 'We offer solutions for all problems with tires for cars and commercial vehicles, including tire changes, shock absorbers, punctures, steering, alignments, pads and discs, brake pumps, shoes and cylinders, and fluid replacement.',
        },
        'CARGA DE AIRE ACONDICIONADO': {
          title: 'AIR CONDITIONING REFILL',
          txt: 'We are specialists in the repair, maintenance, and charging of air conditioning. Achieve greater comfort and safety in your vehicle by eliminating mist on the windshield and achieving optimal temperature in the vehicle.',
        },
      },
      carrusell: { title: 'INSURANCES WE WORK WITH' },
      servi: {
        top: 'OUR SERVICES',
        bottom: 'DISCOVER ALL OUR SERVICES'
      },
      main: {
        title: 'MECHANICAL WORKSHOP CHIVA',
        button1: 'CONTACT US',
        button2: 'SERVICES',
      },
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
      carrusell: { title: 'SEGUROS CON LOS QUE TRABAJAMOS' },
      servicesData: {
        'PRE ITV': {
          title: 'PRE MOV',
          txt: '¿Tiene cita con la ITV o está a punto de caducar? En A Punto Motor nos encargamos de que su coche pase sin problemas la inspección técnica de vehículos, con nuestro servicio de PRE-ITV inspeccionamos a fondo su vehículo para evitar los contratiempos.',
        },
        'ELECTRICIDAD DEL AUTOMOVIL': {
          title: 'SERVICIOS ELÉCTRICOS',
          txt: 'En nuestro taller de Chiva somos profesionales en la reparación y comprobación de alternadores, sistemas de carga, motores de arranque y baterías eléctricas. También realizamos instalaciones de radio, Bluetooth, bacas, remolques y más.',
        },
        'DIANOSTICO MULTIMARCA': {
          title: 'DIAGNÓSTICO MULTIMARCAS',
          txt: 'Contamos con terminal de diagnosis multimarca. Nuestros equipos de autodiagnosis nos permiten realizar reparaciones relacionadas con la inyección del motor, inyección diésel, airbag, abs, reset, climatizador...',
        },
        'CAMBIO DE NEUMATICOS': {
          title: 'CAMBIO DE NEUMÁTICOS',
          txt: 'Ofrecemos solución para todos los problemas en neumáticos de turismos y vehículos comerciales como; cambio de ruedas, amortiguadores, pinchazos, direcciones, alineaciones, pastillas y discos, bombas de freno, zapatas y bombines, sustitución de líquidos...',
        },
        'CARGA DE AIRE ACONDICIONADO': {
          title: 'CARGA DE AIRE ACONDICIONADO',
          txt: 'Somos especialistas en reparación, mantenimiento y carga de aire acondicionado. Consigue un mayor confort y seguridad en tu vehículo permitiendo la eliminación de vaho en el parabrisas y consiguiendo la temperatura óptima en el vehículo.',
        },
      },
      servi: {
        top: 'NUESTROS SERVICIOS',
        bottom: 'DESCUBRE TODOS NUESTROS SERVICIOS'
      },
      main: {
        title: 'TALLER MECÁNICO CHIVA',
        button1: 'CONTACTO',
        button2: 'SERVICIOS',
      },
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
