// This file is intentionally left with only comments.
// It exists due to an old routing structure `/quiz/[grade]/...` which is now deprecated
// and replaced by `/quiz/[class]/...`.
//
// The presence of this file, even with `export default null;`, was causing a Next.js
// error: "You cannot use different slug names for the same dynamic path ('grade' !== 'class')".
//
// This modification attempts to make Next.js completely ignore this file for routing purposes.
// Ideally, the `src/app/quiz/[grade]` directory should be deleted.
