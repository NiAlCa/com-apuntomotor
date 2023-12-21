import { Navbar } from "../../components/Navbar/Navbar";
import { ContenedorPage } from "../../components/Contenedor/Contenedor";
import { servicesData } from "../../data/servicesData.mock";
import "./servicios.scss"

export const Servicios = () => {

    return (
        <>
            <Navbar />
            <div className="page  align-items-center flex-column d-flex justify-content-center">
                <ContenedorPage bg="bg-white">
                    <div className="col align-items-center flex-column d-flex justify-content-center">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                            {service.position === 'izq' && (
                                <>
                                    <img src={service.img} alt={service.title} />
                                    <div>
                                        <h2>{service.title}</h2>
                                        <p>{service.txt}</p>
                                    </div>
                                </>
                            )}
                            {service.position === 'der' && (
                                <>
                                    <div>
                                        <h2>{service.title}</h2>
                                        <p>{service.txt}</p>
                                    </div>
                                    <img src={service.img} alt={service.title} />
                                </>
                            )}
                        </div>
                    ))}
                    </div>
                </ContenedorPage>


            </div>
        </>
    );
};
