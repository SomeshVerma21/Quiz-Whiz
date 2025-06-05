
import type { Metadata, ResolvingMetadata } from 'next';
import { subjectNames, classLevels, type SubjectName, type ClassLevel } from '@/lib/types';

type Props = {
  params: { class: string; subject: string };
};

// Helper to capitalize strings
const capitalize = (s: string) => {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const classValParam = params.class as string;
  const subjectParam = params.subject as SubjectName;

  const classVal = classValParam ? parseInt(classValParam) as ClassLevel : undefined;

  // Validate params
  if (!classVal || !subjectParam || !classLevels.includes(classVal) || !subjectNames.includes(subjectParam)) {
    // Fallback metadata if params are invalid
    return {
      title: 'Quiz Not Found',
      description: 'The requested quiz class or subject is not available.',
    };
  }

  const capitalizedSubject = capitalize(subjectParam);
  const pageTitle = `Class ${classVal} ${capitalizedSubject} Quiz`;
  const pageDescription = `Take an exciting ${capitalizedSubject.toLowerCase()} quiz for Class ${classVal}. Test your knowledge and learn with Quiz Whiz!`;

  // Optionally, you can await and get the previous metadata from parent
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'article', // More specific for a quiz page
      // publishedTime: new Date().toISOString(), // Consider if this is useful
      // authors: ['Quiz Whiz Team'], // Consider if this is useful
      // images: [...previousImages], // Add specific images if available
    },
    twitter: {
      card: 'summary',
      title: pageTitle,
      description: pageDescription,
      // images: ['YOUR_SPECIFIC_IMAGE_URL_HERE'],
    },
  };
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // This layout just passes children through, its main purpose is metadata
}
