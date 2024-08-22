import PopupWithForm from "./PopupWithForm";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currenttUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currenttUser.name);
    setDescription(currenttUser.about);
  }, [currenttUser]);
  

  function onSubmitEditProfile() {
    onUpdateUser({
      name,
      about: description,
    });
  }
  

  return (
    <PopupWithForm
      open={isOpen}
      onClose={onClose}
      title={"Edit profile"}
      onSubmit={onSubmitEditProfile}
    >
      <>
        <input
          placeholder="Name"
          minLength="2"
          maxLength="40"
          type="text"
          id="input-name"
          className="form form_input"
          onChange={(e) => setName(e.target.value)}
          name="name"
          defaultValue={currenttUser.name}
          required
        />
        <span className="form form_error form_error_index-name"></span>
        <label
          htmlFor="input-name"
          className="popup__label popup__label_edit"
        ></label>
        <input
          placeholder="About"
          required
          minLength="2"
          maxLength="200"
          type="text"
          id="input-about"
          className="form form_input"
          onChange={(e) => setDescription(e.target.value)}
          name="job"
          defaultValue={currenttUser.about}
        />
        <span className="form form_error form_error_index-job"></span>
      </>
    </PopupWithForm>
  );
}