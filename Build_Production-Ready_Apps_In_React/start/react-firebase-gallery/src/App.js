import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";

import { photos } from "./data";

function App() {
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
    setItems([inputs.path, ...items]);
    setInputs({ title: null, file: null, path: null });
    collapse(false);
  };

  React.useEffect(() => {
    setCount(
      `You have ${items.length} photo${
        items.length > 1 ? "s" : ""
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
          {items.map((photo, i) => (
            <Card photo={photo} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
