
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ClassLevel, SubjectName } from '@/lib/types';
import { classLevels } from '@/lib/types';
import { ClassSelector } from '@/components/quiz/ClassSelector';
import { SubjectSelector } from '@/components/quiz/SubjectSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket } from 'lucide-react';

export default function SelectionPage() {
  const [selectedClass, setSelectedClass] = useState<ClassLevel | undefined>(undefined);
  const [selectedSubject, setSelectedSubject] = useState<SubjectName | undefined>(undefined);
  const router = useRouter();

  const handleStartQuiz = () => {
    if (selectedClass && selectedSubject) {
      router.push(`/quiz/${selectedClass}/${selectedSubject}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline tracking-tight text-primary">Welcome to Quiz Whiz!</CardTitle>
          <CardDescription className="text-md text-muted-foreground pt-2">
            Select your class and a subject to start learning in a fun way.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <ClassSelector
            selectedClass={selectedClass}
            onClassChange={setSelectedClass}
            classes={classLevels}
          />
          <SubjectSelector
            selectedSubject={selectedSubject}
            onSubjectChange={setSelectedSubject}
          />
        </CardContent>
        <CardFooter className="p-6">
          <Button
            onClick={handleStartQuiz}
            disabled={!selectedClass || !selectedSubject}
            className="w-full text-lg py-6"
            size="lg"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
