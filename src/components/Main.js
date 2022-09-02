import { useContext, useState } from "react";
import { CurrentCardsContext } from "../contexts/CurrentCardsContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import Card from "./Card";
import Loader from "./Loader";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  // const [userName, setUserName] = useState("");
  // const [userDescription, setUserDescription] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  // const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentUser = useContext(CurrentUserContext);
  // console.log(currentUser.name);

  const cardList = useContext(CurrentCardsContext);
  // console.log(cardList);

  // const dataPreload = () => {
  //   setLoading(true);

  //   api
  //     .getInitialCards()
  //     .then((cards) => {
  //       setCards(cards);
  //       console.log(cards);
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка: ${err}`);
  //     })
  //     .finally(() => setLoading(false));

  // Promise.all([api.getInitialCards(), api.getUserProfile()])
  //   .then(([cards, userProfile]) => {
  //     setUserName(userProfile.name);
  //     setUserDescription(userProfile.about);
  //     setUserAvatar(userProfile.avatar);
  //     setCards(cards);
  //   })
  //   .catch((err) => {
  //     console.log(`Ошибка: ${err}`);
  //   })
  //   .finally(() => setLoading(false));
  // };

  // иппользован вместо useEffect, чтобы избежать дергания верстки при перезагрузке страницы
  // useEffect(() => {
  //   dataPreload();
  // }, []);

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
              {cardList.map((card) => {
                return (
                  <Card card={card} key={card._id} onCardClick={onCardClick} />
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
