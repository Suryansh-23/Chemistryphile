import React from "react";
import "./App.css";
import Main from "./components/main";
import logo from "./img/logo.png";

function App() {
  // const [reload, setReload] = useState(false);

  return (
    <section className="bg">
      <img
        alt="Chemistrphile"
        src={logo}
        style={{
          display: "block",
          borderRadius: "5%",
        }}
        className="logo"
        onClick={() => {
          window.location.reload();
        }}
      />
      <div className="App">
        <center>
          <Main />
        </center>
      </div>
    </section>
  );
}

export default App;
