const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require(inquirer);
const fs = require(fs);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project's title.",
    name: "title",
  },
  {
    type: "input",
    message:
      "Enter a description of your project: -What was your motivation? -Why did you build this project? -What problem does it solve? -What did you learn?",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
    name: "credits",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markDown = generateMarkdown(data);

  fs.writeFile(fileName, markDown, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
