import binButton from "../../../../images/Trash.png";
import heartButton from "../../../../images/Coração.svg";

export default function Card() {
  const { name, link } = props.card;
  return (
    <div className="element">
      <img
        src={binButton}
        alt="Imagem de uma lixeira branca."
        className="element__trash"
      />

      <img src={link} alt="" className="element__image" />

      <div className="element__content">
        <h2 className="element__place-name">{name}</h2>
        <img src={heartButton} alt="Coração." className="element__heart" />
      </div>
    </div>
  );
}
