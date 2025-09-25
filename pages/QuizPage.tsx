import React, { useState, useMemo } from 'react';
import { dailyQuiz } from '../constants/mockData';
import type { QuizQuestion } from '../types';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import { LeafIcon } from '../components/icons';

interface QuizPageProps {
    onQuizComplete: (points: number) => void;
    hasCompletedQuizToday: boolean;
}

const QuizPage: React.FC<QuizPageProps> = ({ onQuizComplete, hasCompletedQuizToday }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);

    const currentQuestion: QuizQuestion | undefined = useMemo(() => dailyQuiz[currentQuestionIndex], [currentQuestionIndex]);

    if (hasCompletedQuizToday && !showResult) {
        return (
            <Card className="max-w-2xl mx-auto p-8 text-center">
                <LeafIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold font-display mb-4">¡Ya completaste el quiz de hoy!</h2>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-2">
                    ¡Buen trabajo! Has demostrado tu conocimiento ecológico por hoy.
                </p>
                <p className="font-bold text-primary dark:text-primary-light mt-6">
                    ¡Vuelve mañana para un nuevo reto y más puntos!
                </p>
            </Card>
        );
    }

    const handleAnswerSelect = (optionIndex: number) => {
        if (isAnswered || !currentQuestion) return;

        setSelectedAnswer(optionIndex);
        setIsAnswered(true);

        if (optionIndex === currentQuestion.correctAnswerIndex) {
            setScore(prev => prev + currentQuestion.points);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < dailyQuiz.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            onQuizComplete(score);
            setShowResult(true);
        }
    };

    const getButtonClass = (optionIndex: number) => {
        if (!isAnswered || !currentQuestion) return 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600';
        if (optionIndex === currentQuestion.correctAnswerIndex) return 'bg-green-500 text-white';
        if (optionIndex === selectedAnswer) return 'bg-red-500 text-white';
        return 'bg-gray-200 dark:bg-gray-700 opacity-60';
    };

    if (showResult) {
        return (
            <Card className="max-w-2xl mx-auto p-8 text-center">
                <LeafIcon className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold font-display mb-4">¡Quiz Completado!</h2>
                <p className="text-xl mb-6">
                    Tu puntuación final es: <span className="font-bold text-accent">{score} / {dailyQuiz.reduce((acc, q) => acc + q.points, 0)}</span>
                </p>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-2">
                    Has ganado {score} puntos y XP. ¡Tu conocimiento está haciendo el mundo más verde!
                </p>
                <p className="font-bold text-primary dark:text-primary-light mt-6">
                    ¡Vuelve mañana para un nuevo reto!
                </p>
            </Card>
        );
    }
    
    const isFinished = currentQuestionIndex >= dailyQuiz.length;
    if (isFinished || !currentQuestion) {
        return (
            <Card className="max-w-2xl mx-auto p-8 text-center">
                 <h2 className="text-3xl font-bold font-display mb-4">Quiz Diario</h2>
                 <p className="text-text-muted-light dark:text-text-muted-dark">
                     Parece que no hay quiz disponible hoy. ¡Vuelve a intentarlo mañana!
                 </p>
            </Card>
        );
    }

    return (
        <div>
            <h1 className="text-4xl font-bold font-display text-center mb-8">Quiz Diario</h1>
            <Card className="max-w-2xl mx-auto">
                <div className="p-8">
                    <div className="mb-6">
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-1">
                            Pregunta {currentQuestionIndex + 1} de {dailyQuiz.length}
                        </p>
                        <ProgressBar value={currentQuestionIndex + 1} max={dailyQuiz.length} color="primary" />
                    </div>

                    <h2 className="text-2xl font-bold mb-6 min-h-[6rem]">{currentQuestion.question}</h2>

                    <div className="space-y-4">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-lg transition-colors duration-200 font-semibold ${getButtonClass(index)} ${isAnswered ? 'cursor-not-allowed' : ''}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {isAnswered && (
                        <div className="mt-6 text-center">
                            <p className={`font-bold text-lg ${selectedAnswer === currentQuestion.correctAnswerIndex ? 'text-green-500' : 'text-red-500'}`}>
                                {selectedAnswer === currentQuestion.correctAnswerIndex ? '¡Correcto!' : 'Incorrecto.'}
                            </p>
                            <Button onClick={handleNextQuestion} className="mt-4">
                                {currentQuestionIndex < dailyQuiz.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                            </Button>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default QuizPage;