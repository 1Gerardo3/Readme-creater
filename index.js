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
      name: "License",
      choices: [
        {name: "GNU AGPLv3", value: "AGPL%20v3-blue"},
        {name: "GNU GPLv3", value: "GPLv3-blue"},
        {name: "GNU LGPLv3", value: "LGPL%20v3-blue"},
        {name: "Mozilla Public 2.0", value: "MPL%202.0-brightgreen"},
        {name: "Apache 2.0", value: "Apache%202.0-blue"},
        {name: "MIT",value: "MIT-yellow"},
        {name: "Boost Software 1.0", value: "Boost%201.0-lightblue"},
        {name: "The Unlicense", value: "Unlicense-blue"},
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
      License,
      Contributing,
      Tests,
      Questions,
      git,
      email,
    }) => {
      const templete = `# ${Title}
      ${renderLicenseBadge(License)}
       
      ## Table of Contents
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [Demo](#demo)
      - [Built With](#built-with)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Contact](#contact)
      ${renderLicenseLink(License)}
      
      ## Description
      ${Description}
      
      ## Installation
      ${Installation}
      
      ## Usage 
      ${Usage}
      
      ## Contributing
      ${Contributing}
      
      ## Tests
      ${Tests}

      ##Questions
      ${Questions}
      
      ${renderLicenseSection(License)}
      ## Contact
      **E-mail**: ${email}
      **GitHub**: [https://github.com/${git}](https://github.com/${git})
    `;

      createNewFile(Title, templete);
    }
  );

  function renderLicenseBadge(license) {

    if (license === "none") {
      return "";
    }
  else {
  
    return `![github license](https://img.shields.io/badge/license-${license}.svg)`
  }
  };

  function renderLicenseLink(license) {
    if (license === "none") {
      return "";
    }
    else {
      return "- [License](#license)"
    }
    }

    function renderLicenseSection(license) {
      if (license === "none") {
        return "";
      }
      else {
        return `## License
        For more information on this license, please visit www.opensource.org
        `;
      }
    }


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
