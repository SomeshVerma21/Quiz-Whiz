import type { AllQuestions } from '@/lib/types';

// Using a smaller set of questions for demo purposes.
// The application is designed to handle up to 30 questions per subject/grade.
export const questionsData: AllQuestions = {
  1: {
    math: [
      { id: 'm1-1-1', q: 'What is 1 + 1?', options: ['1', '2', '3', '0'], answer: '2' },
      { id: 'm1-1-2', q: 'Which number is bigger: 3 or 5?', options: ['3', '5', 'Same', 'None'], answer: '5' },
      { id: 'm1-1-3', q: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], answer: '3' },
    ],
    science: [
      { id: 's1-1-1', q: 'Is the sun hot or cold?', options: ['Hot', 'Cold', 'Warm', 'Icy'], answer: 'Hot' },
      { id: 's1-1-2', q: 'What do plants need to grow?', options: ['Soda', 'Sunlight', 'Candy', 'TV'], answer: 'Sunlight' },
    ],
    biology: [
      { id: 'b1-1-1', q: 'How many legs does a cat have?', options: ['2', '4', '6', '8'], answer: '4' },
      { id: 'b1-1-2', q: 'What sound does a dog make?', options: ['Moo', 'Meow', 'Woof', 'Oink'], answer: 'Woof' },
    ],
  },
  2: {
    math: [
      { id: 'm1-2-1', q: 'What is 5 - 2?', options: ['1', '2', '3', '4'], answer: '3' },
      { id: 'm1-2-2', q: 'Count by twos: 2, 4, __, 8', options: ['5', '6', '7', '3'], answer: '6' },
    ],
    // Add more for science, biology for grade 2
  },
  // Add more grades and subjects as needed
  8: {
    math: [
      { id: 'm8-8-1', q: 'Solve for x: 2x + 3 = 7', options: ['1', '2', '3', '4'], answer: '2' },
      { id: 'm8-8-2', q: 'What is the square root of 64?', options: ['6', '7', '8', '9'], answer: '8' },
    ],
    science: [
        { id: 's8-8-1', q: 'What is H2O commonly known as?', options: ['Salt', 'Sugar', 'Water', 'Air'], answer: 'Water' },
    ],
    biology: [
        { id: 'b8-8-1', q: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'], answer: 'Mitochondria' },
    ]
  }
};

// Function to get questions for a specific grade and subject
export const getQuestions = (grade: GradeLevel, subject: SubjectName): Question[] => {
  const gradeQuestions = questionsData[grade];
  if (gradeQuestions) {
    const subjectQuestions = gradeQuestions[subject];
    if (subjectQuestions) {
      // Shuffle questions (optional enhancement, basic shuffle)
      const shuffled = [...subjectQuestions].sort(() => Math.random() - 0.5);
      // For demo, use all available. If more than 30, slice.
      return shuffled.slice(0, 30);
    }
  }
  return []; // Return empty array if no questions found
};
