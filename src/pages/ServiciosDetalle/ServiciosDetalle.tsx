
import { useParams } from 'react-router-dom';
import { serviciosPageData, serviciosPageDataItem} from "../../data/serviciosPageData.mock"
import Modelo3d from '../../components/ServiciosDescription/Modelo3d';


export const ServiciosDetalle = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const serviceData: serviciosPageDataItem | undefined = serviciosPageData.find(service => service.slash === serviceSlug);

  if (!serviceData) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <div className='row justify-content-center '>
      <div className='col-8'>
      <Modelo3d 
      icono ={`${serviceData.icono}`}/>
      <h1 className='text-center text-color-primary text-secondary'>{serviceData.title}</h1>
      <div> {serviceData.text}</div>
      <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary animate__animated animate__fadeInLeft w-50 mb-2"
          >
            Contacta con nostros
          </button>
        </div>
      </div>

      <div className='col-4 bg-primary '>
      <p>Menu</p>

      </div>
    </div>
  );
}
