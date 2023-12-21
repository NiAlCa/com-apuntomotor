export type ServicesDataItem = {
    img: string;
    title: string;
    txt: string;
    position: 'izq' | 'der';
};

export type ServicesData = ServicesDataItem[];

export const servicesData: ServicesData = [
    {
        img: "/src/assets/services/coche-150x150.webp",
        title: "PRE ITV",
        txt:"¿Tiene cita con la ITV o esta a punto de caducar? En A Punto Motor nos encargamos de que su coche pase sin problemas la inspección técnica de vehículos, con nuestro servicio de PRE-ITV inspeccionamos a fondo su vehiculo para evitar los contratiempos ",
        position: "der"
    },
    {
        img: "/src/assets/services/bateria-150x150.webp",
        title: "ELECTRICIDAD DEL AUTOMOVIL",
        txt:"En nuestro taller de Chiva somos profesionales en reparación y comprobación de alternadores, sistemas de carga, motores de arranque y baterias eléctricas. También realizamos instalaciones de radio, bluetooth, bacas, remolque...",
        position:"izq",
    },
    {
        img: "/src/assets/services/instrumentos-150x150.webp",
        title: "DIANOSTICO MULTIMARCA",
        txt:"Contamos con terminal de diagnosis multimarca. Nuestros equipos de autodiagnosis nos permiten realizar reparaciones relacionadas con la inyección del motor, inyección diésel, airbag, abs, reset, climatizador...",
        position:"der"
    },
    {
        img: "/src/assets/services/rueda-150x150.webp",
        title: "CAMBIO DE NEUMATICOS",
        txt:"Ofrecemos solución para todos los problemas en neumáticos de turismos y vehículos comerciales como; cambio de ruedas, amortiguadores, pinchazos, direcciones, alineaciones, pastillas y discos, bombas de freno, zapatas y bombines, sustitución de liquidos... ",
        position: "izq"
    },
    {
        img: "/src/assets/services/aire-acondicionado-150x150.webp",
        title: "CARGA DE AIRE ACONDICIONADO",
        txt:"Somos especialistas en reparación, mantenimiento y carga de aire acondicionado. Consigue un mayor confort y seguridad en tu vehículo permitiendo la eliminación de vaho en el parabrisas y consiguiendo la temperatura optima en el vehiculo. ",
        position:"der"
    },
]