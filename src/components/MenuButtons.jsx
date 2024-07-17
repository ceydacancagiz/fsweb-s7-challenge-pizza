import { Row } from "reactstrap";

export default function MenuButtons(props) {
  const { handleCategory } = props;
  return (
    <Row className="menu-button-section g-0 my-4">
      <button className="menu-buttons" onClick={() => handleCategory("kore")}>
        <img src="./assets/mile2-aseets/icons/1.svg" />
        <span className="icon-text">YENİ! Kore</span>
      </button>
      <button className="menu-buttons" onClick={() => handleCategory("pizza")}>
        <img className="home-icons" src="./assets/mile2-aseets/icons/2.svg" />
        <span className="icon-text">Pizza</span>
      </button>
      <button className="menu-buttons" onClick={() => handleCategory("burger")}>
        <img className="home-icons" src="./assets/mile2-aseets/icons/3.svg" />
        <span className="icon-text">Burger</span>
      </button>
      <button
        className="menu-buttons"
        onClick={() => handleCategory("kızartma")}
      >
        <img className="home-icons" src="./assets/mile2-aseets/icons/4.svg" />
        <span className="icon-text">Kızartmalar</span>
      </button>
      <button
        className="menu-buttons"
        onClick={() => handleCategory("fastfood")}
      >
        <img className="home-icons" src="./assets/mile2-aseets/icons/5.svg" />
        <span className="icon-text">Fast Food</span>
      </button>
      <button className="menu-buttons" onClick={() => handleCategory("icecek")}>
        <img className="home-icons" src="./assets/mile2-aseets/icons/6.svg" />
        <span className="icon-text">Gazlı İçecek</span>
      </button>
    </Row>
  );
}