## For the production preview and SEO tests:

1. npm run build
2. npm run preview
3. Run chrome and test with the Lighthouse

## For the dev build:

- npm run dev

## To run tests:

- npx playwright test

## To run Prettier:

- npx prettier . --write
- npm run format

## Prettier settings:

1. "semi": true, // Enforces the usage of semicolons at the end of statements
2. "singleQuote": true, // Formats strings with single quotes instead of double quotes
3. "jsxSingleQuote": true, // Formats JSX attributes and elements with single quotes
4. "trailingComma": "all", // Adds a trailing comma wherever possible, including function arguments and object literals
5. "tabWidth": 2, // Specifies the number of spaces per indentation level
6. "arrowParens": "always", // Ensures that parentheses are always added around arrow function parameters
7. "endOfLine": "lf" // Specifies the line ending style to be LF (Unix-style line endings)
