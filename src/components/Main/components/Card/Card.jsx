import binButton from "../../../../images/Trash.png";
import heartButton from "../../../../images/Coração.svg";

import ImagePopup from "../Popup/components/BigImage/imagePopup";

export default function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <li className="element">
      <img
        src={binButton}
        alt="Imagem de uma lixeira branca."
        className="element__trash"
      />

      <img
        src={link}
        alt={name}
        className="element__image"
        onClick={() => handleOpenPopup(imageComponent)}
      />

      <div className="element__content">
        <h2 className="element__place-name">{name}</h2>
        <img src={heartButton} alt="Coração." className="element__heart" />
      </div>
    </li>
  );
}
