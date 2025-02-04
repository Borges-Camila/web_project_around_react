import { useContext, useEffect, useState } from "react";

import profileAvatar from "../../images/Avatar.png";
import profileEditButton from "../../images/Edit-Button.png";
import profileAddButton from "../../images/Add-Button.png";

import NewCard from "./components/Popup/components/NewCard/NewCard";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import api from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = {
    title: "Novo Local",
    children: <NewCard />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar />,
  };

  const [cards, setCards] = useState([]); //variável de estado para cards

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => res.json())
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log("Error get", error);
      });
  });

  return (
    <>
      <section className="profile">
        <button
          type="button"
          className="profile__edit-avatar"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            src={currentUser.avatar}
            className="profile__avatar"
            alt="Fotografia de um senhor de cabelos brancos, usando uma touca de cor vermelho vibrante e um camisa azul claro."
          />
        </button>
        <div className="profile__info">
          <div className="profile__title-edit">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img src={profileEditButton} alt="Edit Button." />
            </button>
          </div>
          <div className="profile__subtitle">
            <h2 className="profile__subtitle-text">{currentUser.about}</h2>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="profile__add-button"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img
              src={profileAddButton}
              alt="Add Button."
              className="profile__button-img"
            />
          </button>
        </div>
      </section>
      <div className="janela-popup">
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </div>
      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </ul>
    </>
  );
}

export default Main;
