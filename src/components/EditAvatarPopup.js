import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(isOpen, onClose) {
  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar"}
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default EditAvatarPopup;