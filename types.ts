export interface User {
  id: number;
  name: string;
  avatar: string;
  points: number;
  level: number;
  xp: number;
  xpToNextLevel: number;
  badges: Badge[];
}

export interface Badge {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  points: number;
  category: 'Reciclaje' | 'Energía' | 'Agua' | 'Comunidad';
  isCompleted: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  points: number;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  category: 'Reciclaje' | 'Energía Renovable' | 'Biodiversidad' | 'Cambio Climático';
  imageUrl: string;
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    points: number;
}

export type Page = 'home' | 'progress' | 'challenges' | 'leaderboard' | 'library' | 'about' | 'quiz';