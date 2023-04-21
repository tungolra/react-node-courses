import React from "react";
import { Context } from "../context";
import NavBar from "./NavBar";
import UploadForm from "./UploadForm";

export default function Layout({ children }) {
  const { state, dispatch } = React.useContext(Context);

  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });

  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* Home Page */}
      <div className="container text-center mt-5">
        <p className="display-9">{state.count}</p>
        <button
          className="btn btn-success float-end"
          onClick={() => toggle(!state.isCollapsed)}
        >
          {!state.isCollapsed ? "Add" : "Collapse"}
        </button>
        <UploadForm isVisible={state.isCollapsed} inputs={state.inputs} />
        {children}
      </div>
    </>
  );
}
