import Link from 'next/link';
import { BookOpenText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <BookOpenText className="h-7 w-7 sm:h-8 sm:w-8" />
            <h1 className="text-xl sm:text-2xl font-headline font-semibold">Quiz Whiz</h1>
          </Link>
          {/* Add any other header elements here, like user profile, theme toggle etc. */}
        </div>
      </div>
    </header>
  );
}
