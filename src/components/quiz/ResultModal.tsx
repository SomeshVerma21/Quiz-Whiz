"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { PartyPopper, Award, Repeat, Home } from 'lucide-react';

interface ResultModalProps {
  isOpen: boolean;
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onGoHome: () => void;
}

export function ResultModal({ isOpen, score, totalQuestions, onRetry, onGoHome }: ResultModalProps) {
  if (!isOpen) return null;

  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  let encouragementMessage = "";
  let IconComponent = Award;

  if (percentage >= 80) {
    encouragementMessage = "Excellent work, Quiz Whiz! You're a star!";
    IconComponent = PartyPopper;
  } else if (percentage >= 50) {
    encouragementMessage = "Good job! Keep practicing to become even better!";
    IconComponent = Award;
  } else {
    encouragementMessage = "Don't give up! Every attempt is a step forward.";
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={() => { /* Controlled externally */ }}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader className="items-center">
          <IconComponent className="h-16 w-16 text-primary animate-celebrate-pop mb-4" />
          <AlertDialogTitle className="text-3xl font-headline text-center">Quiz Completed!</AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg pt-2">
            You scored <span className="font-bold text-primary">{score}</span> out of <span className="font-bold text-primary">{totalQuestions}</span> ({percentage}%).
            <br />
            {encouragementMessage}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <Button onClick={onRetry} variant="outline" size="lg" className="w-full">
            <Repeat className="mr-2 h-5 w-5" />
            Retry Quiz
          </Button>
          <Button onClick={onGoHome} size="lg" className="w-full">
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
