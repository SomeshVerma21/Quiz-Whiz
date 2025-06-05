"use client";

import type { GradeLevel } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface GradeSelectorProps {
  selectedGrade: GradeLevel | undefined;
  onGradeChange: (grade: GradeLevel) => void;
  grades: GradeLevel[];
}

export function GradeSelector({ selectedGrade, onGradeChange, grades }: GradeSelectorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="grade-select" className="text-lg font-medium">Select Grade</Label>
      <Select
        value={selectedGrade?.toString()}
        onValueChange={(value) => onGradeChange(Number(value) as GradeLevel)}
      >
        <SelectTrigger id="grade-select" className="w-full text-base py-6">
          <SelectValue placeholder="Choose a grade..." />
        </SelectTrigger>
        <SelectContent>
          {grades.map((grade) => (
            <SelectItem key={grade} value={grade.toString()} className="text-base py-2">
              Grade {grade}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
