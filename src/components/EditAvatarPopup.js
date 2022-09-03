import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(isOpen, onClose, onUpdateAvatar) {
  const avatarRef = useRef({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__form-item popup__form-item_type_avatar"
        id="input-avatar"
        type="url"
        name="link"
        ref={avatarRef}
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error input-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
