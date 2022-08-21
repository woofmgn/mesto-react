import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header /> 
        <Main />
        <Footer />
        <div className="popup popup_type_profile">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <button className="popup__close-window" type="button"></button>
            <form className="popup__form popup__form_type_profile form" name="user-info" novalidate>
              <fieldset className="popup__input-container">
                <input className="popup__form-item popup__form-item_type_name" id="input-name" type="text" name="formName" placeholder="Имя" required minlength="2" maxlength="40" />
                <span className="popup__input-error input-name-error"></span>
                <input className="popup__form-item  popup__form-item_type_job" id="input-job" type="text" name="formJob" placeholder="Сфера деятельности" required minlength="2" maxlength="200" />
                <span className="popup__input-error input-job-error"></span>
                <button className="popup__form-button popup__form-button_inactive" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_type_cards">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <button className="popup__close-window" type="button"></button>
            <form className="popup__form popup__form_type_cards form" name="new-place" novalidate>
              <fieldset className="popup__input-container">
                <input className="popup__form-item popup__form-item_type_place" id="input-place" type="text" name="name" placeholder="Название" required minlength="2" maxlength="30" />
                <span className="popup__input-error input-place-error"></span>
                <input className="popup__form-item  popup__form-item_type_link" id="input-link" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error input-link-error"></span>
                <button className="popup__form-button popup__form-button_inactive" type="submit">Создать</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_type_image">
          <figure className="popup__container popup__container_type_image">
            <button className="popup__close-window popup__close-window_type_image" type="button"></button>
            <img className="popup__image-item" src="#" alt="#" />
            <figcaption className="popup__title-image"></figcaption>
          </figure>
        </div>
        <div className="popup popup_type_delete">
          <div className="popup__container">
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__close-window" type="button"></button>
            <form className="popup__form popup__form_type_delete form" name="del-popup" novalidate>
              <fieldset className="popup__input-container">
                <button className="popup__form-button" type="submit">Да</button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <button className="popup__close-window" type="button"></button>
            <form className="popup__form popup__form_type_avatar form" name="avatar-popup" novalidate>
              <fieldset className="popup__input-container">
                <input className="popup__form-item popup__form-item_type_avatar" id="input-avatar" type="url" name="link" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error input-avatar-error"></span>
                <button className="popup__form-button" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
