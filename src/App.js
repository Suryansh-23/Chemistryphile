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
          margin: "auto",
          display: "block",
          marginBottom: "-50px",
          borderRadius: "5%",
        }}
      />
      <div className="App">
        <Main />
      </div>
    </section>
  );
}

export default App;
