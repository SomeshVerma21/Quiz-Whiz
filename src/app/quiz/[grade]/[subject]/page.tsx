
"use client";
import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

// This page is part of an old route structure and is kept to redirect to the new path.
export default function OldGradeQuizPageRedirect() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const gradeParam = params.grade as string | undefined;
    const subjectParam = params.subject as string | undefined;
    
    if (gradeParam && subjectParam) {
      // Redirect to the new path structure, using the 'grade' param as 'class'
      router.replace(`/quiz/${gradeParam}/${subjectParam}`);
    } else {
      // Fallback redirect to home if parameters are missing
      router.replace('/');
    }
  }, [router, params]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem-1px)] p-4 text-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
      <p className="text-xl text-muted-foreground font-semibold">Redirecting to new page structure...</p>
    </div>
  );
}
