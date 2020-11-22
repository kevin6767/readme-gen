const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

// function to initialize program
function init() {
  console.log(`
  =================
  Add a New Project
  =================
  `);

 
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'liscenses',
        message: 'What liscense are you using? (Check all that apply)',
        choices: ['MIT', 'ISC', 'zLib', 'Eclipse', 'Creative Commons', 'Apache']
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What will you use this project for?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Explain the installation process',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Explain the test process',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github name',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
      },
    ])
    
  };



// function call to initialize program
init()
.then(projectData => {
  return generateMarkdown(projectData)
})
.then(pageHtml => {
  return writeToFile(pageHtml)
})
