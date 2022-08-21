import {useState} from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);  
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Header /> 
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
        <PopupWithForm
          title={'Редактировать профиль'} 
          name={'profile'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__form-item popup__form-item_type_name" id="input-name" type="text" name="formName" placeholder="Имя" required minlength="2" maxlength="40" />
          <span className="popup__input-error input-name-error"></span>
          <input className="popup__form-item  popup__form-item_type_job" id="input-job" type="text" name="formJob" placeholder="Сфера деятельности" required minlength="2" maxlength="200" />
          <span className="popup__input-error input-job-error"></span>
        </PopupWithForm> 
        <PopupWithForm
          title={'Новое место'}
          name={'cards'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__form-item popup__form-item_type_place" id="input-place" type="text" name="name" placeholder="Название" required minlength="2" maxlength="30" />
          <span className="popup__input-error input-place-error"></span>
          <input className="popup__form-item  popup__form-item_type_link" id="input-link" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error input-link-error"></span>
        </PopupWithForm>
        <ImagePopup />
        <PopupWithForm
          title={'Вы уверены?'}
          name={'delete'}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          title={'Обновить аватар'}
          name={'avatar'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__form-item popup__form-item_type_avatar" id="input-avatar" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error input-avatar-error"></span>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
