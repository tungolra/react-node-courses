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

function reducer(state, action) {
  switch (action.type) {
    case "setItem":
      return {
        ...state,
        items: [action.payload, ...state.items],
        count: state.count + 1,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [inputs, setInputs] = React.useState({
    title: null,
    file: null,
    path: null,
  });
  const [items, setItems] = React.useState(photos);
  const [count, setCount] = React.useState("");
  const [isCollapsed, collapse] = React.useState(false);

  const toggle = () => collapse(!isCollapsed);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setInputs({
        ...inputs,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setInputs({ ...inputs, title: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setItems([inputs.path, ...items]);
    dispatch({ type: "setItem", payload: { path: inputs.path } });
    setInputs({ title: null, file: null, path: null });
    collapse(false);
  };

  React.useEffect(() => {
    console.log(state)
  }, [state.items]);

  React.useEffect(() => {
    setCount(
      `You have ${state.items.length} photo${
        state.items.length !== 1 ? "s" : ""
      } in your gallery`
    );
  }, [items]);
  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* Home Page */}
      <div className="container text-center mt-5">
        <p className="display-9">{count}</p>
        <button className="btn btn-success float-end" onClick={toggle}>
          {!isCollapsed ? "Add" : "Collapse"}
        </button>
        <UploadForm
          isVisible={isCollapsed}
          onChange={handleChange}
          onSubmit={handleSubmit}
          inputs={inputs}
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
