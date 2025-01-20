export default function NewCard() {
  return (
    <>
      <form className="popup__form-table" id="popup__form-table">
        <input
          type="text"
          id="input-title"
          name="name"
          required
          minLength="2"
          maxLength="30"
          className="popup__input"
          placeholder="Título"
        />
        <span id="title-error" className="popup__message"></span>

        <input
          type="url"
          id="input-link"
          name="link"
          required
          className="popup__input"
          placeholder="Link da imagem"
        />
        <span id="link-error" className="popup__message"></span>
        <button type="submit" className="popup__save-button" id="create-button">
          Criar
        </button>
      </form>
    </>
  );
}
