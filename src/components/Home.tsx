import { BookOpen, Award, Users, ChevronRight, Wrench, Cog, Gauge, Zap } from 'lucide-react';
import { courses } from '../data/courses';
import { User } from '../types';

interface HomeProps {
  onViewChange: (view: string, data?: unknown) => void;
  user: User | null;
}

export function Home({ onViewChange, user }: HomeProps) {
  const totalLessons = courses.reduce((sum, c) => sum + c.lessons.length, 0);

  const features = [
    { icon: BookOpen, title: '15 Courses', description: 'Comprehensive curriculum from basic to advanced' },
    { icon: Users, title: `${totalLessons} Lessons`, description: 'Detailed content with real-world examples' },
    { icon: Award, title: `${totalLessons} Quizzes`, description: 'Test your knowledge after each lesson' },
    { icon: Gauge, title: 'Track Progress', description: 'Monitor your learning journey' },
  ];

  const levelIcons = { '10': Wrench, '20': Cog, '30': Zap };
  const levelColors = {
    '10': 'from-success-500 to-success-600',
    '20': 'from-primary-500 to-primary-600',
    '30': 'from-accent-500 to-accent-600',
  };

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white">
        <div className="relative px-6 py-12 sm:px-12 sm:py-20">
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">Master Automotive Technology</h1>
          <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl">
            From basic shop safety to advanced hybrid vehicle systems, build your expertise with our comprehensive interactive courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => onViewChange('courses')} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-lg">
              Start Learning
              <ChevronRight className="w-5 h-5" />
            </button>
            {!user && (
              <button onClick={() => onViewChange('register')} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700/30 text-white rounded-lg font-semibold hover:bg-primary-700/50 transition-all border border-white/20">
                Create Free Account
              </button>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900">{feature.title}</h3>
                <p className="text-sm text-secondary-500 mt-1">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary-900">Program Overview</h2>
            <p className="text-secondary-500">Three levels of automotive mastery</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {(['10', '20', '30'] as const).map((level) => {
            const levelCourses = courses.filter(c => c.level === level);
            const lessonCount = levelCourses.reduce((sum, c) => sum + c.lessons.length, 0);
            const Icon = levelIcons[level];

            return (
              <div key={level} className="card-hover overflow-hidden" onClick={() => onViewChange('courses', { level })}>
                <div className={`h-2 bg-gradient-to-r ${levelColors[level]}`}></div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${levelColors[level]} text-white mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-1">Mechanics {level}</h3>
                  <p className="text-sm text-secondary-500 mb-4">
                    {level === '10' && 'Build your foundation with safety, tools, and fundamentals'}
                    {level === '20' && 'Develop expertise in braking, steering, and electrical'}
                    {level === '30' && 'Master advanced systems and emerging technologies'}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary-600">{levelCourses.length} Courses</span>
                    <span className="text-secondary-600">{lessonCount} Lessons</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary-900">Featured Courses</h2>
            <p className="text-secondary-500">Essential courses to get started</p>
          </div>
          <button onClick={() => onViewChange('courses')} className="hidden sm:inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course) => (
            <div key={course.id} className="card-hover cursor-pointer" onClick={() => onViewChange('course', { courseId: course.id })}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    course.level === '10' ? 'bg-success-100 text-success-700' :
                    course.level === '20' ? 'bg-primary-100 text-primary-700' :
                    'bg-accent-100 text-accent-700'
                  }`}>
                    MEC {course.level}XX
                  </span>
                  <span className="text-xs text-secondary-500">{course.credits} Credits</span>
                </div>
                <h3 className="font-display font-bold text-secondary-900 mb-2">{course.title}</h3>
                <p className="text-sm text-secondary-500 line-clamp-2 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary-600">{course.lessons.length} Lessons</span>
                  <ChevronRight className="w-5 h-5 text-secondary-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {!user && (
        <section className="bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-secondary-300 mb-6 max-w-xl mx-auto">
            Create a free account to track your progress, save your quiz results, and earn certificates.
          </p>
          <button onClick={() => onViewChange('register')} className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all shadow-lg">
            Create Free Account
            <ChevronRight className="w-5 h-5" />
          </button>
        </section>
      )}
    </div>
  );
}
