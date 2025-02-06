import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

export default function NewCard() {
  const userContext = useContext(CurrentUserContext);
  const { handleAddPlaceSubmit } = userContext;

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddPlaceSubmit({ name, link });
  };

  return (
    <>
      <form
        className="popup__form-table"
        id="popup__form-table"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="input-title"
          name="name"
          required
          minLength="2"
          maxLength="30"
          className="popup__input"
          placeholder="Título"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <span id="title-error" className="popup__message"></span>

        <input
          type="url"
          id="input-link"
          name="link"
          required
          className="popup__input"
          placeholder="Link da imagem"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        <span id="link-error" className="popup__message"></span>
        <button type="submit" className="popup__save-button" id="create-button">
          Criar
        </button>
      </form>
    </>
  );
}
