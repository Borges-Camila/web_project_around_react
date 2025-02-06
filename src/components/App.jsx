import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]); //variável de estado para cards

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  // função para oegar infos usurário
  async function getUserInfo() {
    await api
      .getUsersInfo()
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log("Erro no get", error);
      });
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  // faz o update das infos do usuário
  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .editProfileInfo(data)
        .then((response) => response.json())
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        });
    })();
  };

  // faz o update da img do usuário
  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
        .editAvatarImg(data)
        .then((response) => response.json())
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        });
    })();
  };

  // Adiciona mais cartões
  const handleAddPlaceSubmit = (data) => {
    (async () => {
      await api
        .createNewCard(data)
        .then((response) => response.json())
        .then((newCard) => {
          setCards([newCard, ...cards]);
          handleClosePopup();
        });
    })();
  };

  // Pega os cartões iniciais
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => res.json())
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log("Error get", error);
      });
  }, []);

  // Função de dar like nos cartões
  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;

    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    await api
      .changeLikeCardStatus(card._id, isLiked)
      .then((response) => response.json())
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  // Função de deletar nos cartões
  async function handleDeleteCard(card) {
    await api
      .deleteCard(card._id)
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
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCard}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
