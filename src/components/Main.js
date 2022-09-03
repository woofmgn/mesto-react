import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";

import Card from "./Card";
import Loader from "./Loader";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  };

  const handleCardDelete = (card) => {
    console.log(card.owner);
    // const isOwner = card.owner.some((i) => i._id === currentUser._id);
    const isOwner = card.owner._id === currentUser._id;

    api.delCard(card._id, isOwner).then((delCard) => {
      setCards((state) =>
        state.filter((c) => (c._id === card._id ? delCard : c))
      );
    });
  };

  const dataPreload = () => {
    setLoading(true);

    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
        console.log(cards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setLoading(false));
  };

  // иппользован вместо useEffect, чтобы избежать дергания верстки при перезагрузке страницы
  useEffect(() => {
    dataPreload();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-button" onClick={onEditAvatar}>
              <img
                className="profile__image"
                src={currentUser.avatar}
                alt="Фото профиля"
              />
            </div>
            <div className="profile__info">
              <div className="profile__user">
                <h1 className="profile__title">{currentUser.name}</h1>
                <button
                  className="profile__edit-button"
                  type="button"
                  onClick={onEditProfile}
                ></button>
              </div>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button
              className="profile__add-button"
              type="button"
              onClick={onAddPlace}
            ></button>
          </section>
          <section className="elements">
            <ul className="element">
              {cards.map((card) => {
                return (
                  <Card
                    card={card}
                    key={card._id}
                    onCardClick={onCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                  />
                );
              })}
            </ul>
          </section>
        </main>
      )}
    </>
  );
}

export default Main;
