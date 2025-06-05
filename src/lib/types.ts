
export type Question = {
  id: string;
  q: string;
  options: string[];
  answer: string;
};

export type SubjectName = "math" | "science" | "biology";
export const subjectNames: SubjectName[] = ["math", "science", "biology"];

// Renamed from GradeLevel
export type ClassLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
// Renamed from gradeLevels
export const classLevels: ClassLevel[] = [1, 2, 3, 4, 5, 6, 7, 8];

export type QuestionsBySubject = {
  [key in SubjectName]?: Question[];
};

export type AllQuestions = {
  // Updated to ClassLevel
  [classVal in ClassLevel]?: QuestionsBySubject;
};

export type SubjectInfo = {
  name: SubjectName;
  displayName: string;
  Icon: React.ElementType;
};
