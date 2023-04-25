import React from "react";
import "./App.css";

import Card from "./components/Card";
import { Context } from "./context/firestoreContext";
import { useAuthContext } from "./context/authContext";
import Firestore from "./utils/firestore";
import List from "./components/List";

function App() {
  const { state, read } = React.useContext(Context);
  const { authenticate } = useAuthContext();
  const count = React.useMemo(() => {
    return `You have ${state.items.length} photo${
      state.items.length !== 1 ? "s" : ""
    } in your gallery`;
  }, [state.items]);

  React.useEffect(() => {
    read();
    authenticate();
  }, []);

  return (
    <>
      <h1>Gallery</h1>
      {count}
   <List items={state.items}></List>
    </>
  );
}

export default App;
