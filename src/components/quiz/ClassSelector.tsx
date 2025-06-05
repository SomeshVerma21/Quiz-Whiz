
"use client";

import type { ClassLevel } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface ClassSelectorProps {
  selectedClass: ClassLevel | undefined;
  onClassChange: (classVal: ClassLevel) => void;
  classes: ClassLevel[];
}

export function ClassSelector({ selectedClass, onClassChange, classes }: ClassSelectorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="class-select" className="text-lg font-medium">Select Class</Label>
      <Select
        value={selectedClass?.toString()}
        onValueChange={(value) => onClassChange(Number(value) as ClassLevel)}
      >
        <SelectTrigger id="class-select" className="w-full text-base py-6">
          <SelectValue placeholder="Choose a class..." />
        </SelectTrigger>
        <SelectContent>
          {classes.map((classVal) => (
            <SelectItem key={classVal} value={classVal.toString()} className="text-base py-2">
              Class {classVal}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
