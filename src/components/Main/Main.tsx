import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo1 from "../../assets/logo1.png";
import "./Main.scss";
import Map from "../Maps/Map";


export const Main = () => {
  return (
    <div className="main-container">
      <Container>
        <Row className="justify-content-center align-items-end logo-row mb-5">
          <Col md="auto" className="text-center">
            <Image
              src={logo1}
              className="w-50 center-block animate__animated animate__flip"
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-end logo-row mb-5">
          <Col md="auto" className="text-center">
            <h1 className="text-style text-primary font-weight-bold animate__animated animate__fadeInDown">
              TALLER MECÁNICO CHIVA
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-around align-items-end button-row">
          <Col xs={12} sm={6} md={4} lg={2} className="mb-5">
            <Button
              variant="primary"
              className="w-100 animate__animated animate__fadeInLeft"
            >
              CONTACTO
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="mb-5">
            <Button
              variant="primary"
              className="w-100 animate__animated animate__fadeInRight"
            >
              SERVICIOS
            </Button>
          </Col>
        </Row>
        <Col>
          <Map />
        </Col>
      </Container>
    </div>
  );
};
