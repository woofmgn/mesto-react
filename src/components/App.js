import { useEffect, useState } from "react";
import { cardList, CurrentCardsContext } from "../contexts/CurrentCardsContext";
import {
  CurrentUserContext,
  userSettings,
} from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(userSettings);
  const [currentCards, setCurrentCards] = useState(cardList);

  useEffect(() => {
    api.getUserProfile().then((userProfile) => setCurrentUser(userProfile));
    api.getInitialCards().then((cards) => setCurrentCards(cards));
  }, []);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImagePopupOpen(!isImagePopupOpen);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <CurrentCardsContext.Provider value={currentCards}>
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
            />
            <Footer />
            <PopupWithForm
              title={"Редактировать профиль"}
              name={"profile"}
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
            >
              <input
                className="popup__form-item popup__form-item_type_name"
                id="input-name"
                type="text"
                name="formName"
                placeholder="Имя"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="popup__input-error input-name-error"></span>
              <input
                className="popup__form-item  popup__form-item_type_job"
                id="input-job"
                type="text"
                name="formJob"
                placeholder="Сфера деятельности"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="popup__input-error input-job-error"></span>
            </PopupWithForm>
            <PopupWithForm
              title={"Новое место"}
              name={"cards"}
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
            >
              <input
                className="popup__form-item popup__form-item_type_place"
                id="input-place"
                type="text"
                name="name"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="popup__input-error input-place-error"></span>
              <input
                className="popup__form-item  popup__form-item_type_link"
                id="input-link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error input-link-error"></span>
            </PopupWithForm>
            <ImagePopup
              card={selectedCard}
              isOpen={isImagePopupOpen}
              onClose={closeAllPopups}
            />
            <PopupWithForm
              title={"Вы уверены?"}
              name={"delete"}
              onClose={closeAllPopups}
            />
            <PopupWithForm
              title={"Обновить аватар"}
              name={"avatar"}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
            >
              <input
                className="popup__form-item popup__form-item_type_avatar"
                id="input-avatar"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error input-avatar-error"></span>
            </PopupWithForm>
          </CurrentCardsContext.Provider>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
