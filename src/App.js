import './App.css';
import Board from "./components/Board"


function App() {
  return (
    <>
      <div className="App">
        The Knight
      </div>
      <div>
        <Board knightPosition={[0, 0]} />
      </div></>
  );
}

export default App;
