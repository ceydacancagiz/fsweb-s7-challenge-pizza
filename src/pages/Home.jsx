import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle,
    Col,
    Container,
    Row,
  } from "reactstrap";
  import MenuCard from "../components/MenuCard";
  import { useState } from "react";
  import { Link } from "react-router-dom/cjs/react-router-dom.min";
  import Footer from "../components/Footer";
  import MenuButtons from "../components/MenuButtons";
  
  export default function Home() {
    const [category, setCategory] = useState("pizza");
    const handleCategory = (category) => {
      setCategory(category);
    };
  
    const homeBanner = {
      height: "40rem",
      display: "flex",
      justifyContent: "center",
      backgroundImage: `url("./assets/mile1-assets/home-banner.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      textAlign: "center",
    };
  
    return (
      <Container className="home-container" fluid>
        <Row className="g-0" style={homeBanner}>
          <img
            className="home-logo"
            src="./assets/mile1-assets/logo.svg"
            style={{ marginTop: "2.5rem" }}
          />
          <Row style={{ height: "70%" }}>
            <Col className="home-header-section">
              <h4 className="h4-home-1">fırsatı kaçırma</h4>
              <h2 className="h2-home">
                KOD ACIKTIRIR
                <br />
                PIZZA, DOYURUR
              </h2>
              <Link to="/order">
                <button className="button-banner">ACIKTIM</button>
              </Link>
            </Col>
          </Row>
        </Row>
        <Row className="icon-section g-0 mx-auto">
          <Col>
            <img className="home-icons" src="./assets/mile2-aseets/icons/1.svg" />
            <span className="icon-text">YENİ! Kore</span>
          </Col>
          <Col>
            <img className="home-icons" src="./assets/mile2-aseets/icons/2.svg" />
            <span className="icon-text">Pizza</span>
          </Col>
          <Col>
            <img className="home-icons" src="./assets/mile2-aseets/icons/3.svg" />
            <span className="icon-text">Burger</span>
          </Col>
          <Col>
            <img className="home-icons" src="./assets/mile2-aseets/icons/4.svg" />
            <span className="icon-text">Kızartmalar</span>
          </Col>
          <Col>
            <img className="home-icons" src="./assets/mile2-aseets/icons/5.svg" />
            <span className="icon-text">Fast Food</span>
          </Col>
          <Col>
            <img className="home-icons" src="./assets/mile2-aseets/icons/6.svg" />
            <span className="icon-text">Gazlı İçecek</span>
          </Col>
        </Row>
        <Row className="main-section g-0">
          <Container style={{ width: "110rem" }}>
            <Row className="campaign-section">
              <Col>
                <Card inverse style={{ display: "flex", position: "relative" }}>
                  <CardImg
                    alt="Card image cap"
                    src="./assets/mile2-aseets/cta/kart-1.png"
                    style={{
                      height: "25rem",
                    }}
                    width="100%"
                  />
                  <CardImgOverlay
                    className="campaign-card"
                    style={{ width: "53%", position: "absolute" }}
                  >
                    <CardTitle
                      tag="h1"
                      style={{ fontFamily: "Quattrocento", fontWeight: "bold" }}
                    >
                      Özel Lezzettus
                    </CardTitle>
                    <CardText>Position:Absolute Acı Burger</CardText>
                    <Link to="/order">
                      <button className="button-campaign">SİPARİŞ VER</button>
                    </Link>
                  </CardImgOverlay>
                </Card>
              </Col>
              <Col>
                <Row className="g-0">
                  <Card inverse>
                    <CardImg
                      alt="Card image cap"
                      src="./assets/mile2-aseets/cta/kart-2.png"
                      style={{
                        height: "12.5rem",
                      }}
                      width="100%"
                    />
                    <CardImgOverlay
                      className="campaign-card"
                      style={{ width: "50%", position: "absolute" }}
                    >
                      <CardTitle tag="h3">Hackathlon Burger Menü</CardTitle>
                      <Link to="/order">
                        <button className="button-campaign">SİPARİŞ VER</button>
                      </Link>
                    </CardImgOverlay>
                  </Card>
                </Row>
                <Row className="g-0">
                  <Card inverse>
                    <CardImg
                      alt="Card image cap"
                      src="./assets/mile2-aseets/cta/kart-3.png"
                      style={{
                        height: "12.5rem",
                      }}
                      width="100%"
                    />
                    <CardImgOverlay
                      className="campaign-card"
                      style={{ width: "50%", position: "absolute" }}
                    >
                      <CardTitle tag="h3" style={{ color: "black" }}>
                        <span style={{ color: "#ce2829" }}>Çoooook</span> hızlı
                        npm gibi kurye
                      </CardTitle>
                      <Link to="/order">
                        <button className="button-campaign">SİPARİŞ VER</button>
                      </Link>
                    </CardImgOverlay>
                  </Card>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "5rem" }}>
              <h4 className="h4-home-2" style={{ color: "#CE2829" }}>
                en çok paketlenen menüler
              </h4>
              <h3 className="h3-home">Acıktıran Kodlara Doyuran Lezzetler</h3>
            </Row>
            <MenuButtons handleCategory={handleCategory} />
            <Row className="menu-cards g-0">
              <MenuCard category={category} />
            </Row>
          </Container>
        </Row>
        <Footer />
      </Container>
    );
  }
  