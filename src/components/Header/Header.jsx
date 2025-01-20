import logo from "../../images/Logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} className="header__logo" alt="Frase Around The U.S." />
        <hr />
      </header>
    </>
  );
}

export default Header;
