import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import { photos } from "./data";

function App() {
  return (
    <>
      {/* NavBar */}
      <NavBar />
      {/* Home Page */}
      <div className="container text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
          {photos.map((photo, i) => (
            <Card photo={photo} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
