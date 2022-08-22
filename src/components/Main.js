import Loader from './Loader';
import api from '../utils/api';
import {useEffect, useState} from 'react';
import Card from './Card';


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataPreload = () => {
    setLoading(true);

    Promise.all([api.getInitialCards(), api.getUserProfile()])
    .then(([cards, userProfile]) => {
        setUserName(userProfile.name);
        setUserDescription(userProfile.about);
        setUserAvatar(userProfile.avatar);
        setCards(cards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    dataPreload();
  }, [])

  return (
    <>
      {
        loading ? 
          <Loader />
          :
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
                    <Card 
                      card={card} 
                      key={card._id} 
                      onCardClick={onCardClick}
                    />
                  )
                })}
                </ul>
            </section>
          </main>
      }
    </>
  )
}

export default Main;