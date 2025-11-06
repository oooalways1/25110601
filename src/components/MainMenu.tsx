import React, { useState } from 'react';
import { GameMode, Difficulty } from '../types/game';
import { getHighScore } from '../utils/gameLogic';

interface MainMenuProps {
  onStartGame: (mode: GameMode, difficulty: Difficulty) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onStartGame }) => {
  const [selectedMode, setSelectedMode] = useState<GameMode>('multiplication');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('normal');
  const highScore = getHighScore();

  const handleStart = () => {
    onStartGame(selectedMode, selectedDifficulty);
  };

  return (
    <div className="main-menu">
      <h1 className="game-title">🌧️ 수학 산성비 게임 ⚡</h1>
      
      <div className="menu-section">
        <h2>게임 모드</h2>
        <div className="button-group">
          <button
            className={`mode-button ${selectedMode === 'multiplication' ? 'active' : ''}`}
            onClick={() => setSelectedMode('multiplication')}
          >
            ✖️ 곱셈 게임
          </button>
          <button
            className={`mode-button ${selectedMode === 'division' ? 'active' : ''}`}
            onClick={() => setSelectedMode('division')}
          >
            ➗ 나눗셈 게임
          </button>
          <button
            className={`mode-button ${selectedMode === 'mixed' ? 'active' : ''}`}
            onClick={() => setSelectedMode('mixed')}
          >
            🎲 혼합 게임
          </button>
        </div>
      </div>

      <div className="menu-section">
        <h2>난이도</h2>
        <div className="button-group">
          <button
            className={`difficulty-button easy ${selectedDifficulty === 'easy' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('easy')}
          >
            😊 쉬움
          </button>
          <button
            className={`difficulty-button normal ${selectedDifficulty === 'normal' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('normal')}
          >
            😐 보통
          </button>
          <button
            className={`difficulty-button hard ${selectedDifficulty === 'hard' ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty('hard')}
          >
            😤 어려움
          </button>
        </div>
      </div>

      <button className="start-button" onClick={handleStart}>
        🎮 게임 시작!
      </button>

      {highScore > 0 && (
        <div className="high-score">
          🏆 최고 점수: {highScore}점
        </div>
      )}

      <div className="instructions">
        <h3>게임 방법</h3>
        <ul>
          <li>떨어지는 문제의 답을 입력하세요</li>
          <li>엔터키를 눌러 정답을 제출하세요</li>
          <li>문제가 바닥에 닿으면 생명이 줄어듭니다</li>
          <li>연속으로 맞추면 콤보 보너스를 받습니다!</li>
        </ul>
      </div>
    </div>
  );
};

