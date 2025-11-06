import { GameMode, Difficulty, MathProblem, DifficultyConfig } from '../types/game';

// 난이도별 설정
export const DIFFICULTY_CONFIGS: Record<Difficulty, DifficultyConfig> = {
  easy: {
    speed: 0.5,
    spawnInterval: 3000,
    multiplicationTables: [2, 3, 5],
    divisionDivisors: [2, 5],
  },
  normal: {
    speed: 1,
    spawnInterval: 2000,
    multiplicationTables: [2, 3, 4, 5],
    divisionDivisors: [2, 3, 4, 5],
  },
  hard: {
    speed: 1.5,
    spawnInterval: 1500,
    multiplicationTables: [2, 3, 4, 5, 6, 7, 8, 9],
    divisionDivisors: [2, 3, 4, 5, 6, 7, 8, 9],
  },
};

// 곱셈 문제 생성
export const generateMultiplicationProblem = (
  tables: number[],
  speed: number,
  gameWidth: number
): MathProblem => {
  const table = tables[Math.floor(Math.random() * tables.length)];
  const multiplier = Math.floor(Math.random() * 9) + 1;
  const answer = table * multiplier;

  return {
    id: `${Date.now()}-${Math.random()}`,
    num1: table,
    num2: multiplier,
    operator: '×',
    answer,
    x: Math.random() * (gameWidth - 150) + 50,
    y: -50,
    speed,
  };
};

// 나눗셈 문제 생성
export const generateDivisionProblem = (
  divisors: number[],
  speed: number,
  gameWidth: number
): MathProblem => {
  const divisor = divisors[Math.floor(Math.random() * divisors.length)];
  const quotient = Math.floor(Math.random() * 9) + 1;
  const dividend = divisor * quotient;

  return {
    id: `${Date.now()}-${Math.random()}`,
    num1: dividend,
    num2: divisor,
    operator: '÷',
    answer: quotient,
    x: Math.random() * (gameWidth - 150) + 50,
    y: -50,
    speed,
  };
};

// 문제 생성 (모드에 따라)
export const generateProblem = (
  mode: GameMode,
  difficulty: Difficulty,
  gameWidth: number
): MathProblem => {
  const config = DIFFICULTY_CONFIGS[difficulty];

  if (mode === 'multiplication') {
    return generateMultiplicationProblem(config.multiplicationTables, config.speed, gameWidth);
  } else if (mode === 'division') {
    return generateDivisionProblem(config.divisionDivisors, config.speed, gameWidth);
  } else {
    // 혼합 모드: 랜덤으로 선택
    const isMult = Math.random() > 0.5;
    return isMult
      ? generateMultiplicationProblem(config.multiplicationTables, config.speed, gameWidth)
      : generateDivisionProblem(config.divisionDivisors, config.speed, gameWidth);
  }
};

// 콤보 배율 계산
export const getComboMultiplier = (combo: number): number => {
  if (combo >= 10) return 3.0;
  if (combo >= 8) return 2.5;
  if (combo >= 5) return 2.0;
  if (combo >= 3) return 1.5;
  return 1.0;
};

// 콤보 메시지 가져오기
export const getComboMessage = (combo: number): string => {
  if (combo >= 10) return 'Amazing!';
  if (combo >= 8) return 'Excellent!';
  if (combo >= 5) return 'Great!';
  if (combo >= 3) return 'Good!';
  return '';
};

// 점수 계산
export const calculateScore = (combo: number, baseScore: number = 10): number => {
  const multiplier = getComboMultiplier(combo);
  return Math.floor(baseScore * multiplier);
};

// LocalStorage 키
const HIGH_SCORE_KEY = 'mathRainGame_highScore';

// 최고 점수 저장
export const saveHighScore = (score: number): void => {
  const currentHighScore = getHighScore();
  if (score > currentHighScore) {
    localStorage.setItem(HIGH_SCORE_KEY, score.toString());
  }
};

// 최고 점수 가져오기
export const getHighScore = (): number => {
  const score = localStorage.getItem(HIGH_SCORE_KEY);
  return score ? parseInt(score, 10) : 0;
};

