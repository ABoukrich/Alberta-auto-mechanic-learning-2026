import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Award, BookOpen, Play, X } from 'lucide-react';
import { getLessonById } from '../data/courses';
import { UserProgress } from '../types';

interface LessonDetailProps {
  lessonId: string;
  onViewChange: (view: string, data?: unknown) => void;
  userProgress: UserProgress;
  onProgressUpdate: (lessonId: string, completed?: boolean) => void;
}

export function LessonDetail({ lessonId, onViewChange, userProgress, onProgressUpdate }: LessonDetailProps) {
  const [activeSection, setActiveSection] = useState<string>('content');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const result = getLessonById(lessonId);

  if (!result) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-500">Lesson not found</p>
        <button onClick={() => onViewChange('courses')} className="btn-primary mt-4">Back to Courses</button>
      </div>
    );
  }

  const { lesson, course } = result;
  const isCompleted = userProgress.completedLessons.includes(lessonId);
  const quizResult = userProgress.quizResults.find(q => q.lessonId === lessonId);

  const parseContentWithMedia = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: JSX.Element[] = [];
    let listType: 'bullet' | 'decimal' | null = null;

    const flushList = (index: number) => {
      if (currentList.length > 0) {
        const ListTag = listType === 'decimal' ? 'ol' : 'ul';
        elements.push(
          <ListTag key={`list-${index}`} className={`${listType === 'decimal' ? 'list-decimal' : 'list-disc'} ml-6 mb-4 space-y-1`}>
            {currentList}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      // Check for media placeholders
      const mediaMatch = line.match(/\[MEDIA:(\d+)\]/);
      if (mediaMatch) {
        flushList(index);
        const mediaIndex = parseInt(mediaMatch[1]);
        if (lesson.media && lesson.media[mediaIndex - 1]) {
          const media = lesson.media[mediaIndex - 1];
          if (media.type === 'image') {
            elements.push(
              <div key={`media-${index}`} className="my-6">
                <div className="relative rounded-xl overflow-hidden bg-secondary-100 cursor-pointer group" onClick={() => setSelectedImage(media.url)}>
                  <img
                    src={media.url}
                    alt={media.caption || 'Lesson illustration'}
                    className="w-full h-auto object-cover max-h-96 group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white px-3 py-1.5 rounded-lg text-sm">
                      Click to enlarge
                    </div>
                  </div>
                </div>
                {media.caption && (
                  <p className="text-sm text-secondary-500 mt-2 italic text-center">{media.caption}</p>
                )}
              </div>
            );
          } else if (media.type === 'video') {
            elements.push(
              <div key={`media-${index}`} className="my-6">
                <div className="rounded-xl overflow-hidden bg-secondary-900 aspect-video">
                  <iframe
                    src={media.url}
                    title={media.caption || 'Lesson video'}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {media.caption && (
                  <p className="text-sm text-secondary-500 mt-2 italic text-center">{media.caption}</p>
                )}
              </div>
            );
          }
        }
        return;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        flushList(index);
        elements.push(<h1 key={index} className="text-3xl font-display font-bold text-secondary-900 mb-4">{line.slice(2)}</h1>);
        return;
      }
      if (line.startsWith('## ')) {
        flushList(index);
        elements.push(<h2 key={index} className="text-2xl font-display font-bold text-secondary-900 mt-8 mb-4">{line.slice(3)}</h2>);
        return;
      }
      if (line.startsWith('### ')) {
        flushList(index);
        elements.push(<h3 key={index} className="text-xl font-semibold text-secondary-800 mt-6 mb-3">{line.slice(4)}</h3>);
        return;
      }

      // Handle tables
      if (line.startsWith('|')) {
        flushList(index);
        const tableLines: string[] = [line];
        let nextIndex = index + 1;
        while (nextIndex < lines.length && lines[nextIndex].startsWith('|')) {
          tableLines.push(lines[nextIndex]);
          nextIndex++;
        }

        const headers = tableLines[0].split('|').filter(c => c.trim()).map(c => c.trim());
        const rows = tableLines.slice(2).map(row => row.split('|').filter(c => c.trim()).map(c => c.trim()));

        elements.push(
          <div key={`table-${index}`} className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-secondary-200 border border-secondary-200 rounded-lg overflow-hidden">
              <thead className="bg-secondary-50">
                <tr>
                  {headers.map((header, i) => (
                    <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-secondary-700">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-secondary-200">
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary-50'}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-sm text-secondary-600">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        return;
      }

      // Handle lists
      if (line.match(/^\d+\.\s/)) {
        listType = 'decimal';
        currentList.push(
          <li key={index} className="text-secondary-700 mb-1">
            {parseInlineFormatting(line.replace(/^\d+\.\s*/, ''))}
          </li>
        );
        return;
      }
      if (line.startsWith('- **') || line.startsWith('- ')) {
        listType = 'bullet';
        currentList.push(
          <li key={index} className="text-secondary-700 mb-1">
            {parseInlineFormatting(line.replace(/^-\s*/, ''))}
          </li>
        );
        return;
      }

      // Handle warnings
      if (line.includes('WARNING') || line.includes('warning')) {
        flushList(index);
        elements.push(
          <div key={index} className="bg-error-50 border-l-4 border-error-500 p-4 my-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-error-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <p className="text-error-800 font-medium">{line.replace(/\*\*/g, '').replace(/WARNING:?/i, '').trim()}</p>
            </div>
          </div>
        );
        return;
      }

      // Handle empty lines
      if (line.trim() === '') {
        flushList(index);
        elements.push(<div key={index} className="h-3" />);
        return;
      }

      // Regular paragraph
      flushList(index);
      elements.push(
        <p key={index} className="text-secondary-700 mb-3 leading-relaxed">
          {parseInlineFormatting(line)}
        </p>
      );
    });

    flushList(lines.length);
    return elements;
  };

  const parseInlineFormatting = (text: string): (string | JSX.Element)[] => {
    const result: (string | JSX.Element)[] = [];
    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    parts.forEach((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        result.push(<strong key={i} className="font-semibold text-secondary-900">{part.slice(2, -2)}</strong>);
      } else {
        result.push(part);
      }
    });

    return result;
  };

  const handleStartQuiz = () => {
    onViewChange('quiz', { lessonId, courseId: course.id });
  };

  const handleMarkComplete = () => {
    onProgressUpdate(lessonId, true);
  };

  const currentLessonIndex = course.lessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentLessonIndex > 0 ? course.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < course.lessons.length - 1 ? course.lessons[currentLessonIndex + 1] : null;
  const hasNextLesson = nextLesson && userProgress.completedLessons.includes(lessonId);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm">
        <button onClick={() => onViewChange('courses')} className="text-secondary-500 hover:text-secondary-700">Courses</button>
        <ChevronRight className="w-4 h-4 text-secondary-400" />
        <button onClick={() => onViewChange('course', { courseId: course.id })} className="text-secondary-500 hover:text-secondary-700">{course.code}</button>
        <ChevronRight className="w-4 h-4 text-secondary-400" />
        <span className="text-secondary-900 font-medium">{lesson.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:flex-1 space-y-6">
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-4 sm:px-8 sm:py-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-primary-200 text-sm">{course.code}</span>
                  <h1 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">{lesson.title}</h1>
                </div>
                {isCompleted && (
                  <div className="flex items-center gap-1 text-success-300">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Complete</span>
                  </div>
                )}
              </div>
            </div>

            <div className="border-b border-secondary-200">
              <div className="flex">
                <button
                  onClick={() => setActiveSection('content')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === 'content' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-500 hover:text-secondary-700'
                  }`}
                >
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  Content
                </button>
                <button
                  onClick={() => setActiveSection('quiz')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === 'quiz' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-500 hover:text-secondary-700'
                  }`}
                >
                  <Award className="w-4 h-4 inline mr-2" />
                  Quiz
                  {quizResult && <span className="ml-2 text-xs text-success-600">({Math.round((quizResult.score / quizResult.totalQuestions) * 100)}%)</span>}
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {activeSection === 'content' && (
                <div className="prose prose-secondary max-w-none">
                  {parseContentWithMedia(lesson.content)}
                </div>
              )}

              {activeSection === 'quiz' && (
                <div className="py-8 text-center">
                  {quizResult ? (
                    <div className="space-y-4">
                      <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
                        quizResult.score === quizResult.totalQuestions ? 'bg-success-100' :
                        quizResult.score >= quizResult.totalQuestions * 0.7 ? 'bg-primary-100' : 'bg-warning-100'
                      }`}>
                        <span className={`text-2xl font-bold ${
                          quizResult.score === quizResult.totalQuestions ? 'text-success-600' :
                          quizResult.score >= quizResult.totalQuestions * 0.7 ? 'text-primary-600' : 'text-warning-600'
                        }`}>
                          {Math.round((quizResult.score / quizResult.totalQuestions) * 100)}%
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-900">You scored {quizResult.score} out of {quizResult.totalQuestions}</h3>
                      <p className="text-secondary-500">
                        {quizResult.score === quizResult.totalQuestions ? 'Perfect score! You have mastered this lesson.' :
                         quizResult.score >= quizResult.totalQuestions * 0.7 ? 'Great job! You passed the quiz.' :
                         'You might want to review the lesson and try again.'}
                      </p>
                      <button onClick={handleStartQuiz} className="btn-secondary mt-4">Retake Quiz</button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Award className="w-16 h-16 mx-auto text-primary-200" />
                      <h3 className="text-lg font-semibold text-secondary-900">{lesson.quizQuestions.length} Quiz Questions</h3>
                      <p className="text-secondary-500 max-w-md mx-auto">
                        Test your understanding of this lesson by completing the quiz. You need 70% to pass.
                      </p>
                      <button onClick={handleStartQuiz} className="btn-primary mt-4">
                        <Play className="w-4 h-4 mr-2" />
                        Start Quiz
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {!isCompleted && activeSection === 'content' && (
              <button onClick={handleMarkComplete} className="btn-success flex-1">
                <CheckCircle className="w-5 h-5 mr-2" />
                Mark as Complete
              </button>
            )}
            {!quizResult && activeSection === 'content' && (
              <button onClick={handleStartQuiz} className="btn-primary flex-1">
                <Award className="w-5 h-5 mr-2" />
                Take Quiz
              </button>
            )}
          </div>
        </div>

        <div className="lg:w-64 flex-shrink-0">
          <div className="card p-4 sticky top-24">
            <h3 className="font-semibold text-secondary-900 mb-3">Course Progress</h3>
            <div className="space-y-2">
              {course.lessons.map((l, index) => {
                const completed = userProgress.completedLessons.includes(l.id);
                const current = l.id === lessonId;

                return (
                  <button
                    key={l.id}
                    onClick={() => onViewChange('lesson', { lessonId: l.id })}
                    className={`w-full text-left p-2 rounded-lg text-sm transition-colors ${
                      current ? 'bg-primary-50 text-primary-700 border border-primary-200' :
                      completed ? 'text-success-700 hover:bg-success-50' : 'text-secondary-600 hover:bg-secondary-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {completed ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <span className="w-4 h-4 flex items-center justify-center text-xs font-medium">{index + 1}</span>}
                      <span className="truncate">{l.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
        {prevLesson ? (
          <button onClick={() => onViewChange('lesson', { lessonId: prevLesson.id })} className="flex items-center gap-2 text-secondary-600 hover:text-secondary-900">
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Previous Lesson</span>
            <span className="sm:hidden">{prevLesson.title}</span>
          </button>
        ) : <div />}

        {hasNextLesson && nextLesson && (
          <button onClick={() => onViewChange('lesson', { lessonId: nextLesson.id })} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
            <span className="hidden sm:inline">Next Lesson</span>
            <span className="sm:hidden">{nextLesson.title}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
}
