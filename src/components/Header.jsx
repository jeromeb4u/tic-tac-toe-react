import gameLogo from "../../public/game-logo.png";

export default function Header() {
  return (
    <>
      <header>
        <img src={gameLogo} alt="Hand drawn tic-tac-toe image" />
        <h1>React Tic-Tac-Toe</h1>
      </header>
    </>
  );
}
