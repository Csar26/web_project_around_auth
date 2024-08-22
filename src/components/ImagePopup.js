import React from "react";
import Popup from "./Popup";


export default function ImagePopup ({title, onClose, selectCard, open}){
  
  return (
    
    <>
    <Popup  title= {title} onClose={onClose} open={open}>
      <div className="popup_content_image">
      <h3 className="popup__title">{selectCard.title}</h3>
      <img className="popup__image" src={selectCard.link} alt={selectCard.title}/>
      </div>
    </Popup>
    </>
  )

}