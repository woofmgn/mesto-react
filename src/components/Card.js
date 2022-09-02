import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  const userSettings = useContext(CurrentUserContext);
  const isOwn = card.owner._id === userSettings._id;
  // console.log(card.owner._id);
  // console.log(userSet._id);

  const cardDeleteButtonClassName = `element__trash-button ${
    isOwn ? "element__trash-button_active" : ""
  }`;

  const isLiked = card.likes.some((i) => i._id === userSettings._id);

  const cardLikeButtonClassName = `element__like-button ${
    isOwn && isLiked ? "element__like-button_active" : ""
  }`;

  return (
    <li className="element__item">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button className={cardDeleteButtonClassName} type="button"></button>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
