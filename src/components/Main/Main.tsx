import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import logo1 from '../../assets/logo1.png';
import './Main.scss'; // Asegúrese de que este archivo contenga sus estilos personalizados
import { Navbar } from "../Navbar/Navbar";

export const Main = () => {
  return (
    <>
    <Navbar/>
    <div className="main-container">
      <Container>
        <Row className="justify-content-center align-items-end logo-row">
          <Col md="auto"className="text-center">
            <Image src={logo1} className="w-50 center-block" />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-end text-row">
          <Col md="auto">
            <h1 className="text-style">TALLER MECÁNICO CHIVA</h1>
          </Col>
        </Row>
        <Row className="justify-content-around align-items-end button-row">
          <Col xs={12} sm={6} md={4} lg={3}>
            <Button variant="primary" className="w-100">CONTACTO</Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Button variant="primary" className="w-100">SERVICIOS</Button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};
