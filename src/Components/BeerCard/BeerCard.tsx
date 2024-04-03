import "./BeerCard.scss";

type BeerCardProps = {
  imageUrl: string;
  name: string;
  info: string;
  abv: number;
  firstBrewed: string;
  acidity: number;
};

const BeerCard = ({
  imageUrl,
  name,
  info,
  abv,
  firstBrewed,
  acidity,
}: BeerCardProps) => {
  return (
    <div className="beer-card">
      <div className="beer-card__image-container">
        <img className="beer-card__image" src={imageUrl} alt={name} />
      </div>
      <h2 className="beer-card__name">{name}</h2>
      <p className="beer-card__abv">ABV: {abv}</p>
      <p className="beer-card__acidity">pH: {acidity}</p>
      <p className="beer-card__first-brewed">FB: {firstBrewed}</p>
      <p className="beer-card__info">{info}</p>
    </div>
  );
};

export default BeerCard;
