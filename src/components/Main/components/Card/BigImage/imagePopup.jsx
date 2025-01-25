import closeButton from "../../../../../images/close-icon.svg";

export default function ImagePopup({ card, onClose }) {
  return (
    <section className="popup" id="PopupImage">
      <div className="popup__content-image">
        <button
          className="popup__image-button"
          id="CloseImagePopup"
          onClick={onClose}
        >
          <img src={closeButton} alt="Close icon X" />
        </button>
        <img alt={card.name} className="popup__image" src={card.link} />
        <p className="popup__paragraph">{card.name}</p>
      </div>
    </section>
  );
}
