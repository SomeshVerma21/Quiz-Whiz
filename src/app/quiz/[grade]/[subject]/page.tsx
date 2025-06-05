"use client";

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { Question, GradeLevel, SubjectName } from '@/lib/types';
import { getQuestions } from '@/data/questions';
import { QuestionDisplay } from '@/components/quiz/QuestionDisplay';
import { ResultModal } from '@/components/quiz/ResultModal';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Loader2, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const QUIZ_FEEDBACK_DURATION = 1500; // milliseconds

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  const grade = params.grade ? parseInt(params.grade as string) as GradeLevel : undefined;
  const subject = params.subject as SubjectName | undefined;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'wrong' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnswered, setIsAnswered] = useState(false);

  const loadQuizQuestions = useCallback(() => {
    setIsLoading(true);
    if (grade && subject) {
      const fetchedQuestions = getQuestions(grade, subject);
      if (fetchedQuestions.length === 0) {
        toast({
          title: "No Questions",
          description: `Sorry, no questions found for Grade ${grade} in ${subject}. Please try other options.`,
          variant: "destructive",
        });
        router.push('/'); // Redirect if no questions
        return;
      }
      // Shuffle options for each question (optional enhancement)
      const questionsWithShuffledOptions = fetchedQuestions.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }));
      setQuestions(questionsWithShuffledOptions);

    } else {
       toast({
          title: "Invalid Quiz Parameters",
          description: "Could not determine grade or subject.",
          variant: "destructive",
        });
      router.push('/');
    }
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setAnswerStatus(null);
    setIsModalOpen(false);
    setIsAnswered(false);
    setIsLoading(false);
  }, [grade, subject, router, toast]);

  useEffect(() => {
    loadQuizQuestions();
  }, [loadQuizQuestions]);


  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return; // Prevent multiple answers

    setSelectedOption(option);
    setIsAnswered(true);
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('wrong');
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
        setAnswerStatus(null);
        setIsAnswered(false);
      } else {
        setIsModalOpen(true);
      }
    }, QUIZ_FEEDBACK_DURATION);
  };

  const handleRetry = () => {
    loadQuizQuestions();
  };

  const handleGoHome = () => {
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem-1px)] p-4 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-xl text-muted-foreground font-semibold">Loading Quiz...</p>
        <p className="text-md text-muted-foreground">Preparing your questions!</p>
      </div>
    );
  }
  
  if (!questions.length && !isLoading) {
     // This case should ideally be caught by loadQuizQuestions redirect, but as a fallback:
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem-1px)] p-4 text-center">
        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
        <p className="text-xl text-destructive font-semibold">No Questions Available</p>
        <p className="text-md text-muted-foreground mb-6">
          We couldn't find any questions for the selected grade and subject.
        </p>
        <Button onClick={handleGoHome}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Selection
        </Button>
      </div>
    );
  }


  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center max-w-3xl">
      <div className="w-full mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Score: <span className="text-primary font-bold">{score}</span>
          </span>
           <Button variant="outline" size="sm" onClick={() => router.push('/')}>
            <ArrowLeft className="mr-1 h-4 w-4" /> Exit Quiz
          </Button>
        </div>
        <Progress value={progressPercentage} className="w-full h-3" />
        <p className="text-xs text-muted-foreground text-right mt-1">
            Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      {currentQuestion && (
        <QuestionDisplay
          question={currentQuestion}
          onAnswerSelect={handleAnswerSelect}
          selectedOption={selectedOption}
          answerStatus={answerStatus}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          isAnswered={isAnswered}
        />
      )}

      <ResultModal
        isOpen={isModalOpen}
        score={score}
        totalQuestions={questions.length}
        onRetry={handleRetry}
        onGoHome={handleGoHome}
      />
    </div>
  );
}
