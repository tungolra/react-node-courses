import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";

import { photos } from "./data";

const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

const handleChange = (state, e) => {
  if (e.target.name === "file") {
    return {
      ...state.inputs,
      file: e.target.files[0],
      path: URL.createObjectURL(e.target.files[0]),
    };
  } else {
    return { ...state.inputs, title: e.target.value };
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items: [state.inputs, ...state.items],
      };
    case "setInputs":
      return {
        ...state,
        inputs: handleChange(state, action.payload.value)
      };
    case "collapse":
      return {
        ...state,
        isCollapsed: action.payload.bool
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // const [inputs, setInputs] = React.useState({
  //   title: null,
  //   file: null,
  //   path: null,
  // });
  // const [items, setItems] = React.useState(photos);
  const [count, setCount] = React.useState("");
  // const [isCollapsed, collapse] = React.useState(false);

  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool: !state.isCollapsed } })

  const handleChange = (e) => {
    dispatch({ type: "setInputs", payload: { value: e } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setItems([inputs.path, ...items]);
    dispatch({ type: "setItem" });
    // setInputs({ title: null, file: null, path: null });
    // collapse(false);
    toggle(!state.isCollapsed)
  };

  React.useEffect(() => {
    setCount(
      `You have ${state.items.length} photo${
        state.items.length !== 1 ? "s" : ""
      } in your gallery`
    );
  }, [state.items]);
  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* Home Page */}
      <div className="container text-center mt-5">
        <p className="display-9">{count}</p>
        <button className="btn btn-success float-end" onClick={() => toggle(!state.isCollapsed)}>
          {!state.isCollapsed ? "Add" : "Collapse"}
        </button>
        <UploadForm
          isVisible={state.isCollapsed}
          onChange={handleChange}
          onSubmit={handleSubmit}
          inputs={state.inputs}
        />
        <h1>Gallery</h1>
        <div className="row">
          {state.items.map((photo, i) => (
            <Card photo={photo.path} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
