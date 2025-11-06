// 게임 모드
export type GameMode = 'multiplication' | 'division' | 'mixed';

// 난이도
export type Difficulty = 'easy' | 'normal' | 'hard';

// 게임 상태
export type GameState = 'menu' | 'playing' | 'gameover';

// 수학 문제
export interface MathProblem {
  id: string;
  num1: number;
  num2: number;
  operator: '×' | '÷';
  answer: number;
  x: number;
  y: number;
  speed: number;
}

// 틀린 문제 기록
export interface WrongAnswer {
  problem: string;
  correctAnswer: number;
  userAnswer: number;
}

// 게임 설정
export interface GameConfig {
  mode: GameMode;
  difficulty: Difficulty;
}

// 게임 통계
export interface GameStats {
  score: number;
  lives: number;
  combo: number;
  maxCombo: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: WrongAnswer[];
}

// 난이도별 설정
export interface DifficultyConfig {
  speed: number; // 낙하 속도
  spawnInterval: number; // 문제 생성 간격 (ms)
  multiplicationTables: number[]; // 곱셈 구구단
  divisionDivisors: number[]; // 나눗셈 제수
}


