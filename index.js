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
    },
    {
      type: "input",
      message: "Any spacial way to use your app",
      name: "Usage",

    },
    {
      type: "list",
      message: "What license was used",
      name: "License",
      choices: ["License-MIT", "License-Apache_2.0", "License-MPL_2.0","License-ODbL"]
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
      name: "Questions",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Need a E-mail to continue";
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
          return "Need a E-mail to continue";
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
          return "Need a Github to continue";
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
      License,
      Contributing,
      Tests,
      Questions,
      git,
      email,
    }) => {
      const templete = `# ${Title}

## Table_of_Contents

## Description
${Description}
## Installation
${Installation}
## Usage
${Usage}
## License
${License}
## Contributing
${Contributing}
## Tests
${Tests}
## Questions
${Questions}

# Contact
###GitHub: ${git}
###E-mail: ${email}`;

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
