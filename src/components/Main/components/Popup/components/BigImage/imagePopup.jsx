export default function ImagePopup({ card }) {
  return (
    <>
      <img alt={card.name} className="popup__image" src={card.link} />
      <p className="popup__paragraph">{card.name}</p>
    </>
  );
}
