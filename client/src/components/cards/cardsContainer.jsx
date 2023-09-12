import Card from "../card/card";
import "./cardsContainer.css";

const Cards = ({ countries }) => {
  return (
    <div className="Container">
      {countries.map((c) => (
        <Card
          name={c.name}
          image={c.flagImage}
          continent={c.continent}
          key={c.id}
          id={c.id}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
