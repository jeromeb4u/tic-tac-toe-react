import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {
  // console.log("Hello!");
  return (
    <>
      <Header />
      {/* <p>Coming soon...</p> */}
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
          <GameBoard />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
