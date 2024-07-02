import "./App.css";
import RepositoryInput from "./components/RepositoryInput.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RepositoryInput />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ color: "#4dff4d", fontFamily: "system-ui", margin: 0 }}>
            존재하는 Repository입니다.
          </p>
          <p style={{ color: "#ff4d4d", fontFamily: "system-ui", margin: 0 }}>
            존재하지 않는 Repository입니다.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
