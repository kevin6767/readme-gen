// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # <https://${data.github}.github.io/${data.title}>
  #### Table of Contents
  
  - [Description](https://github.com/${data.github}/${data.title}#description)
  
  - [Liscenses](https://github.com/${data.github}/${data.title}#liscenses)
  
  - [Usages](https://github.com/${data.github}/${data.title}#usages)
  
  - [Installation](https://github.com/${data.github}/${data.title}#installation)
  
  - [Questions](https://github.com/${data.github}/${data.title}#questions)

  # Description
  ${data.description}
  # Liscenses
  ${data.liscenses}
  # Usages
  ${data.usage}
  # Installation
  ${data.installation}
  # Questions
  If you have anymore questions and would like to reach me here is my github profile <https://github.com/${data.github}>
  <br>
  For another questions you can reach me here <${data.email}>
  `;

}

module.exports = generateMarkdown;
