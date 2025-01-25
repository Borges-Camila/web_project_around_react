import closeButton from "../../../../images/close-icon.svg";

export default function Popup(props) {
  //children é o conteúdo de popup
  const { onClose, title, children } = props;
  return (
    <div className="popup" id="editProfileImg">
      <div className="popup__form popup__form-avatar" id="profileImg-form">
        <button
          type="button"
          className="popup__close-button"
          id="popup__avatarClose-button"
          onClick={onClose}
        >
          <img src={closeButton} alt="Close icon X" />
        </button>
        <div className="popup__form-content">
          <h3 className="popup__form-title">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}
