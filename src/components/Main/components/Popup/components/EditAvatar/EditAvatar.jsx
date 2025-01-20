export default function EditAvatar() {
  return (
    <>
      <form className="popup__form-table" id="popup__form-table">
        <input
          type="url"
          id="input-avatar"
          name="imagem"
          required
          minlength="2"
          maxlength="300"
          className="popup__input"
          placeholder="Link da Imagem"
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
