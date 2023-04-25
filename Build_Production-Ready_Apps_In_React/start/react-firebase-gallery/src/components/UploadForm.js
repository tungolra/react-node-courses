import React, { useContext } from "react";
import { Context } from "../context/firestoreContext";
import Firestore from "../utils/firestore";
import Storage from "../utils/storage";
import { useAuthContext } from "../context/authContext";

const { writeDoc } = Firestore;
const { uploadFile, downloadFile } = Storage;

const Preview = () => {
  const { state } = useContext(Context);
  const { currentUser } = useAuthContext();

  return (
    state.inputs.path && (
      <div
        className="rounded p-1 m-5"
        style={{
          width: "30%",
          height: "300px",
          backgroundImage: `url(${state.inputs.path}`,
          backgroundSize: "cover",
        }}
      ></div>
    )
  );
};

const UploadForm = () => {
  const { state, dispatch, read } = useContext(Context);
  const { currentUser } = useAuthContext();
  const username = currentUser?.displayName.split(" ").join("");

  const handleChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFile(state.inputs)
      .then(downloadFile)
      .then((url) => {
        writeDoc(
          { ...state.inputs, path: url, user: username.toLowerCase() },
          "stocks"
        ).then(() => {
          read();
          // dispatch({ type: "setItem" });
          dispatch({ type: "collapse", payload: { bool: false } });
        });
      });
  };

  const isDisabled = React.useMemo(() => {
    return !!Object.values(state.inputs).some((input) => !input);
  }, [state.inputs]);

  return (
    state.isCollapsed && (
      <>
        <p className="display-6 text-center mb-3">Upload Stock Image</p>
        <div className="mb-5 d-flex align-items-center justify-content-center">
          <Preview {...state.inputs} />
          <form
            className="mb-2"
            style={{ textAlign: "left" }}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="title"
                aria-describedby="text"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                name="file"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success float-start"
              disabled={isDisabled}
            >
              Save changes
            </button>
          </form>
        </div>
      </>
    )
  );
};
export default UploadForm;
