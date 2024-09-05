import React from "react";
import PopupWithForm from "./PopupWithForm";


export default function InfoToolTips({handleClose, open, isFullFill}) {

  return(
    <>
    <PopupWithForm onClose={handleClose} open={open} isFullFill={isFullFill} hideSubmiButton={true}>
      <div className={
        isFullFill ? "popup__register_utter" : "popup__register_error" }
      >
      
      {isFullFill
? "Correct, You are already registered. " : "Ups!, something went wrong."    
      }  
</div>
      </PopupWithForm>
    </>
  );
}