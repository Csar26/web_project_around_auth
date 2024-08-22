import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function AddPlacePopup({isOpen, onClose, onSubmitAddPlace}) {
  
  return (

    <PopupWithForm
        open={isOpen}
        onSubmit={onSubmitAddPlace}
        onClose={onClose}
        title={"New Place"}
      >
        <>
          <input
            type="text"
            required
            minLength="2"
            maxLength="30"
            className="form form_input"
            name="title"
            placeholder="Title"
          />
          <span className="form form_error form_error_index-title"></span>
          <label htmlFor="input-name" className="popup__label">
            {" "}
          </label>
          <input
          type="url"
          required
          className="form form_input"
          name="link"
          placeholder="link"
        />
        <span className="form form_error form_error_index-link"></span>
      </>
    </PopupWithForm>
)
}