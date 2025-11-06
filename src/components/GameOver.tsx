import React from 'react';
import { GameStats, GameMode, Difficulty } from '../types/game';
import { getHighScore } from '../utils/gameLogic';

interface GameOverProps {
  stats: GameStats;
  mode: GameMode;
  difficulty: Difficulty;
  onRestart: (mode: GameMode, difficulty: Difficulty) => void;
  onReturnToMenu: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({
  stats,
  mode,
  difficulty,
  onRestart,
  onReturnToMenu,
}) => {
  const accuracy = stats.totalQuestions > 0
    ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100)
    : 0;
  const highScore = getHighScore();
  const isNewHighScore = stats.score === highScore && stats.score > 0;

  const getModeText = (m: GameMode): string => {
    switch (m) {
      case 'multiplication': return '곱셈';
      case 'division': return '나눗셈';
      case 'mixed': return '혼합';
    }
  };

  const getDifficultyText = (d: Difficulty): string => {
    switch (d) {
      case 'easy': return '쉬움';
      case 'normal': return '보통';
      case 'hard': return '어려움';
    }
  };

  return (
    <div className="game-over">
      <h1 className="game-over-title">게임 종료!</h1>
      
      {isNewHighScore && (
        <div className="new-high-score">
          🎉 새로운 최고 점수! 🎉
        </div>
      )}

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">게임 모드:</span>
          <span className="stat-value">{getModeText(mode)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">난이도:</span>
          <span className="stat-value">{getDifficultyText(difficulty)}</span>
        </div>
        <div className="stat-item large">
          <span className="stat-label">최종 점수:</span>
          <span className="stat-value">{stats.score}점</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">정답률:</span>
          <span className="stat-value">
            {accuracy}% ({stats.correctAnswers}/{stats.totalQuestions})
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">최고 콤보:</span>
          <span className="stat-value">x{stats.maxCombo}</span>
        </div>
      </div>

      {stats.wrongAnswers.length > 0 && (
        <div className="wrong-answers">
          <h3>틀린 문제</h3>
          <ul>
            {stats.wrongAnswers.slice(0, 5).map((wrong, index) => (
              <li key={index}>
                {wrong.problem} = {wrong.correctAnswer} 
                <span className="user-wrong"> (입력: {wrong.userAnswer})</span>
              </li>
            ))}
            {stats.wrongAnswers.length > 5 && (
              <li className="more-items">
                외 {stats.wrongAnswers.length - 5}개...
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="button-group">
        <button
          className="restart-button"
          onClick={() => onRestart(mode, difficulty)}
        >
          🔄 다시 하기
        </button>
        <button
          className="menu-button"
          onClick={onReturnToMenu}
        >
          🏠 메인 메뉴
        </button>
      </div>
    </div>
  );
};


