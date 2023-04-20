import React from "react";
import NavBar from "./NavBar";
import UploadForm from "./UploadForm";

export default function Layout({
  children,
  state,
  onChange,
  onSubmit,
  toggle,
}) {
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
        <UploadForm
          isVisible={state.isCollapsed}
          onChange={onChange}
          onSubmit={onSubmit}
          inputs={state.inputs}
        />
        {children}
      </div>
    </>
  );
}
