import Carousel from "react-bootstrap/Carousel";
import { segurosData } from "../../data/segurosData.mock";

export const Carrusell = () => {
  const groupedData = [];
  for (let i = 0; i < segurosData.length; i += 3) {
    groupedData.push(segurosData.slice(i, i + 3));
  }

  return (
    <div className="container-fluid animate__animated animate__rotateInDownLeft">
  <div className="d-flex justify-content-around align-items-center mb-5">
      <div className="divider" />

      <h2 className="text-secondary text-center mx-3">
        SEGUROS CON LOS QUE TRABAJAMOS
      </h2>

      <div className="divider" />
    </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <Carousel
            indicators={true}
            nextIcon={
              <span aria-hidden="true" className="carousel-control-next-icon" />
            }
            prevIcon={
              <span aria-hidden="true" className="carousel-control-prev-icon" />
            }
            variant={"dark"}
          >
            {groupedData.map((group, idx) => (
              <Carousel.Item key={idx} className="text-center">
                <div className="row justify-content-center">
                  {group.map((seguro, index) => (
                    <div className="col-3 col-md-3 col-lg-3" key={index}>
                      <img
                        className="img-fluid p-1"
                        src={seguro.img}
                        alt={seguro.seguro}
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
