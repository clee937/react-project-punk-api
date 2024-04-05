import "./BeerCard.scss";

type BeerCardProps = {
  imageUrl: string;
  name: string;
  abv: number;
  firstBrewed: string;
  acidity: string | number;
};

const BeerCard = ({
  imageUrl,
  name,
  abv,
  firstBrewed,
  acidity,
}: BeerCardProps) => {
  return (
    <div className="beer-card" data-testid="beer-card">
      <div className="beer-card__image-container">
        <img className="beer-card__image" src={imageUrl} alt={name} />
      </div>
      <h2 className="beer-card__name">{name}</h2>
      <div className="beer-card__info-container">
        <p className="beer-card__info">
          <i className="fa-solid fa-vial"></i>
          <span className="beer-card__info--bold">&nbsp;ABV:</span> {abv}
        </p>
        <p className="beer-card__info">
          <i className="fa-solid fa-flask"></i>
          <span className="beer-card__info--bold">&nbsp;&nbsp;pH:</span>{" "}
          {acidity}
        </p>
        <p className="beer-card__info">
          <i className="fa-solid fa-certificate fa-solid fa-certificate"></i>
          <span className="beer-card__info--bold">
            &nbsp;First brewed:
          </span>{" "}
          {firstBrewed}
        </p>
      </div>
    </div>
  );
};

export default BeerCard;
