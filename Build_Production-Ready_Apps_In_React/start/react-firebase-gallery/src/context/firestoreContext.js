import React from "react";
import { photos } from "../data";
import Firestore from "../utils/firestore";

const { readDocs } = Firestore;

export const Context = React.createContext();

const initialState = {
  items: photos,
  placeholders: photos,
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
    case "filterItems":
      return {
        ...state,
        items: action.payload.results,
      };
    case "setItems":
      return {
        ...state,
        items: action.payload.items,
        placeholders: action.payload.items,
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
  const filterItems = (input) => {
    if (input === "" || !!input) {
      dispatch({ type: "setItems", payload: { items: state.placeholders } });
    }
    // create new array with subelements array concatenated
    let list = state.placeholders.flat();
    let results = list.filter((item) => {
      const name = item.title.toLowerCase();
      const search = input.toLowerCase();
      return name.indexOf(search) > -1;
    });
    dispatch({ type: "filterItems", payload: { results } });
  };
  const value = React.useMemo(() => {
    return {
      state,
      dispatch,
      read,
      filterItems,
    };
  }, [state, dispatch, read, filterItems]);
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export const useFireStoreContext = () => {
  return React.useContext(Context);
};

export default Provider;
