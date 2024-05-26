import { Beer } from "../../types/types";
import "./BeerInfo.scss";
import blackCross from "../../assets/images/black-cross.png";
import placeholderBeer from "../../assets/images/placeholder.png";
import { useParams, useNavigate } from "react-router-dom";

type BeerInfoProps = {
  beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
  const { beerId } = useParams();
  const navigate = useNavigate();

  const beer = beers.find((beer) => beer.id.toString() === beerId);

  if (beer === undefined || beerId === undefined)
    return <p>Couldn't find a beer with that id</p>;

  return (
    <div className="beer-info" key={beer.id} data-testid="beer-info">
      <div className="beer-info__container">
        <div className="beer-info__image-container">
          <img
            src={blackCross}
            className="beer-info__cross"
            onClick={() => navigate(-1)}
            alt="Close text"
          />

          <img
            className="beer-info__image"
            src={!beer.image_url || " " ? placeholderBeer : beer.image_url}
            alt={beer.name}
          />
        </div>

        <div className="beer-info__details-container">
          <h2 className="beer-info__name">{beer.name}</h2>
          <p className="beer-info__details">
            <i className="fa-solid fa-vial"></i>
            <span className="beer-info__sub-heading">&nbsp;ABV:</span>{" "}
            {beer.abv}
          </p>
          <p className="beer-info__details">
            <i className="fa-solid fa-flask"></i>
            <span className="beer-info__sub-heading">&nbsp;&nbsp;pH:</span>{" "}
            {beer.ph}
          </p>
          <p className="beer-info__details">
            <i className="fa-solid fa-certificate fa-solid fa-certificate"></i>
            <span className="beer-info__sub-heading">
              &nbsp;First brewed:
            </span>{" "}
            {beer.first_brewed}
          </p>
          <br />
          <h3 className="beer-info__details beer-info__additional beer-info__sub-heading">
            Description:
          </h3>
          <p className="beer-info__details">{beer.description}</p>
          <br />
          <h3 className="beer-info__details beer-info__additional beer-info__sub-heading">
            Food pairings:
          </h3>

          <ul className="beer-info__details beer-info__list">
            {beer.food_pairing.map((pairing, index) => (
              <li
                key={index}
                className="beer-info__details beer-info__list-item"
              >
                {pairing}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeerInfo;
