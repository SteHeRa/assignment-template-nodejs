# Getting started

Install all the required packages for front end

```bash
npm install
```

Install all the required packages for back end server

```bash
cd server
npm install
```

Run development server for front end (on port 3000)

```bash
npm run dev
```

To use another port run

```bash
npm run dev -- -p 3456
```

To run development server for back end - open new terminal, navigate to server and run

```bash
npm run build
```

Then open another terminal, navigate to server and run

```bash
npm run dev
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

## Design & implementation

See the [Getting Started](#Getting-Started) section above for instructions on running back end server

My approach for this challenge was to have the server send a request to the CF API to retrieve contracts between a certain date, retrieve the data about the contracts from the response and then send it back to the 'client' to be presented in a useful format.

When the page loads, the client sends a fetch request to the server which calls a controller function that sends a fetch request to the CF API for the first 1000 contracts posted in the last week (given more time I would have liked to have the client make another call for the next 1000 contracts if the user scrolls to the bottom of the current list). The server then responds to the client with an array of the retrieved contracts.
I chose to render contracts for the last week when the page loads to make it clear what the page is doing. And to avoid presenting the user with a blank page on their first use.

The array of contracts is then handed to a list component. The list component maps through each contract, handing the contract to a 'list item' which returns a card component presenting the data in a easily readable form.

The client also renders a form with two date inputs. These inputs allow the user to choose the date range they would like to retrieve contracts from. After entering dates and hitting submit the list of contracts is re-rendered. At the moment there is no form validation for this input, given more time I would like to add this.

Finally the client renders a text input (search bar) for filtering the results by whether there is a match with a regular expression in the contracts description.
When the input is changed a the contents of the text input is converted to a regular expression and the rendered contracts are filtered before being handed to the list component. The array of contracts is not mutated.
