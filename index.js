const fs = require("fs");
const inquire = require("inquirer");
// need to add readfile and writefile with fs function need to add readme.md using the fs and inquirer to do the questions

// inquire to generate questions
inquire.prompt([
  {
    type: "input",
    message: "What is the title",
    name: "Title",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need a title to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is your app about",
    name: "Description",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need a Description to continue";
      }
    },
  },
  {
    type: "input",
    message: "how to install this app",
    name: "Installation",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need instrctions";
      }
    },
  },
  {
    type: "input",
    message: "Any spacial way to use your app",
    name: "Usage",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need a info to continue";
      }
    },
  },
  {
    type: "list",
    message: "What license was used",
    name: "license",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public 2.0",
      "Apache 2.0",
      "MIT",
      "Boost Software 1.0",
      "The Unlicense",
      "none",
    ],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need a license to continue";
      }
    },
  },
  {
    type: "input",
    message: "Who helped on this project",
    name: "Contributing",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need to know who helped";
      }
    },
  },
  {
    type: "input",
    message: "Tests made",
    name: "Tests",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Did you do any test";
      }
    },
  },
  {
    type: "input",
    message: "For questions and support contact",
    name: "Questions",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need info to continue";
      }
    },
  },
  {
    type: "input",
    message: "E-mail",
    name: "email",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need email to continue";
      }
    },
  },
  {
    type: "input",
    message: "Github Username",
    name: "git",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Need github to continue";
      }
    },
  },
])
.then(
  ({
    Title,
    Description,
    Installation,
    Usage,
    license,
    Contributing,
    Tests,
    Questions,
    git,
    email,
  }) => {
    const templete = `
# ${Title}

## Table Of contants
* [Description](#Description)
* [Usage](#Usage)
* [Installation](#Installation)
* [license](#license)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Description
${Description}

## Usage
${Usage}

## Installation

${Installation}

## license
${license}

## Contributing
${Contributing}

## Tests
${Tests}

## Questions
${Questions}

# Contact
- Github: https://github.com/${git}


- E-mail: ${email}`;


    createNewFile(Title, templete);
  }
);

function createNewFile(fileName, data) {
fs.writeFile(
  `./${fileName.toLowerCase().split(" ").join("")}.md`,
  data,
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Your README.MD is ready`);
  }
);
}
