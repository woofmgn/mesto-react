import photoProfile from '../images/profile-image.png'

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-button" onClick={onEditAvatar}>
          <img className="profile__image" src={photoProfile} alt="Фото профиля" />
        </div>
        <div className="profile__info">
          <div className="profile__user">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="element">

         </ul>
      </section>
    </main>
  )
}

export default Main;