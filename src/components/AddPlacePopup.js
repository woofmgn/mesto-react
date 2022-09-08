import { useEffect, useState } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonLoading }) {
  const [newCardLink, setNewCardLink] = useState("");
  const [newCardTitle, setNewCardTitle] = useState("");

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation({ newCardTitle, newCardLink });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace(values.title, values.link);
  };

  useEffect(() => {
    setNewCardLink(values.link);
    setNewCardTitle(values.title);
    setValues({ newCardTitle, newCardLink });
    if (!isOpen) {
      resetForm();
      setNewCardLink("");
      setNewCardTitle("");
    }
  }, [isOpen, setValues]);

  return (
    <PopupWithForm
      title={"Новое место"}
      name={"cards"}
      buttonText={"Сохранить"}
      buttonTextLoader={"Сохранение"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      buttonLoading={buttonLoading}
    >
      <input
        className="popup__form-item popup__form-item_type_place"
        id="input-place"
        type="text"
        name="title"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        onChange={handleChange}
        value={values.title || ""}
      />
      <span
        className={`popup__input-error input-place-error ${
          isValid ? "" : "form__input-error_active"
        }`}
      >
        {errors.title}
      </span>
      <input
        className="popup__form-item  popup__form-item_type_link"
        id="input-link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        onChange={handleChange}
        value={values.link || ""}
      />
      <span
        className={`popup__input-error input-link-error ${
          isValid ? "" : "form__input-error_active"
        }`}
      >
        {errors.link}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
