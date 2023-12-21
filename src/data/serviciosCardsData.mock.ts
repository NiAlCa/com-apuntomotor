
export type ServiciosCardsDataItem = {
    title: string;
    img: string;
    txt: string;
};

export type ServiciosCardsData = ServiciosCardsDataItem[];

export const serviciosCardsData: ServiciosCardsData = [
    {
        title: "Alarga la vida del motor",
        img: "/src/assets/serviciosCard/AVM.webp",
        txt:"En taller mecánico Chiva, nos dedicamos a prolongar la vida de tu motor. Ofrecemos servicios desde cambios de aceite hasta revisiones exhaustivas, todo para asegurar el rendimiento óptimo y la durabilidad de tu motor. ¡Elige la experiencia y el cuidado experto para tu vehículo!",
    },
    {
        title: "Paga en 6 meses sin intereses",
        img: "/src/assets/serviciosCard/Paga.webp",
        txt:"En taller Chiva, entendemos la importancia de la economía en el mantenimiento de tu vehículo. Por eso, te ofrecemos la opción de pagar nuestros servicios en 6 meses sin intereses. Cuida tu coche sin preocuparte por el impacto inmediato en tu bolsillo.",
    },
    {
        title: "Amortiguadores 4x3",
        img: "/src/assets/serviciosCard/Amortiguadores.webp",
        txt:"Aprovecha nuestra promoción en taller mecánico Chiva: compra cuatro amortiguadores y paga solo tres. Mejora significativamente la suspensión de tu vehículo con productos de la mejor calidad, asegurando un viaje confortable y seguro. ¡No te pierdas esta oferta exclusiva!",
    },
    {
        title: "Asesoramiento gratuito",
        img: "/src/assets/serviciosCard/Asesoramiento.webp",
        txt:"¿Dudas sobre el cuidado de tu coche? En taller Chiva, te ofrecemos asesoramiento gratuito por parte de nuestros expertos. Recibe recomendaciones personalizadas y soluciones prácticas para mantener tu vehículo en condiciones óptimas. Ven y descubre cómo podemos ser de ayuda para ti y tu coche.",
    },
]