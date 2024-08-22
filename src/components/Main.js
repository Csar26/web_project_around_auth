import Card from "./Card";
import  CurrentUserContext  from "../contexts/CurrentUserContext";
import React from "react";

export default function Main ({
  cards,   
  handleCardClick,
  handleLike,
  handleRemoveLike,
  handleDeleteCard,
}) {

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="content">
    <section className="elements">
      {
      cards.map((item, index) => {
        return <Card 
        key={index}
        title = {item.name}
        link={item.link}
        _id= {item._id}
        likes={item.likes}
        owner={item.owner}
        createdAt={item.createdAt}        
        handleCardClick={handleCardClick}
        handleLike={handleLike}
        handleRemoveLike={handleRemoveLike}
        handleDeleteCard={handleDeleteCard}
        />
      })
    }
    </section>
  </main>
  )
}