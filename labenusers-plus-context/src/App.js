import { useState, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { Router } from "./routes/Router";
import axios from "axios";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [userList, setUserList] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    const headers = {
      headers: {
        authorization: "eloisa-wuttke-conway",
      },
    };
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        headers
      );
      // console.log(response.data);
      setUserList(response.data);
      // console.log(userList);
    } catch (error) {
      console.log("Erro ao buscar lista de usuarios");
      console.log(error.response);
    }
  };

  const selectCard = (idToSelect) => {
    if (selectedId === idToSelect) {
      setSelectedId("");
    } else {
      setSelectedId(idToSelect);
    }
  };

  const context = {
    userList,
    setUserList,
    fetchUserList,
    selectedId,
    selectCard,
  };

  return (
    <>
      <GlobalContext.Provider value={context}>
        <ChakraProvider>
          <h1>LABENUSERS</h1>
          <Router />
        </ChakraProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
