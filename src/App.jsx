import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
function App() {
  console.log("Hello!");
  return (
    <>
      <Header />
      {/* <p>Coming soon...</p> */}
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          Game Board
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
