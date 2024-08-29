import React from "react";
import PopupWithForm from "./PopupWithForm";


export default function InfoToolTips({handleClose, isOpen, IsFullFill}) {

  return(
    <>
    <PopupWithForm handleClose={handleClose} isOpen={isOpen} IsFullFill={IsFullFill}>
      <div className={
        IsFullFill ? "popup__register_utter" : "popup__register_error" }
      >
      
      {IsFullFill
? "Correct, You are already registered. " : "Ups!, something went wrong."    
      }  
</div>
      </PopupWithForm>
    </>
  );
}