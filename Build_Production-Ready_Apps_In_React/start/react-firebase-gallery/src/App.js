import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";

import { photos } from "./data";
import Layout from "./components/Layout";
import { Context } from "./context";

// const initialState = {
//   items: photos,
//   count: photos.length,
//   inputs: { title: null, file: null, path: null },
//   isCollapsed: false,
// };

// const handleChange = (state, e) => {
//   if (e.target.name === "file") {
//     return {
//       ...state.inputs,
//       file: e.target.files[0],
//       path: URL.createObjectURL(e.target.files[0]),
//     };
//   } else {
//     return { ...state.inputs, title: e.target.value };
//   }
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "setItem":
//       return {
//         ...state,
//         count: state.items.length + 1,
//         items: [state.inputs, ...state.items],
//         inputs: { title: null, file: null, path: null },
//       };
//     case "setInputs":
//       return {
//         ...state,
//         inputs: handleChange(state, action.payload.value),
//       };
//     case "collapse":
//       return {
//         ...state,
//         isCollapsed: action.payload.bool,
//       };

//     default:
//       return state;
//   }
// }

function App() {
  // const [state, dispatch] = React.useReducer(reducer, initialState);
  // const [count, setCount] = React.useState("");
  const {state, dispatch} = React.useContext(Context)

  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });

  const handleChange = (e) => {
    dispatch({ type: "setInputs", payload: { value: e } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "setItem" });
    toggle(!state.isCollapsed);
  };

  const count = React.useMemo(() => { 
    return `You have ${state.items.length} photo${
      state.items.length !== 1 ? "s" : ""
    } in your gallery`;
  })

  return (
    <>
      <Layout
        state={state}
        onChange={handleChange}
        onSubmit={handleSubmit}
        toggle={toggle}
      >
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
