import { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CourseList } from './components/CourseList';
import { CourseDetail } from './components/CourseDetail';
import { LessonDetail } from './components/LessonDetail';
import { Quiz } from './components/Quiz';
import { Dashboard } from './components/Dashboard';
import { Auth } from './components/Auth';
import { useLocalStorage } from './hooks/useLocalStorage';
import { User, UserProgress, View, QuizResult } from './types';

type ViewState = {
  current: View;
  data?: { courseId?: string; lessonId?: string; level?: '10' | '20' | '30' };
};

function generateId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  const [user, setUser] = useLocalStorage<User | null>('mechanics_user', null);
  const [userProgress, setUserProgress] = useLocalStorage<UserProgress>('mechanics_progress', {
    completedLessons: [],
    quizResults: [],
  });
  const [viewState, setViewState] = useState<ViewState>({ current: 'home' });

  const handleViewChange = (view: string, data?: unknown) => {
    setViewState({ current: view as View, data: data as ViewState['data'] });
    window.scrollTo(0, 0);
  };

  const handleLogin = async (email: string, _password: string): Promise<boolean> => {
    const storedUsers = JSON.parse(localStorage.getItem('mechanics_users') || '[]');
    const existingUser = storedUsers.find((u: User & { password: string }) => u.email === email);

    if (existingUser) {
      setUser({ id: existingUser.id, email: existingUser.email, name: existingUser.name, createdAt: existingUser.createdAt });
      const storedProgress = localStorage.getItem(`mechanics_progress_${existingUser.id}`);
      if (storedProgress) setUserProgress(JSON.parse(storedProgress));
      return true;
    }
    return false;
  };

  const handleRegister = async (name: string, email: string, password: string): Promise<boolean> => {
    const storedUsers = JSON.parse(localStorage.getItem('mechanics_users') || '[]');
    const exists = storedUsers.some((u: User) => u.email === email);
    if (exists) return false;

    const newUser = { id: generateId(), email, name, password, createdAt: new Date().toISOString() };
    storedUsers.push(newUser);
    localStorage.setItem('mechanics_users', JSON.stringify(storedUsers));

    setUser({ id: newUser.id, email: newUser.email, name: newUser.name, createdAt: newUser.createdAt });
    return true;
  };

  const handleLogout = () => {
    if (user) localStorage.setItem(`mechanics_progress_${user.id}`, JSON.stringify(userProgress));
    setUser(null);
    setViewState({ current: 'home' });
  };

  const handleProgressUpdate = (lessonId: string, completed?: boolean) => {
    if (!completed) return;
    setUserProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId) ? prev.completedLessons : [...prev.completedLessons, lessonId],
    }));
  };

  const handleQuizComplete = (result: QuizResult) => {
    setUserProgress(prev => {
      const existingIndex = prev.quizResults.findIndex(q => q.lessonId === result.lessonId);
      const newResults = [...prev.quizResults];

      if (existingIndex >= 0) {
        if (result.score > newResults[existingIndex].score) newResults[existingIndex] = result;
      } else {
        newResults.push(result);
      }

      const passed = result.score >= result.totalQuestions * 0.7;
      const newCompleted = passed && !prev.completedLessons.includes(result.lessonId)
        ? [...prev.completedLessons, result.lessonId]
        : prev.completedLessons;

      return { completedLessons: newCompleted, quizResults: newResults };
    });
  };

  const renderView = () => {
    switch (viewState.current) {
      case 'home':
        return <Home onViewChange={handleViewChange} user={user} />;
      case 'courses':
        return <CourseList onViewChange={handleViewChange} userProgress={userProgress} initialLevel={viewState.data?.level} />;
      case 'course':
        return <CourseDetail courseId={viewState.data?.courseId || ''} onViewChange={handleViewChange} userProgress={userProgress} />;
      case 'lesson':
        return <LessonDetail lessonId={viewState.data?.lessonId || ''} onViewChange={handleViewChange} userProgress={userProgress} onProgressUpdate={handleProgressUpdate} />;
      case 'quiz':
        return <Quiz lessonId={viewState.data?.lessonId || ''} onBack={() => handleViewChange('lesson', { lessonId: viewState.data?.lessonId })} onComplete={handleQuizComplete} />;
      case 'dashboard':
        return user ? <Dashboard user={user} userProgress={userProgress} onViewChange={handleViewChange} /> : <Auth mode="login" onViewChange={handleViewChange} onLogin={handleLogin} onRegister={handleRegister} />;
      case 'login':
        return <Auth mode="login" onViewChange={handleViewChange} onLogin={handleLogin} onRegister={handleRegister} />;
      case 'register':
        return <Auth mode="register" onViewChange={handleViewChange} onLogin={handleLogin} onRegister={handleRegister} />;
      default:
        return <Home onViewChange={handleViewChange} user={user} />;
    }
  };

  return (
    <Layout currentView={viewState.current} onViewChange={handleViewChange} user={user} onLogout={handleLogout}>
      {renderView()}
    </Layout>
  );
}

export default App;
