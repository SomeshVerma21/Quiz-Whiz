
"use client";

import React from 'react';
import { Label } from "@/components/ui/label";

// This component is deprecated and has been replaced by ClassSelector.
// It is kept minimal here to prevent build errors that might arise from
// previous dependencies on types (like GradeLevel) that have been removed or renamed.
export function GradeSelector() {
  return (
    <div className="space-y-2 p-4 border border-dashed rounded-md bg-muted/50">
      <Label htmlFor="deprecated-grade-select" className="text-lg font-medium text-muted-foreground">Select Grade (Deprecated)</Label>
      <p className="text-sm text-muted-foreground">
        This grade selector is no longer in use. The application has been updated to use "Class" selection.
      </p>
    </div>
  );
}
