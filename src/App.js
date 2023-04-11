import './App.css';
import Knight from "./components/Knight"
import Square from "./components/Square"

function App() {
  return (
    <>
      <div className="App">
        The Knight
      </div>
      <div>
        <Square black>
          <Knight />
        </Square>
      </div></>
  );
}

export default App;
