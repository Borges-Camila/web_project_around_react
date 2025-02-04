import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState();
  console.log("entrou");
  // useEffect(() => {
  //  (async () => {
  //  await api
  //  .getUsersInfo()
  //.then((res) => res.json())
  //    .then((data) => {
  //    console.log(data);
  //  setCurrentUser(data);
  //   })
  // .catch((error) => {
  // console.log("Error get", error);
  //       });
  // })();
  // }, []);

  useEffect(() => {
    (async () => {
      await api
        .getUsersInfo()
        //    .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentUser(data);
        })
        .catch((error) => {
          console.log("Erro no get", error);
        });
    })();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
