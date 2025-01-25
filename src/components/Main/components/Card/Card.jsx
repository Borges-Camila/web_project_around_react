import binButton from "../../../../images/Trash.png";
import heartButton from "../../../../images/Coração.svg";

export default function Card({ card, handleDeleteCard, openPopup }) {
  function deleteCard() {
    handleDeleteCard(card);
  }

  function openBigImage() {
    openPopup(card);
  }

  return (
    <div className="element">
      <img
        src={binButton}
        alt="Imagem de uma lixeira branca."
        className="element__trash"
        onClick={deleteCard}
      />

      <img
        src={card.link}
        alt=""
        className="element__image"
        onClick={openPopup}
      />

      <div className="element__content">
        <h2 className="element__place-name">{card.name}</h2>
        <img src={heartButton} alt="Coração." className="element__heart" />
      </div>
    </div>
  );
}
