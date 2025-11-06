import React from 'react';
import { useGameState } from './hooks/useGameState';
import { MainMenu } from './components/MainMenu';
import { GameScreen } from './components/GameScreen';
import { GameOver } from './components/GameOver';
import './App.css';

function App() {
  const {
    gameState,
    mode,
    difficulty,
    problems,
    stats,
    userInput,
    shake,
    setUserInput,
    startGame,
    returnToMenu,
    submitAnswer,
    GAME_WIDTH,
    GAME_HEIGHT,
  } = useGameState();

  return (
    <div className="App">
      {gameState === 'menu' && (
        <MainMenu onStartGame={startGame} />
      )}

      {gameState === 'playing' && (
        <GameScreen
          problems={problems}
          stats={stats}
          userInput={userInput}
          shake={shake}
          gameWidth={GAME_WIDTH}
          gameHeight={GAME_HEIGHT}
          onInputChange={setUserInput}
          onSubmit={submitAnswer}
        />
      )}

      {gameState === 'gameover' && (
        <GameOver
          stats={stats}
          mode={mode}
          difficulty={difficulty}
          onRestart={startGame}
          onReturnToMenu={returnToMenu}
        />
      )}
    </div>
  );
}

export default App;

