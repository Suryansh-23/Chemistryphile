import "./App.css";
import Main from "./components/main";
import logo from "./img/logo.png";
// import SpeechRecog from "./components/SpeechRecog";

function App() {
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
