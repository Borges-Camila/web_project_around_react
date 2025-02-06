import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";
import { useState, useContext, useRef } from "react";

export default function EditAvatar() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateAvatar } = userContext;

  const [avatar, setAvatar] = useState(currentUser.avatar);
  const inputAvatar = useRef();

  console.log(avatar);

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateAvatar({ avatar: inputAvatar.current.value });
  };

  return (
    <>
      <form
        className="popup__form-table"
        id="popup__form-table"
        onSubmit={handleSubmit}
      >
        <input
          type="url"
          id="input-avatar"
          name="imagem"
          required
          minLength="2"
          maxLength="300"
          className="popup__input"
          placeholder="Link da Imagem"
          value={avatar}
          ref={inputAvatar}
          onChange={handleAvatarChange}
        />
        <span id="avatar-input-error" className="popup__message"></span>
        <button
          type="submit"
          className="popup__save-button"
          id="profileImg-saveButton"
        >
          Salvar
        </button>
      </form>
    </>
  );
}
