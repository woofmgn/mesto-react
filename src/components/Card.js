

function Card({card, onCardClick}) {
  const handleClick = () => {
    onCardClick(card);
  }

  return(
    <li className="element__item">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <button className="element__trash-button" type="button"></button>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
          <div className="element__like-container">
            <button className="element__like-button" type="button"></button>
            <p className="element__like-counter">{card.likes.length}</p>
          </div>
      </div>
    </li>
  )
}

export default Card;