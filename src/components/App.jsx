import { useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import infoAPI from "./Utils/api";

function App() {
  const cards = [];

  useEffect(() => {
    infoAPI
      .getInitialCards()
      .then((res) => res.json())
      .then((cards) => {
        console.log(cards);
      })
      .catch((error) => {
        console.group("Error get", error);
      });
  });

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
