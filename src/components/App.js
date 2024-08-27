import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import React from "react";
import  api  from "../utils/api";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup  from "./AddPlacePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Login from "./Login";
import Register from "./Register";
import {Route, Switch, Link} from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";


function App() {
  const [openProfileOpen, setOpenProfileOpen] = React.useState(false);
  const [openAddCardOpen, setOpenAddCardOpen] = React.useState(false);
  const [openAvatarOpen, setOpenAvatarOpen] = React.useState(false);
  const [openImageOpen, setOpenImageOpen] = React.useState(false);
  const [openConfirmationOpen, setOpenConfirmationOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectCard, setSelectCard] = React.useState({});
  const closeAllPopups = () => {
    setOpenProfileOpen(false);
    setOpenAddCardOpen(false);
    setOpenAvatarOpen(false);
    setOpenImageOpen(false);
    setOpenConfirmationOpen(false);
    
  };
  React.useEffect(() => {
    api.getUserInfo().then((user) => {
      setCurrentUser(user);
      api.getCards().then((cards) => {
        setCards(cards);
      });
    });
  }, []);
  const handleCardClick = (card) => {
    setOpenImageOpen(true);
    setSelectCard(card);
    handleCloseEscape();
  };
  const handleLike = (cardId) => {
    api.likeCard(cardId).then(() => {
      api.getCards().then((cards) => {
        setCards(cards);
      });
    });
  };
  const handleDeleteCard = (card) => {
    setSelectCard(card);
    setOpenConfirmationOpen(true);
    handleCloseEscape();
  };
  const handleRemoveLike = (cardId) => {
    api.deleteLikeCard(cardId).then(() => {
      api.getCards().then((cards) => {
        setCards(cards);
      });
    });
  };
  function remoteDeleteCard() {
    return api.deleteCard(selectCard._id).then(() => {
      api.getCards().then((cards) => {
        setCards(cards);        
      });
    });
  }
  const onSubmitEditProfile = ({name, about}) => {
    return api.updateUser(name, about).then((user)=> {
      setCurrentUser(user);
      setOpenProfileOpen(false);
    })
  }
  const onSubmitAddPlace = (data) => {
    return api.addCard(data.link, data.title).then((card) => {
    setCards([card,...cards]);
    setOpenAddCardOpen(false);
    });
  };
  const onSubmitAvatar = (avatar) => {
    return api.changeAvatar(avatar).then((user) => {
    setCurrentUser(user);
    setOpenAvatarOpen(false);
    });
  };
  const handleCloseEscape = () => {
    document.addEventListener("keydown", handleKeyEscape)
  }
  const handleKeyEscape = (evt) => {
    if (evt.key ==="Escape"){
      closeAllPopups();
    }
  }
 


   const handleLogin = (event) => {
    const email = event.target.elemets.email.value;
    const password = event.target.elemets.password.value;
    fetch('https://tripleten.desarrollointerno-com/signin', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email,password})
    }).then(response => response.json())
    .then(data => {
      console.log(data);
    })
   }



  return (

    <CurrentUserContext.Provider value={currentUser}>
    <div className="page" >
      <Switch>
        <Route path="/">
        <Register />
        </Route>
        <Route path="/Login" handleLogin={handleLogin}>
        
        </Route>
        <ProtectedRoute>
      <Header
        handleEditProfileClick={() => {
          setOpenProfileOpen(true);
          handleCloseEscape();
        }}
        handleAddPlaceClick={() => {
          setOpenAddCardOpen(true);
          handleCloseEscape();
        }}
        handleEditAvatarClick={() => {
          setOpenAvatarOpen(true);
          handleCloseEscape();
        }}
      />
      <Main        
        cards={cards}
        handleLike={handleLike}
        handleRemoveLike={handleRemoveLike}
        handleDeleteCard={handleDeleteCard}
        handleCardClick={handleCardClick}
      />
      <Footer />

      <EditProfilePopup isOpen={openProfileOpen} onClose={closeAllPopups} onUpdateUser={onSubmitEditProfile}/>  

      <AddPlacePopup isOpen={openAddCardOpen} onClose={closeAllPopups} onSubmitAddPlace={onSubmitAddPlace} />    



      <EditAvatarPopup isOpen={openAvatarOpen} onClose={closeAllPopups} onUpdateAvatar={onSubmitAvatar} />

      <PopupWithForm
        open={openConfirmationOpen}
        onSubmit={remoteDeleteCard}
        onClose={closeAllPopups}
        title={"Are you sure?"}
        buttonText="Yes"
      >
        <></>
      </PopupWithForm>
      <ImagePopup
        open={openImageOpen}
        onClose={closeAllPopups}
        title={"Image"}
        selectCard={selectCard}
      >
        <></>
      </ImagePopup>
      </ProtectedRoute>
      <Route>

        
      </Route>

      </Switch>
    </div>
    </CurrentUserContext.Provider>
    
  );
}
export default App;