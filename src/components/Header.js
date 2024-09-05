import Logo from '../images/Vector.svg'
import ImageAvatar from '../images/Avatar.png'
import EditButoon from '../images/Edit_Button.svg'
import AddButton from '../images/vector_add.svg'
import React from 'react'
import CurrentUserContext from "../contexts/CurrentUserContext";
import { Link } from "react-router-dom";


export default function Header({
  handleEditProfileClick,
  handleAddPlaceClick,
  handleEditAvatarClick,
  LogoutButton,
}) {
  

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <header className="header">
      <div className="place-logo">
        <img src={Logo} alt="logo Around" className="logo" />
        <p onClick={LogoutButton} className="register__header">
            Log out
          </p>
      </div>
      
      <section className="profile">
        <button className="profile__avatar-button-edit" onClick={handleEditAvatarClick}>
          <img
            src={currentUser.avatar || ImageAvatar}
            alt="Jacques Cousteau, explorador y Biologo marino."
            className="avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__name-area">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__button" onClick={handleEditProfileClick}>
              <img src={EditButoon} alt="Boton editar perfil" />              
            </button>
          </div>

          <p className="profile__job">{currentUser.about}</p>
        </div>
        <div className="newplace">
          <button className="add-button" onClick={handleAddPlaceClick}>
            <img
              className="add-button__image"
              src={AddButton}
              alt="Boton agregar imagen"
            />        
          </button>
        </div>
      </section>
    </header>
    </CurrentUserContext.Provider>
  );
}