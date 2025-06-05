"use client";

import type { SubjectName, SubjectInfo } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Calculator, FlaskConical, Leaf } from 'lucide-react';

const subjectDetails: SubjectInfo[] = [
  { name: 'math', displayName: 'Mathematics', Icon: Calculator },
  { name: 'science', displayName: 'Science', Icon: FlaskConical },
  { name: 'biology', displayName: 'Biology', Icon: Leaf },
];

interface SubjectSelectorProps {
  selectedSubject: SubjectName | undefined;
  onSubjectChange: (subject: SubjectName) => void;
}

export function SubjectSelector({ selectedSubject, onSubjectChange }: SubjectSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Select Subject</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjectDetails.map(({ name, displayName, Icon }) => (
          <Card
            key={name}
            className={cn(
              "cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg",
              selectedSubject === name ? "ring-2 ring-primary border-primary shadow-lg" : "hover:border-primary/50"
            )}
            onClick={() => onSubjectChange(name)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' || e.key === ' ' ? onSubjectChange(name) : null}
            aria-pressed={selectedSubject === name}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-headline">{displayName}</CardTitle>
              <Icon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Test your knowledge in {displayName.toLowerCase()}.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
