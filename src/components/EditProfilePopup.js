import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation(currentUser);

  useEffect(() => {
    setValues(currentUser);
    if (!isOpen) {
      resetForm();
    }
  }, [setValues, resetForm, currentUser, isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  };

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      name={"profile"}
      buttonText={"Сохранить"}
      buttonTextLoader={"Сохранение"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      buttonLoading={buttonLoading}
    >
      <input
        className="popup__form-item popup__form-item_type_name"
        id="input-name"
        type="text"
        name="name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        value={values.name || ""}
        onChange={handleChange}
      />
      <span
        className={`popup__input-error input-name-error ${
          isValid ? "" : "form__input-error_active"
        }`}
      >
        {errors.name}
      </span>
      <input
        className="popup__form-item  popup__form-item_type_job"
        id="input-job"
        type="text"
        name="about"
        placeholder="Сфера деятельности"
        required
        minLength="2"
        maxLength="200"
        value={values.about || ""}
        onChange={handleChange}
      />
      <span
        className={`popup__input-error input-job-error ${
          isValid ? "" : "form__input-error_active"
        }`}
      >
        {errors.about}
      </span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
