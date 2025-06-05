
// This file is intentionally structured to NOT export a default React component.
// The purpose is to attempt to resolve a Next.js build error:
// "Error: You cannot use different slug names for the same dynamic path ('class' !== 'grade')."
//
// This error occurs because Next.js detects conflicting dynamic segment names
// ([grade] vs [class]) at the same path level.
//
// By not providing a default React component export, it's hoped that Next.js
// will either ignore this path for page routing or raise a different, more manageable
// error (like "missing default export for page"), rather than the server failing to start
// due to the slug name conflict.
//
// The correct, active route is /quiz/[class]/[subject]/.
// This old path (/quiz/[grade]/[subject]/) and its corresponding page.tsx
// should ideally be deleted from the filesystem to properly resolve the conflict.

export const DEPRECATED_ROUTE_MARKER = true;

// No default export that is a React component.
// If Next.js still requires a default export for files named page.tsx,
// exporting a non-component value might also achieve the goal of invalidating the page.
// export default null; // Or some other non-component value
