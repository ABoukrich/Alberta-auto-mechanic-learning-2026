import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, AlertCircle, RotateCcw, ArrowLeft } from 'lucide-react';
import { getLessonById } from '../data/courses';
import { QuizResult } from '../types';

interface QuizProps {
  lessonId: string;
  onBack: () => void;
  onComplete: (result: QuizResult) => void;
}

export function Quiz({ lessonId, onBack, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const result = getLessonById(lessonId);

  if (!result) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-500">Quiz not found</p>
        <button onClick={onBack} className="btn-primary mt-4">Go Back</button>
      </div>
    );
  }

  const { lesson, course } = result;
  const questions = lesson.quizQuestions;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(selectedAnswers[currentQuestion - 1] !== undefined);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctIndex ? 1 : 0);
    }, 0);
  };

  const handleFinish = () => {
    const quizResult: QuizResult = {
      lessonId,
      score: calculateScore(),
      totalQuestions: questions.length,
      answers: selectedAnswers,
      completedAt: new Date().toISOString(),
    };
    onComplete(quizResult);
    onBack();
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isCorrect = selectedAnswer === question.correctIndex;
  const score = calculateScore();
  const passingScore = Math.ceil(questions.length * 0.7);
  const passed = score >= passingScore;

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card overflow-hidden">
          <div className={`p-8 text-center ${passed ? 'bg-success-500' : 'bg-warning-500'}`}>
            <div className="w-20 h-20 rounded-full bg-white/20 mx-auto flex items-center justify-center">
              {passed ? <CheckCircle className="w-10 h-10 text-white" /> : <AlertCircle className="w-10 h-10 text-white" />}
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-2xl font-display font-bold text-secondary-900 text-center mb-2">
              {passed ? 'Congratulations!' : 'Keep Learning!'}
            </h1>
            <p className="text-secondary-500 text-center mb-8">
              {passed ? 'You have successfully passed the quiz!' : `You need ${passingScore}/${questions.length} to pass. Review the lesson and try again.`}
            </p>

            <div className="text-center mb-8">
              <div className="text-6xl font-display font-bold text-secondary-900 mb-2">{Math.round((score / questions.length) * 100)}%</div>
              <p className="text-secondary-500">{score} correct out of {questions.length} questions</p>
            </div>

            <div className="space-y-3 mb-8 max-h-64 overflow-y-auto">
              {questions.map((_, index) => {
                const wasCorrect = selectedAnswers[index] === questions[index].correctIndex;
                return (
                  <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${wasCorrect ? 'bg-success-50' : 'bg-error-50'}`}>
                    {wasCorrect ? <CheckCircle className="w-5 h-5 text-success-600 flex-shrink-0" /> : <XCircle className="w-5 h-5 text-error-600 flex-shrink-0" />}
                    <p className={`text-sm ${wasCorrect ? 'text-success-700' : 'text-error-700'}`}>Question {index + 1}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <button onClick={handleRetake} className="flex-1 btn-secondary"><RotateCcw className="w-4 h-4 mr-2" />Retake Quiz</button>
              <button onClick={handleFinish} className="flex-1 btn-primary">{passed ? 'Complete' : 'Back to Lesson'}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-1 text-secondary-600 hover:text-secondary-900 mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to Lesson
      </button>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-secondary-600">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm text-secondary-500">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="progress-bar h-2">
          <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-4">
          <p className="text-primary-100 text-sm">{course.code}</p>
          <h1 className="text-lg font-display font-bold text-white">{lesson.title} Quiz</h1>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-secondary-900 mb-6">{question.question}</h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectOption = index === question.correctIndex;
                const showCorrect = showExplanation && (isSelected || isCorrectOption);

                let buttonClass = 'border-secondary-200 hover:border-primary-300 hover:bg-primary-50';
                if (showExplanation) {
                  if (isCorrectOption) buttonClass = 'border-success-500 bg-success-50';
                  else if (isSelected && !isCorrectOption) buttonClass = 'border-error-500 bg-error-50';
                  else buttonClass = 'border-secondary-200 opacity-50';
                } else if (isSelected) buttonClass = 'border-primary-500 bg-primary-50';

                return (
                  <button
                    key={index}
                    onClick={() => !showExplanation && handleAnswer(index)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${buttonClass} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-medium text-sm ${
                        showExplanation ? isCorrectOption ? 'bg-success-500 text-white' : isSelected ? 'bg-error-500 text-white' : 'bg-secondary-100 text-secondary-600' :
                        isSelected ? 'bg-primary-500 text-white' : 'bg-secondary-100 text-secondary-600'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className={`text-sm ${
                        showExplanation && isCorrectOption ? 'text-success-700 font-medium' :
                        showExplanation && isSelected && !isCorrectOption ? 'text-error-700' : 'text-secondary-700'
                      }`}>
                        {option}
                      </span>
                      {showExplanation && isCorrectOption && <CheckCircle className="w-5 h-5 text-success-500 ml-auto flex-shrink-0" />}
                      {showExplanation && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-error-500 ml-auto flex-shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && (
            <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-success-50 border border-success-200' : 'bg-error-50 border border-error-200'}`}>
              <div className="flex items-start gap-3">
                {isCorrect ? <CheckCircle className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-error-600 flex-shrink-0 mt-0.5" />}
                <div>
                  <p className={`font-medium mb-1 ${isCorrect ? 'text-success-700' : 'text-error-700'}`}>{isCorrect ? 'Correct!' : 'Incorrect'}</p>
                  <p className="text-sm text-secondary-600">{question.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-secondary-200">
            <button onClick={handlePrevious} disabled={currentQuestion === 0} className={`flex items-center gap-2 ${currentQuestion === 0 ? 'text-secondary-300 cursor-not-allowed' : 'text-secondary-600 hover:text-secondary-900'}`}>
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {selectedAnswer !== undefined && (
              <button onClick={handleNext} className="btn-primary">
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
