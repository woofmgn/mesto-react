import photoProfile from '../images/profile-image.png'
import api from '../utils/api';
import {useEffect, useState} from 'react';


function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  const dataPreload = () => {
    Promise.all([api.getInitialCards(), api.getUserProfile()])
    .then(([cards, userProfile]) => {
        setUserName(userProfile.name);
        setUserDescription(userProfile.about);
        setUserAvatar(userProfile.avatar);
        // const inverseArr = cards.reverse().map(card => {
        //   return card;
        // })
        cards.map(card => {
          return card;
        })
        setCards(cards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
  }

  useEffect(() => {
    dataPreload();
  })

  return (
    <>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-button" onClick={onEditAvatar}>
          <img className="profile__image" src={userAvatar} alt="Фото профиля" />
        </div>
        <div className="profile__info">
          <div className="profile__user">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="element">
          {cards.map(card => {
            return (
              <li className="element__item">
                <img className="element__image" src={card.link} alt="#"/>
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
          })}
         </ul>
      </section>
    </main>
    <template className="card-template">
      
    </template>
    </>
  )
}

export default Main;