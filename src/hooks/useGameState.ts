import { useState, useEffect, useCallback, useRef } from 'react';
import {
  GameMode,
  Difficulty,
  GameState,
  MathProblem,
  GameStats,
  WrongAnswer,
} from '../types/game';
import {
  generateProblem,
  calculateScore,
  DIFFICULTY_CONFIGS,
  saveHighScore,
} from '../utils/gameLogic';

const INITIAL_LIVES = 3;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [mode, setMode] = useState<GameMode>('multiplication');
  const [difficulty, setDifficulty] = useState<Difficulty>('normal');
  const [problems, setProblems] = useState<MathProblem[]>([]);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    lives: INITIAL_LIVES,
    combo: 0,
    maxCombo: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: [],
  });
  const [userInput, setUserInput] = useState('');
  const [shake, setShake] = useState(false);

  const animationFrameRef = useRef<number>();
  const lastSpawnTimeRef = useRef<number>(0);

  // 게임 시작
  const startGame = useCallback((selectedMode: GameMode, selectedDifficulty: Difficulty) => {
    setMode(selectedMode);
    setDifficulty(selectedDifficulty);
    setGameState('playing');
    setProblems([]);
    setStats({
      score: 0,
      lives: INITIAL_LIVES,
      combo: 0,
      maxCombo: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: [],
    });
    setUserInput('');
    lastSpawnTimeRef.current = Date.now();
  }, []);

  // 메인 메뉴로 돌아가기
  const returnToMenu = useCallback(() => {
    setGameState('menu');
    setProblems([]);
    setUserInput('');
  }, []);

  // 문제 추가
  const addProblem = useCallback(() => {
    const newProblem = generateProblem(mode, difficulty, GAME_WIDTH);
    setProblems((prev) => [...prev, newProblem]);
  }, [mode, difficulty]);

  // 문제 업데이트 (낙하)
  const updateProblems = useCallback(() => {
    setProblems((prev) => {
      const updated = prev.map((problem) => ({
        ...problem,
        y: problem.y + problem.speed,
      }));

      // 화면 밖으로 나간 문제 처리 (생명 감소)
      const remaining = updated.filter((problem) => {
        if (problem.y > GAME_HEIGHT) {
          setStats((prevStats) => {
            const newLives = prevStats.lives - 1;
            if (newLives <= 0) {
              setGameState('gameover');
              saveHighScore(prevStats.score);
            }
            return {
              ...prevStats,
              lives: newLives,
              combo: 0, // 콤보 초기화
            };
          });
          return false;
        }
        return true;
      });

      return remaining;
    });
  }, []);

  // 답 제출
  const submitAnswer = useCallback(() => {
    const answer = parseInt(userInput, 10);
    if (isNaN(answer) || problems.length === 0) return;

    // 정답인 문제 찾기
    const correctProblemIndex = problems.findIndex((p) => p.answer === answer);

    if (correctProblemIndex !== -1) {
      // 정답!
      const problem = problems[correctProblemIndex];
      
      setStats((prev) => {
        const newCombo = prev.combo + 1;
        const newMaxCombo = Math.max(prev.maxCombo, newCombo);
        const earnedScore = calculateScore(newCombo);

        return {
          ...prev,
          score: prev.score + earnedScore,
          combo: newCombo,
          maxCombo: newMaxCombo,
          totalQuestions: prev.totalQuestions + 1,
          correctAnswers: prev.correctAnswers + 1,
        };
      });

      // 문제 제거
      setProblems((prev) => prev.filter((_, index) => index !== correctProblemIndex));
      setUserInput('');
    } else {
      // 오답
      setShake(true);
      setTimeout(() => setShake(false), 500);

      // 가장 가까운 문제를 틀린 것으로 간주 (선택적)
      if (problems.length > 0) {
        const closestProblem = problems.reduce((closest, current) => 
          current.y > closest.y ? current : closest
        );

        setStats((prev) => ({
          ...prev,
          combo: 0, // 콤보 초기화
          totalQuestions: prev.totalQuestions + 1,
          wrongAnswers: [
            ...prev.wrongAnswers,
            {
              problem: `${closestProblem.num1} ${closestProblem.operator} ${closestProblem.num2}`,
              correctAnswer: closestProblem.answer,
              userAnswer: answer,
            },
          ],
        }));
      }
    }
  }, [userInput, problems]);

  // 게임 루프
  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const config = DIFFICULTY_CONFIGS[difficulty];

    const gameLoop = () => {
      updateProblems();

      // 새 문제 생성
      const now = Date.now();
      if (now - lastSpawnTimeRef.current > config.spawnInterval) {
        addProblem();
        lastSpawnTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameState, difficulty, updateProblems, addProblem]);

  return {
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
  };
};

