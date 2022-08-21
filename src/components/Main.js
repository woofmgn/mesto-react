import photoProfile from '../images/profile-image.png'

function Main() {

  const handleEditAvatarClick = () => {
    const avatarPopup = document.querySelector('.popup_type_avatar');
    avatarPopup.classList.add('popup_opened');
  }

  const handleEditProfileClick = () => {
    const editProflePopup = document.querySelector('.popup_type_profile');
    editProflePopup.classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    const addPlacePopup = document.querySelector('.popup_type_cards');
    addPlacePopup.classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-button" onClick={handleEditAvatarClick}>
          <img className="profile__image" src={photoProfile} alt="Фото профиля" />
        </div>
        <div className="profile__info">
          <div className="profile__user">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="element">

         </ul>
      </section>
    </main>
  )
}

export default Main;