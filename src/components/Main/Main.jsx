import profileAvatar from "../../images/Avatar.png";
import profileEditButton from "../../images/Edit-Button.png";
import profileAddButton from "../../images/Add-Button.png";

import { useState } from "react";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
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

  const cardInfos = {
    name: cards.name,
    link: cards.link,
  };

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

      <ul className="elements">
        {cards.map((card) => (
          <Card key={card._id} name={cards.name} link={cards.link} />
        ))}
      </ul>
    </>
  );
}

export default Main;
