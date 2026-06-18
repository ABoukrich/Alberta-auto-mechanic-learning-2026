import { Award, BookOpen, CheckCircle, TrendingUp, Target, ChevronRight, BarChart3 } from 'lucide-react';
import { courses, getTotalProgress, getCourseProgress } from '../data/courses';
import { User, UserProgress } from '../types';

interface DashboardProps {
  user: User;
  userProgress: UserProgress;
  onViewChange: (view: string, data?: unknown) => void;
}

export function Dashboard({ user, userProgress, onViewChange }: DashboardProps) {
  const totalProgress = getTotalProgress(userProgress.completedLessons);

  const totalQuizzes = userProgress.quizResults.length;
  const totalQuestions = userProgress.quizResults.reduce((sum, r) => sum + r.totalQuestions, 0);
  const totalCorrect = userProgress.quizResults.reduce((sum, r) => sum + r.score, 0);
  const avgScore = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const passedQuizzes = userProgress.quizResults.filter(r => r.score >= r.totalQuestions * 0.7).length;

  const levelProgress = {
    '10': {
      completed: courses.filter(c => c.level === '10').reduce((sum, c) => sum + c.lessons.filter(l => userProgress.completedLessons.includes(l.id)).length, 0),
      total: courses.filter(c => c.level === '10').reduce((sum, c) => sum + c.lessons.length, 0),
    },
    '20': {
      completed: courses.filter(c => c.level === '20').reduce((sum, c) => sum + c.lessons.filter(l => userProgress.completedLessons.includes(l.id)).length, 0),
      total: courses.filter(c => c.level === '20').reduce((sum, c) => sum + c.lessons.length, 0),
    },
    '30': {
      completed: courses.filter(c => c.level === '30').reduce((sum, c) => sum + c.lessons.filter(l => userProgress.completedLessons.includes(l.id)).length, 0),
      total: courses.filter(c => c.level === '30').reduce((sum, c) => sum + c.lessons.length, 0),
    },
  };

  const incompleteCourses = courses
    .filter(c => {
      const progress = getCourseProgress(c.id, userProgress.completedLessons);
      return progress.percentage > 0 && progress.percentage < 100;
    })
    .slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-secondary-900">Welcome back, {user.name.split(' ')[0]}!</h1>
          <p className="text-secondary-500 mt-1">Track your progress and continue learning</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary-100"><BookOpen className="w-5 h-5 text-primary-600" /></div>
          </div>
          <p className="text-2xl font-display font-bold text-secondary-900">{totalProgress.completed}/{totalProgress.total}</p>
          <p className="text-sm text-secondary-500">Lessons Completed</p>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-success-100"><CheckCircle className="w-5 h-5 text-success-600" /></div>
          </div>
          <p className="text-2xl font-display font-bold text-secondary-900">{totalProgress.percentage}%</p>
          <p className="text-sm text-secondary-500">Overall Progress</p>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-accent-100"><Award className="w-5 h-5 text-accent-600" /></div>
          </div>
          <p className="text-2xl font-display font-bold text-secondary-900">{totalQuizzes}</p>
          <p className="text-sm text-secondary-500">Quizzes Passed</p>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-warning-100"><Target className="w-5 h-5 text-warning-600" /></div>
          </div>
          <p className="text-2xl font-display font-bold text-secondary-900">{avgScore}%</p>
          <p className="text-sm text-secondary-500">Avg Quiz Score</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="font-display font-bold text-lg text-secondary-900 mb-4">Course Progress</h2>
            <div className="space-y-4">
              {(['10', '20', '30'] as const).map((level) => (
                <div key={level}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-secondary-700">
                      Mechanics {level} - {level === '10' ? 'Foundation' : level === '20' ? 'Intermediate' : 'Advanced'}
                    </span>
                    <span className="text-sm text-secondary-500">{levelProgress[level].completed}/{levelProgress[level].total} lessons</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${
                        level === '10' ? 'bg-gradient-to-r from-success-500 to-success-400' :
                        level === '20' ? 'bg-gradient-to-r from-primary-500 to-primary-400' :
                        'bg-gradient-to-r from-accent-500 to-accent-400'
                      }`}
                      style={{ width: `${levelProgress[level].total > 0 ? Math.round((levelProgress[level].completed / levelProgress[level].total) * 100) : 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {incompleteCourses.length > 0 && (
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-lg text-secondary-900">Continue Learning</h2>
                <button onClick={() => onViewChange('courses')} className="text-sm text-primary-600 hover:text-primary-700 font-medium">View All</button>
              </div>

              <div className="space-y-3">
                {incompleteCourses.map((course) => {
                  const progress = getCourseProgress(course.id, userProgress.completedLessons);

                  return (
                    <div key={course.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary-50 cursor-pointer transition-colors" onClick={() => onViewChange('course', { courseId: course.id })}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        course.level === '10' ? 'bg-success-100 text-success-600' :
                        course.level === '20' ? 'bg-primary-100 text-primary-600' : 'bg-accent-100 text-accent-600'
                      }`}>
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-secondary-900 truncate">{course.title}</h3>
                        <p className="text-sm text-secondary-500">{progress.percentage}% complete</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-secondary-400" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="font-display font-bold text-lg text-secondary-900 mb-4">Quiz Performance</h2>

            <div className="text-center py-4">
              <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-3 ${
                avgScore >= 80 ? 'bg-success-100' : avgScore >= 60 ? 'bg-primary-100' : 'bg-warning-100'
              }`}>
                <span className={`text-3xl font-display font-bold ${
                  avgScore >= 80 ? 'text-success-600' : avgScore >= 60 ? 'text-primary-600' : 'text-warning-600'
                }`}>{avgScore}%</span>
              </div>
              <p className="text-secondary-600">Average Score</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="text-center p-3 bg-secondary-50 rounded-lg">
                <p className="text-xl font-bold text-secondary-900">{passedQuizzes}</p>
                <p className="text-xs text-secondary-500">Quizzes Passed</p>
              </div>
              <div className="text-center p-3 bg-secondary-50 rounded-lg">
                <p className="text-xl font-bold text-secondary-900">{totalQuizzes}</p>
                <p className="text-xs text-secondary-500">Total Attempts</p>
              </div>
            </div>
          </div>

          {totalProgress.percentage < 100 && totalProgress.percentage > 0 && (
            <div className="card p-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <BarChart3 className="w-8 h-8 mb-3 text-primary-200" />
              <h3 className="font-display font-bold text-lg mb-2">Keep Going!</h3>
              <p className="text-primary-100 text-sm">
                You have completed {totalProgress.completed} lessons. {totalProgress.total - totalProgress.completed} more to go!
              </p>
              <button onClick={() => onViewChange('courses')} className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg font-medium transition-colors">
                Continue Learning
              </button>
            </div>
          )}

          {totalProgress.percentage === 100 && (
            <div className="card p-6 bg-gradient-to-br from-success-500 to-success-600 text-white">
              <Award className="w-8 h-8 mb-3 text-success-200" />
              <h3 className="font-display font-bold text-lg mb-2">Congratulations!</h3>
              <p className="text-success-100 text-sm">You have completed all lessons. Great job on your dedication to learning!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
