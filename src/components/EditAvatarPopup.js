import PopupWithForm from "./PopupWithForm";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function onSubmitAvatar() {
    onUpdateAvatar(
      avatarRef.current.value,
    );
    avatarRef.current.value = "";
  }
  
  
  return (
    <PopupWithForm
      open={isOpen}
      onClose={onClose}
      title={"Edit profile photo"}
      onSubmit={onSubmitAvatar}
    >
      <>
        <input
          type="url"
          required
          className="form form_input"
          name="link"
          ref={avatarRef}
          placeholder="link"
        />
        <span className="form form_error form_error_index-name"></span>
      </>
    </PopupWithForm>
  );
}