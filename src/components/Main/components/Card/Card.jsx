import binButton from "../../../../images/Trash.png";
import heartButton from "../../../../images/Coração.svg";

import ImagePopup from "../Popup/components/BigImage/imagePopup";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;

  const imageComponent = {
    title: "",
    children: <ImagePopup card={props.card} />,
  };

  const { onCardLike } = props;

  const cardLikeBtn =
    isLiked === true ? "element__heart-active" : "element__heart";

  function handleLikeClick() {
    onCardLike(props.card);
  }

  const { onDeleteCard } = props;
  function handleDeleteClick() {
    onDeleteCard(props.card);
  }

  return (
    <li className="element">
      <img
        src={binButton}
        alt="Imagem de uma lixeira branca."
        className="element__trash"
        onClick={handleDeleteClick}
      />

      <img
        src={link}
        alt={name}
        className="element__image"
        onClick={() => handleOpenPopup(imageComponent)}
      />

      <div className="element__content">
        <h2 className="element__place-name">{name}</h2>
        <img
          src={heartButton}
          alt="Coração."
          className={cardLikeBtn}
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
