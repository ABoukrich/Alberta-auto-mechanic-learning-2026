import { ChevronLeft, ChevronRight, BookOpen, Play, CheckCircle, Award } from 'lucide-react';
import { getCourseById, getCourseProgress } from '../data/courses';
import { UserProgress } from '../types';

interface CourseDetailProps {
  courseId: string;
  onViewChange: (view: string, data?: unknown) => void;
  userProgress: UserProgress;
}

export function CourseDetail({ courseId, onViewChange, userProgress }: CourseDetailProps) {
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-500">Course not found</p>
        <button onClick={() => onViewChange('courses')} className="btn-primary mt-4">Back to Courses</button>
      </div>
    );
  }

  const progress = getCourseProgress(courseId, userProgress.completedLessons);
  const levelColors = {
    '10': { bg: 'bg-success-100', text: 'text-success-700', gradient: 'from-success-600 to-success-500' },
    '20': { bg: 'bg-primary-100', text: 'text-primary-700', gradient: 'from-primary-600 to-primary-500' },
    '30': { bg: 'bg-accent-100', text: 'text-accent-700', gradient: 'from-accent-600 to-accent-500' },
  };
  const colors = levelColors[course.level as keyof typeof levelColors];
  const startLesson = course.lessons.find(l => !userProgress.completedLessons.includes(l.id))?.id || course.lessons[0]?.id;

  return (
    <div className="space-y-6">
      <button onClick={() => onViewChange('courses')} className="flex items-center gap-1 text-secondary-600 hover:text-secondary-900 transition-colors">
        <ChevronLeft className="w-4 h-4" />
        Back to Courses
      </button>

      <div className="card overflow-hidden">
        {course.image ? (
          <div className="relative h-48 sm:h-64">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-start justify-between mb-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${colors.bg} ${colors.text}`}>{course.code}</span>
                <span className="text-sm text-white/80">{course.credits} Credits</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">{course.title}</h1>
              <p className="text-white/80">{course.description}</p>
            </div>
          </div>
        ) : (
          <div className={`bg-gradient-to-br ${colors.gradient} text-white p-6 sm:p-8`}>
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-semibold px-2 py-1 rounded bg-white/20">{course.code}</span>
              <span className="text-sm text-white/80">{course.credits} Credits</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold mb-2">{course.title}</h1>
            <p className="text-white/80">{course.description}</p>
          </div>
        )}

        <div className="p-4 sm:p-6 border-b border-secondary-200">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary-400" />
              <span className="text-secondary-700">{course.lessons.length} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-secondary-400" />
              <span className="text-secondary-700">{course.lessons.length} Quizzes</span>
            </div>
            {progress.percentage > 0 && (
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success-500" />
                <span className="text-secondary-700">{progress.completed}/{progress.total} Complete</span>
              </div>
            )}
          </div>
        </div>

        {progress.percentage > 0 && (
          <div className="px-6 py-4 bg-secondary-50">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-secondary-600">Course Progress</span>
              <span className="font-medium text-secondary-900">{progress.percentage}%</span>
            </div>
            <div className="progress-bar h-3">
              <div className="progress-fill" style={{ width: `${progress.percentage}%` }} />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h2 className="font-display font-bold text-xl text-secondary-900">Lessons</h2>
        {course.lessons.map((lesson, index) => {
          const isCompleted = userProgress.completedLessons.includes(lesson.id);
          const quizResult = userProgress.quizResults.find(q => q.lessonId === lesson.id);

          return (
            <div key={lesson.id} className="card cursor-pointer hover:border-primary-300" onClick={() => onViewChange('lesson', { lessonId: lesson.id })}>
              <div className="p-4 sm:p-5">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                    isCompleted ? 'bg-success-100 text-success-600' : colors.bg + ' ' + colors.text
                  }`}>
                    {isCompleted ? <CheckCircle className="w-5 h-5" /> : <span className="font-bold">{index + 1}</span>}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-secondary-900">{lesson.title}</h3>
                        <p className="text-sm text-secondary-500 mt-0.5">{lesson.quizQuestions.length} quiz questions</p>
                      </div>
                      {quizResult && (
                        <div className="flex-shrink-0 text-right">
                          <div className="text-sm font-medium text-secondary-900">{quizResult.score}/{quizResult.totalQuestions}</div>
                          <div className="text-xs text-secondary-500">{Math.round((quizResult.score / quizResult.totalQuestions) * 100)}%</div>
                        </div>
                      )}
                    </div>

                    {quizResult && (
                      <div className="mt-2 flex items-center gap-2">
                        {quizResult.score === quizResult.totalQuestions ? (
                          <span className="text-xs bg-success-100 text-success-700 px-2 py-0.5 rounded font-medium">Perfect Score!</span>
                        ) : quizResult.score >= quizResult.totalQuestions * 0.7 ? (
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded font-medium">Passed</span>
                        ) : (
                          <span className="text-xs bg-warning-100 text-warning-700 px-2 py-0.5 rounded font-medium">Needs Review</span>
                        )}
                      </div>
                    )}
                  </div>

                  <ChevronRight className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {startLesson && progress.percentage < 100 && (
        <button onClick={() => onViewChange('lesson', { lessonId: startLesson })} className="w-full btn-primary py-4 text-lg">
          <Play className="w-5 h-5 mr-2" />
          {progress.percentage === 0 ? 'Start Learning' : 'Continue Learning'}
        </button>
      )}
    </div>
  );
}
