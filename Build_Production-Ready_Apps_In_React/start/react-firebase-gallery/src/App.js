import React from "react";
import "./App.css";

import Card from "./components/Card";
import Layout from "./components/Layout";
import { Context } from "./context";
import Firestore from "./utils/firestore";

function App() {
  const { state, read } = React.useContext(Context);

  const count = React.useMemo(() => {
    return `You have ${state.items.length} photo${
      state.items.length !== 1 ? "s" : ""
    } in your gallery`;
  }, [state.items]);

  //test getDocs
  React.useEffect(() => {
    read().then(console.log);
  }, []);

  return (
    <>
      <Layout>
        <h1>Gallery</h1>
        {count}
        <div className="row">
          {state.items.map((photo, i) => (
            <Card {...photo} key={i} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default App;
