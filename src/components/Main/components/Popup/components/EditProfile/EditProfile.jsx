export default function EditProfile() {
  return (
    <>
      <form className="popup__form-table" id="popup__form-table">
        <input
          type="text"
          id="input-name"
          name="name"
          required
          minlength="2"
          maxlength="40"
          className="popup__input"
          placeholder="Nome"
          value="Jacques Cousteau"
        />
        <span id="name-error" className="popup__message"></span>

        <input
          type="text"
          id="input-about"
          name="about"
          required
          minlength="2"
          maxlength="200"
          className="popup__input"
          placeholder="Sobre mim"
          value="Explorador"
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
