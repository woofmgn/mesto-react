function ImagePopup() {
  return (
  <div className="popup popup_type_image">
    <figure className="popup__container popup__container_type_image">
      <button className="popup__close-window popup__close-window_type_image" type="button"></button>
      <img className="popup__image-item" src="#" alt="#" />
      <figcaption className="popup__title-image"></figcaption>
    </figure>
  </div>
  )
}

export default ImagePopup;