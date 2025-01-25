import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import infoAPI from "./Utils/api";

function App() {
  const [cards, setCards] = useState([]); // const dos cartões

  useEffect(() => {
    infoAPI
      .getInitialCards()
      .then((res) => res.json())
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log("Error get", error);
      });
  });

  function handleDeleteCard(card) {
    infoAPI
      .delete(card._id)
      .then((res) => {
        if (res.status !== 200) {
          return Promise.reject("Erro no delete card");
        }
        setCards(cards.filter((c) => c._id !== card._id));
      })
      .catch((error) => {
        console.error(`[DELETE] - cards - ${error}`);
      });
  }

  return (
    <div className="page">
      <Header />
      <Main cards={cards} handleDeleteCard={handleDeleteCard} />

      <Footer />
    </div>
  );
}

export default App;
