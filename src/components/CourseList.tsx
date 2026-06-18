import { useState } from 'react';
import { ChevronRight, BookOpen, Wrench, Cog, Zap, CheckCircle } from 'lucide-react';
import { courses, getCourseProgress } from '../data/courses';
import { UserProgress } from '../types';

interface CourseListProps {
  onViewChange: (view: string, data?: unknown) => void;
  userProgress: UserProgress;
  initialLevel?: '10' | '20' | '30';
}

export function CourseList({ onViewChange, userProgress, initialLevel }: CourseListProps) {
  const [selectedLevel, setSelectedLevel] = useState<'10' | '20' | '30' | 'all'>(initialLevel || 'all');

  const levels = [
    { id: 'all', label: 'All Courses', count: courses.length },
    { id: '10' as const, label: 'Mechanics 10', count: courses.filter(c => c.level === '10').length },
    { id: '20' as const, label: 'Mechanics 20', count: courses.filter(c => c.level === '20').length },
    { id: '30' as const, label: 'Mechanics 30', count: courses.filter(c => c.level === '30').length },
  ];

  const filteredCourses = selectedLevel === 'all' ? courses : courses.filter(c => c.level === selectedLevel);

  const levelInfo = {
    '10': { icon: Wrench, color: 'success', label: 'Mechanics 10 - Foundation' },
    '20': { icon: Cog, color: 'primary', label: 'Mechanics 20 - Intermediate' },
    '30': { icon: Zap, color: 'accent', label: 'Mechanics 30 - Advanced' },
  };

  const colorClasses = {
    success: { bg: 'bg-success-100', text: 'text-success-700' },
    primary: { bg: 'bg-primary-100', text: 'text-primary-700' },
    accent: { bg: 'bg-accent-100', text: 'text-accent-700' },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-secondary-900">All Courses</h1>
        <p className="text-secondary-500 mt-1">Explore our comprehensive automotive curriculum</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id as 'all' | '10' | '20' | '30')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedLevel === level.id
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-600 border border-secondary-200 hover:border-primary-300'
            }`}
          >
            {level.label}
            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded ${selectedLevel === level.id ? 'bg-white/20' : 'bg-secondary-100'}`}>
              {level.count}
            </span>
          </button>
        ))}
      </div>

      {(['10', '20', '30'] as const).map((level) => {
        const levelCourses = filteredCourses.filter(c => c.level === level);
        if (levelCourses.length === 0) return null;

        const info = levelInfo[level];
        const Icon = info.icon;
        const colors = colorClasses[info.color as keyof typeof colorClasses];

        return (
          <div key={level} className="space-y-4">
            <div className="flex items-center gap-3 pt-4 first:pt-0">
              <div className={`p-2 rounded-lg ${colors.bg}`}>
                <Icon className={`w-5 h-5 ${colors.text}`} />
              </div>
              <div>
                <h2 className="font-display font-bold text-secondary-900">{info.label}</h2>
                <p className="text-sm text-secondary-500">
                  {level === '10' && '5 Credits - Building fundamentals'}
                  {level === '20' && '5 Credits - Developing expertise'}
                  {level === '30' && '5 Credits - Mastering advanced systems'}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {levelCourses.map((course) => {
                const progress = getCourseProgress(course.id, userProgress.completedLessons);

                return (
                  <div key={course.id} className="card-hover cursor-pointer group" onClick={() => onViewChange('course', { courseId: course.id })}>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-xs font-semibold ${colors.bg} ${colors.text} px-2 py-0.5 rounded`}>
                          {course.code}
                        </span>
                        {progress.percentage === 100 && <CheckCircle className="w-5 h-5 text-success-500" />}
                      </div>

                      <h3 className="font-display font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {course.title}
                      </h3>

                      <p className="text-sm text-secondary-500 line-clamp-2 mb-3">{course.description}</p>

                      <div className="flex items-center gap-4 text-xs text-secondary-500 mb-3">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          {course.lessons.length} Lessons
                        </span>
                        <span>{course.credits} Credits</span>
                      </div>

                      {progress.percentage > 0 && (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-secondary-600">Progress</span>
                            <span className="font-medium text-secondary-900">{progress.percentage}%</span>
                          </div>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress.percentage}%` }} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
