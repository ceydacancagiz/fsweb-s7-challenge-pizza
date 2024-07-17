import { Col, Label, Row } from "reactstrap";

export default function Footer() {
  const images = [
    "./assets/mile2-aseets/footer/insta/li-0.png",
    "./assets/mile2-aseets/footer/insta/li-1.png",
    "./assets/mile2-aseets/footer/insta/li-2.png",
    "./assets/mile2-aseets/footer/insta/li-3.png",
    "./assets/mile2-aseets/footer/insta/li-4.png",
    "./assets/mile2-aseets/footer/insta/li-5.png",
  ];
  return (
    <>
      <Row className="footer-section g-0">
        <Col className="footer-contact">
          <img className="footer-logo" src="./assets/mile1-assets/logo.svg" />
          <Col className="my-4">
            <img
              className="home-icons"
              src="./assets/mile2-aseets/footer/icons/icon-1.png"
            />
            <span>341 Londonerry Road, İstanbul Türkiye</span>
          </Col>
          <Col className="my-4">
            <img
              className="home-icons"
              src="./assets/mile2-aseets/footer/icons/icon-2.png"
            />
            <span>aciktim@teknolojikyemekler.com</span>
          </Col>
          <Col className="my-4">
            <img
              className="home-icons"
              src="./assets/mile2-aseets/footer/icons/icon-3.png"
            />
            <span>+90 216 123 45 67</span>
          </Col>
        </Col>
        <Col className="footer-menu">
          <span style={{ fontSize: "2rem" }}>Hot Menu</span>
          <Col className="my-2">
            <span>Terminal Pizza</span>
          </Col>
          <Col className="my-2">
            <span>5 Kişilik Hackathlon Pizza</span>
          </Col>
          <Col className="my-2">
            <span>useEffect Tavuklu Pizza</span>
          </Col>
          <Col className="my-2">
            <span>Beyaz Console Frosty</span>
          </Col>
          <Col className="my-2">
            <span>Testler Geçti Mutlu Burger</span>
          </Col>
          <Col className="my-2">
            <span>Position Absolute Acı Burger</span>
          </Col>
        </Col>
        <Col className="footer-instagram">
          <span style={{ margin: "2rem 0" }}>Instagram</span>
          <Row className="my-2">
            {images.map((image, index) => (
              <Col className="image-list m-1 mx-auto" key={index}>
                <img src={image} alt={`Instagram ${index}`} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}