import List from "./List";
import { useFireStoreContext } from "../context/firestoreContext";
import { useAuthContext } from "../context/authContext";
import { useMemo } from "react";


const StockImages = () => {
  const { state } = useFireStoreContext();
  const { currentUser } = useAuthContext();

  const items = useMemo(() => {
    const filtered = state.items.filter((item) => {
      const username = currentUser?.displayName.split(" ").join("");
      return item.user === username?.toLowerCase();
    });
    return currentUser ? filtered : [];
  }, [state.items, currentUser]);
  return (
    <>
      <h1>My Stocks</h1>
      <List items={items} />
    </>
  );
};
export default StockImages;
