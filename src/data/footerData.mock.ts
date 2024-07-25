export type FooterDataItem = {
    title: string;
    text: string;
    telefono?: string;
    movil?: string;
    title2?: string;
    title3?: string;
    title4?: string;
    title5?: string;
    titleEn?: string;
    textEn?: string;
    telefonoEn?: string;
    movilEn?: string;
    title2En?: string;
    title3En?: string;
    title4En?: string;
    title5En?: string;
  };
  
  export type FooterData = FooterDataItem[];
  
  export const footerData: FooterData = [
    {
      title: 'HORARIO',
      text: 'Horarios de Atención: 09:00h. a 14:00h. y 16:00h. a 19:30h.',
      telefono: 'Teléfono: +34 963 013 809',
      titleEn: 'SCHEDULE',
      textEn: 'Opening hours: 09:00 AM to 02:00 PM and 04:00 PM to 07:30 PM.',
    },
    {
      title: 'DONDE ESTAMOS',
      text: 'C/ SAN JUAN BAUTISTA, 46370, CHIVA.',
      titleEn: 'WHERE WE ARE',
      textEn: 'C/ SAN JUAN BAUTISTA, 46370, CHIVA.',
    },
    {
      title: 'CONTACTO CON NOSOTROS',
      text: 'Mail: APUNTOMOTOR@OUTLOOK.ES',
      telefono: 'Teléfono: +34 963 013 809',
      movil: 'Móvil: +34 660 328 329',
      titleEn:'CONTACT US',
      textEn: 'Mail: APUNTOMOTOR@OUTLOOK.ES',
      telefonoEn: 'Phone: +34 963 013 809',
      movilEn: 'Mobile: +34 660 328 329',
    },
    {
      text: 'Mail: APUNTOMOTOR@OUTLOOK.ES',
      title: 'TALLER MECANICO CHIVA',
      title2: 'TALLER DE COCHES CHIVA',
      title3: 'TALLER CHIVA',
      title4: 'AUTOSERVICIO CHIVA',
      title5: 'TALLER AUTOMOTRIZ CHIVA',
      titleEn: 'CHIVA MECHANICAL WORKSHOP',
      title2En: 'CAR WORKSHOP CHIVA',
      title3En: 'WORKSHOP CHIVA',
      title4En: 'SELF-SERVICE CHIVA',
      title5En: 'AUTOMOTIVE WORKSHOP CHIVA',
    },
  ];
  