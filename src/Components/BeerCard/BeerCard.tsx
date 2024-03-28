import "./BeerCard.scss";

type BeerCardProps = {
  imageUrl: string;
  name: string;
  info: string;
};

const BeerCard = ({ imageUrl, name, info }: BeerCardProps) => {
  return (
    <div className="beer-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{info}</p>
    </div>
  );
};

export default BeerCard;
