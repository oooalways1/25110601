import React, { useEffect, useRef } from 'react';
import { MathProblem, GameStats } from '../types/game';
import { getComboMessage } from '../utils/gameLogic';

interface GameScreenProps {
  problems: MathProblem[];
  stats: GameStats;
  userInput: string;
  shake: boolean;
  gameWidth: number;
  gameHeight: number;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  problems,
  stats,
  userInput,
  shake,
  gameWidth,
  gameHeight,
  onInputChange,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 게임 시작 시 입력창에 포커스
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const comboMessage = getComboMessage(stats.combo);

  return (
    <div className="game-screen">
      {/* 상태 바 */}
      <div className="status-bar">
        <div className="lives">
          {Array.from({ length: stats.lives }).map((_, i) => (
            <span key={i} className="heart">❤️</span>
          ))}
          {Array.from({ length: 3 - stats.lives }).map((_, i) => (
            <span key={i} className="heart-empty">🖤</span>
          ))}
        </div>
        <div className="score">점수: {stats.score}</div>
        <div className="combo">
          {stats.combo > 0 && `콤보: x${stats.combo}`}
        </div>
      </div>

      {/* 게임 영역 */}
      <div
        className="game-area"
        style={{
          width: `${gameWidth}px`,
          height: `${gameHeight}px`,
        }}
      >
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="problem"
            style={{
              left: `${problem.x}px`,
              top: `${problem.y}px`,
            }}
          >
            {problem.num1} {problem.operator} {problem.num2} = ?
          </div>
        ))}

        {/* 콤보 메시지 */}
        {comboMessage && (
          <div className="combo-message">
            {comboMessage}
          </div>
        )}
      </div>

      {/* 입력 영역 */}
      <div className={`input-area ${shake ? 'shake' : ''}`}>
        <label htmlFor="answer-input">답 입력:</label>
        <input
          ref={inputRef}
          id="answer-input"
          type="number"
          value={userInput}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="answer-input"
          placeholder="답을 입력하세요"
        />
        <button onClick={onSubmit} className="submit-button">
          제출
        </button>
      </div>
    </div>
  );
};


