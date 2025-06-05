
// This file is intentionally structured to NOT export a default React component.
// The purpose is to attempt to resolve a Next.js build error:
// "Error: You cannot use different slug names for the same dynamic path ('class' !== 'grade')."
//
// This error occurs because Next.js detects conflicting dynamic segment names
// ([grade] vs [class]) at the same path level.
//
// By exporting null as the default, it's hoped that Next.js
// will invalidate this path for page routing, rather than the server failing to start
// due to the slug name conflict.
//
// The correct, active route is /quiz/[class]/[subject]/.
// This old path (/quiz/[grade]/[subject]/) and its corresponding page.tsx
// should ideally be deleted from the filesystem to properly resolve the conflict.

export const DEPRECATED_ROUTE_MARKER = true;

// Exporting null to invalidate this as a renderable page.
export default null;
