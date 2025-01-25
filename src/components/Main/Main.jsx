import profileAvatar from "../../images/Avatar.png";
import profileEditButton from "../../images/Edit-Button.png";
import profileAddButton from "../../images/Add-Button.png";

import { useState } from "react";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

function Main({ cards, handleDeleteCard }) {
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

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      <section className="profile">
        <button
          type="button"
          className="profile__edit-avatar"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            src={profileAvatar}
            className="profile__avatar"
            alt="Fotografia de um senhor de cabelos brancos, usando uma touca de cor vermelho vibrante e um camisa azul claro."
          />
        </button>
        <div className="profile__info">
          <div className="profile__title-edit">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img src={profileEditButton} alt="Edit Button." />
            </button>
          </div>
          <div className="profile__subtitle">
            <h2 className="profile__subtitle-text">Explorador</h2>
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

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      <div className="elements">
        {cards.map((item, index) => (
          <Card
            card={item}
            key={index}
            handleDeleteCard={handleDeleteCard}
            handleOpenPopup={handleOpenPopup}
          />
        ))}
      </div>
    </>
  );
}

export default Main;
