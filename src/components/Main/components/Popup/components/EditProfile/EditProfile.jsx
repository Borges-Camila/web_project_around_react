import { useContext, useState } from "react";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  //Atualização do nome
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //Atualização da descrição
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
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
          id="input-name"
          name="name"
          required
          minLength="2"
          maxLength="40"
          className="popup__input"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
        <span id="name-error" className="popup__message"></span>

        <input
          type="text"
          id="input-about"
          name="about"
          required
          minLength="2"
          maxLength="200"
          className="popup__input"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span id="about-error" className="popup__message"></span>
        <button
          type="submit"
          className="popup__save-button"
          id="profile-saveButton"
        >
          Salvar
        </button>
      </form>
    </>
  );
}
