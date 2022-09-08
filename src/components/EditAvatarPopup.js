import { useEffect, useState } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonLoading }) {
  const [newAvatarLink, setNewAvatarLink] = useState("");

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation(newAvatarLink);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar(values.avatar);
  };

  useEffect(() => {
    setNewAvatarLink(values.avatar);
    setValues(newAvatarLink);
    if (!isOpen) {
      resetForm();
      setNewAvatarLink("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar"}
      buttonText={"Изменить"}
      buttonTextLoader={"Изменение"}
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      buttonLoading={buttonLoading}
    >
      <input
        className="popup__form-item popup__form-item_type_avatar"
        id="input-avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
        onChange={handleChange}
        value={values.avatar || ""}
      />
      <span
        className={`popup__input-error input-avatar-error ${
          isValid ? "" : "form__input-error_active"
        }`}
      >
        {errors.avatar}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
