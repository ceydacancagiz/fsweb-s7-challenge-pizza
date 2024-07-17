import { Card, CardBody, CardText, CardTitle } from "reactstrap";
export default function MenuCard(props) {
  const { category } = props;
  const menuItems = [
    {
      category: "pizza",
      src: "./assets/mile2-aseets/pictures/food-1.png",
      title: "Terminal Pizza",
      rating: "4.9",
      order: "(200)",
      price: "60₺",
    },
    {
      category: "pizza",
      src: "./assets/mile2-aseets/pictures/food-2.png",
      title: "Position Absolute Acı Pizza",
      rating: "4.9",
      order: "(928)",
      price: "85₺",
    },
    {
      category: "burger",
      src: "./assets/mile2-aseets/pictures/food-3.png",
      title: "useEffect Tavuklu Burger",
      rating: "4.9",
      order: "(462)",
      price: "75₺",
    },
  ];
  return (
    <>
      {menuItems
        .filter((menuItem) => menuItem.category === category)
        .map((menuItem, index) => (
          <Card key={index} style={{ width: "18rem", margin: "10px" }}>
            <img alt={menuItem.title} src={menuItem.src} />
            <CardBody>
              <CardTitle tag="h5">{menuItem.title}</CardTitle>
              <CardText
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{ color: "#5F5F5F", fontWeight: "500" }}>
                  {menuItem.rating}
                </span>
                <span style={{ color: "#5F5F5F", fontWeight: "500" }}>
                  {menuItem.order}
                </span>
                <span style={{ fontWeight: "700" }}>{menuItem.price}</span>
              </CardText>
            </CardBody>
          </Card>
        ))}
    </>
  );
}