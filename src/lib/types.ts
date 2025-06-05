export type Question = {
  id: string;
  q: string;
  options: string[];
  answer: string;
};

export type SubjectName = "math" | "science" | "biology";
export const subjectNames: SubjectName[] = ["math", "science", "biology"];

export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export const gradeLevels: GradeLevel[] = [1, 2, 3, 4, 5, 6, 7, 8];

export type QuestionsBySubject = {
  [key in SubjectName]?: Question[]; // Optional to handle cases where a subject might not have questions for a grade
};

export type AllQuestions = {
  [grade in GradeLevel]?: QuestionsBySubject; // Optional to handle cases where a grade might not have questions
};

export type SubjectInfo = {
  name: SubjectName;
  displayName: string;
  Icon: React.ElementType;
};
