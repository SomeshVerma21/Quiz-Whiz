"use client";

import type { Question } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface QuestionDisplayProps {
  question: Question;
  onAnswerSelect: (option: string) => void;
  selectedOption: string | null;
  answerStatus: 'correct' | 'wrong' | null;
  questionNumber: number;
  totalQuestions: number;
  isAnswered: boolean;
}

export function QuestionDisplay({
  question,
  onAnswerSelect,
  selectedOption,
  answerStatus,
  questionNumber,
  totalQuestions,
  isAnswered,
}: QuestionDisplayProps) {
  
  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return "bg-secondary hover:bg-secondary/80 text-secondary-foreground"; // Default state before answer
    }
    if (option === selectedOption) {
      if (answerStatus === 'correct') return "bg-green-500 hover:bg-green-600 text-white animate-pulse";
      if (answerStatus === 'wrong') return "bg-red-500 hover:bg-red-600 text-white animate-pulse";
    }
    if (option === question.answer && isAnswered) { // Highlight correct answer after selection
        return "bg-green-500 hover:bg-green-600 text-white";
    }
    return "bg-muted hover:bg-muted/80 text-muted-foreground opacity-70"; // Other options after answer
  };

  const getIcon = (option: string) => {
    if (!isAnswered || option !== selectedOption) return null;
    if (answerStatus === 'correct') return <CheckCircle2 className="h-5 w-5" />;
    if (answerStatus === 'wrong') return <XCircle className="h-5 w-5" />;
    return null;
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardDescription className="text-sm text-primary">
          Question {questionNumber} of {totalQuestions}
        </CardDescription>
        <CardTitle className="text-2xl font-headline leading-tight pt-1">
          {question.q}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswerSelect(option)}
            className={cn(
              "w-full justify-start text-left h-auto py-3 px-4 text-base whitespace-normal break-words",
              getButtonClass(option)
            )}
            disabled={isAnswered}
            variant="outline"
          >
            <span className="mr-3 flex items-center justify-center h-6 w-6 rounded-full border border-current text-sm">
              {String.fromCharCode(65 + index)} {/* A, B, C, D */}
            </span>
            <span className="flex-1">{option}</span>
            {getIcon(option)}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
