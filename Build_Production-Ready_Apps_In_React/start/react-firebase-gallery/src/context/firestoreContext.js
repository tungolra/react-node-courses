import React from "react";
import { photos } from "../data";
import Firestore from "../utils/firestore";

const { readDocs } = Firestore;

export const Context = React.createContext();

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
        count: state.items.length + 1,
        items: [state.inputs, ...state.items],
        inputs: { title: null, file: null, path: null },
      };
    case "setItems":
      return {
        ...state,
        items: action.payload.items,
      };
    case "setInputs":
      return {
        ...state,
        inputs: handleChange(state, action.payload.value),
      };
    case "collapse":
      return {
        ...state,
        isCollapsed: action.payload.bool,
      };

    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const read = async () => {
    const items = await readDocs("stocks");
    dispatch({ type: "setItems", payload: { items } });
  };
  return (
    <Context.Provider value={{ state, dispatch, read }}>
      {children}
    </Context.Provider>
  );
};

export const useFireStoreContext = () => {
  return React.useContext(Context);
};

export default Provider;
