export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface UserProgress {
  completedLessons: string[];
  quizResults: QuizResult[];
}

export interface QuizResult {
  lessonId: string;
  score: number;
  totalQuestions: number;
  answers: number[];
  completedAt: string;
}

export type View = 'home' | 'courses' | 'course' | 'lesson' | 'quiz' | 'dashboard' | 'login' | 'register';
