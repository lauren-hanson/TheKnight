
import Board from "./components/board/Board"


function App({black}) {
    return (
        <>
            <Board knightPosition={[3, 4]} black={black}/>
        </>
    );
}

export default App;
