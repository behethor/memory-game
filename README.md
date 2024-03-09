This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About the project

This project is a minimalist and simple Memory card game, developed using the listed technologies:

- [Next.js](https://nextjs.org/docs)
- [React](https://es.react.dev/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Tailwindcss](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)
- [Eslint](https://eslint.org/)

## Game info

The game consists of a set of rules:

- You must to save your username (mandatory) to play the game.
- The game will only ask for your username once.
- You can only flip just two cards per turn.
- If you miss a the match, the game adds an error to your score.
- On the other hand, if you get a match, the game adds a pair to your score.
- The game data (current game and user name) is stored in the browser's localstorage.
- When the game is finished, the game notifies the user with a congratulations message and offers a new game.

## Tests

To run the test suit use the following command in your terminal:

```bash
npm run test
```
## Demo

The game it's available to check it in [vercel platform]()
