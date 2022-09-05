import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title={"Вы уверены?"}
      name={"delete"}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}

export default ConfirmDeletePopup;
