import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import Header from "../components/Header";

export default function Success() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <>
      <Header />
      <Container className="success-container" fluid>
        <Row className="success-banner g-0">
          <h4 className="h4-success">lezzetin yolda</h4>
          <h2 className="h2-success">SİPARİŞ ALINDI</h2>
        </Row>
        <hr
          style={{
            width: "50%",
            border: "1px solid white",
            opacity: "1",
            margin: "1rem auto",
          }}
        />
        <Row className="g-0">
          <Container
            className="success-detail"
            style={{ width: "20rem", color: "white" }}
          >
            <Col className="order-title my-4">Position Absolute Acı Pizza</Col>
            <Col className="my-2">
              <span>Boyut:</span>
              <span className="mx-2" style={{ fontWeight: "600" }}>
                {data.size}
              </span>
            </Col>
            <Col className="my-2">
              <span>Hamur:</span>
              <span className="mx-2" style={{ fontWeight: "600" }}>
                {data.thickness}
              </span>
            </Col>
            <Col className="my-2">
              <>
                <span>Ekstra Malzemeler:</span>
                {data.extras.map((item, index) => (
                  <span
                    key={index}
                    className="mx-2"
                    style={{ fontWeight: "600" }}
                  >
                    {item}
                  </span>
                ))}
              </>
            </Col>
          </Container>
        </Row>
        <Card
          className="mx-auto"
          style={{
            width: "18rem",
            backgroundColor: "#ce2829",
            border: "1px solid white",
            color: "white",
            marginTop: "2rem",
          }}
        >
          <CardBody style={{ padding: "2.5rem" }}>
            <CardTitle tag="h5" style={{ fontWeight: "500" }}>
              Sipariş Toplamı
            </CardTitle>
            <Row className="g-0">
              <Col>
                <CardText>Seçimler</CardText>
              </Col>
              <Col>
                <CardText style={{ textAlign: "right" }}>
                  {`25.00₺ x ${data.count}`}
                </CardText>
              </Col>
            </Row>
            <Row className="g-0">
              <Col>
                <CardText>Toplam</CardText>
              </Col>
              <Col>
                <CardText style={{ textAlign: "right" }}>{data.total}</CardText>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}