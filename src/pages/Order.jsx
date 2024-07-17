import { Container, Col, Row } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderForm from "../components/OrderForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Order() {
  const showToast = (message) => {
    toast.error(message);
  };
  return (
    <>
      <Header />
      <Row className="order-info-section g-0">
        <Container className="order-info" fluid>
          <img
            className="form-banner"
            src="./assets/mile2-aseets/pictures/form-banner.png"
          />
          <Row className="order-nav justify-content-center g-0">
            <Link to="/">Anasayfa</Link>
            <span className="mx-2">-</span>
            <Link to="#">Seçenekler</Link>
            <span className="mx-2">-</span>
            <Link to="/order" style={{ color: "#ce2829" }}>
              Sipariş Oluştur
            </Link>
          </Row>
          <Row className="order-title g-0" style={{ fontWeight: "600" }}>
            Position Absolute Acı Pizza
          </Row>
          <Row className=" g-0" style={{ margin: "2rem 0" }}>
            <Col style={{ fontSize: "1.5rem", fontWeight: "700" }}>85.50₺</Col>
            <Col className="gray-text" style={{ textAlign: "right" }}>
              4.9
            </Col>
            <Col className="gray-text" style={{ textAlign: "right" }}>
              (200)
            </Col>
          </Row>
          <Row className="gray-text g-0 my-3" style={{ lineHeight: "1.5rem" }}>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle,
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </Row>
        </Container>
      </Row>
      <Row className="form-section g-0">
        <Container className="order-form" fluid>
          <OrderForm onShowToast={showToast} />
        </Container>
      </Row>
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}