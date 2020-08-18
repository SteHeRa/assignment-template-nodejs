# Getting started

Install all the required packages

```bash
npm install
```

Run development server (on port 3000)

```bash
npm run dev
```

To use another port run

```bash
npm run dev -- -p 3456
```

**We will be testing the application using above commands,
there is no need to run a production build.**

You can add any additional libraries you need, just make sure the package.json is updated before sending the solution.

# How to send us the solution

There are two options:

- publish your code to a git repo (on github, gitlab, etc.) where we can access it,
- send us a compressed file containing this whole directory (please remove node_modules before creating the archive).

Please let us know by e-mail if you have any questions about submitting the solution!

# What's included

- React support
- TypeScript support
- [ant.design](https://ant.design/) for UI components (See https://ant.design/components/overview/ for list of available components)
- [axios](https://github.com/axios/axios/) for HTTP requests in node.js

## If not using TypeScript

You can just use `.js` files and add `// @ts-nocheck` to the top of `.ts` & `.tsx` files.

## If not using ant.design

Remove the line importing `antd/dist/antd.css` from `_app.tsx` as ant overrides some global styles.
