const fs = require("fs");
const inquire = require("inquirer");
// need to add readfile and writefile with fs function need to add readme.md using the fs and inquirer to do the questions

// inquire to generate questions
inquire
  .prompt([
    {
      type: "input",
      message: "What is the title",
      name: "Title",
    },
    {
      type: "input",
      message: "What is your app about",
      name: "Description",
    },
    {
      type: "input",
      message: "how to install this app",
      name: "Installation",
    },
    {
      type: "input",
      message: "Any spacial way to use your app",
      name: "Usage",

    },
    {
      type: "list",
      message: "What license was used",
      name: "license",
      choices: [
        {name: "GNU AGPLv3"},
        {name: "GNU GPLv3"},
        {name: "GNU LGPLv3"},
        {name: "Mozilla Public 2.0"},
        {name: "Apache 2.0"},
        {name: "MIT"},
        {name: "Boost Software 1.0"},
        {name: "The Unlicense"},
        "none",
    ]
    },
    {
      type: "input",
      message: "Who helped on this project",
      name: "Contributing",
    },
    {
      type: "input",
      message: "Tests made",
      name: "Tests"
    },
    {
      type: "input",
      message: "For questions and support contact",
      name: "Questions"
    },
    {
      type: "input",
      message: "E-mail",
      name: "email"
    },
    {
      type: "input",
      message: "Github Username",
      name: "git"
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
      const templete = `# ${Title}
       
      ## Table of Contents
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [Demo](#demo)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Contact](#contact)
      
      ## Description
      ${Description}
      
      ## Installation
      ${Installation}
      
      ## Usage 
      ${Usage}

      ## License
      ${license}
      
      ## Contributing
      ${Contributing}
      
      ## Tests
      ${Tests}

      ##Questions
      ${Questions}
      
      ## Contact
      **E-mail**: ${email}
      **GitHub**: [https://github.com/${git}](https://github.com/${git})
    `;

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
