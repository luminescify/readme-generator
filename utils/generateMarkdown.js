// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (data == 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;

    } else if (data == 'APACHE 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;

    } else if (data == 'GPL 3.0') {
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]`;

    } else if (data == 'BSD 3') {
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;

    } else if (data == 'None') {
      return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data == 'MIT') {
    return `${renderLicenseBadge}(https://opensource.org/licenses/MIT)`;

  } else if (data == 'APACHE 2.0') {
    return `${renderLicenseBadge}(https://opensource.org/licenses/Apache-2.0)`;

  } else if (data == 'GPL 3.0') {
    return `${renderLicenseBadge}(https://www.gnu.org/licenses/gpl-3.0)`;

  } else if (data == 'BSD 3') {
    return `${renderLicenseBadge}(https://opensource.org/licenses/BSD-3-Clause)`;

  } else if (data == 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    renderLicenseLink();
    if (data === '') {
      return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let markdownRender = `
  # ${data.title}

  ![License Badge](https://img.shields.io/static/v1?label=License&message=${data.license.split(' ').join('-')}&color=success)

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
  To install the necessary dependencies for this project, runt he following command:

  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  This application is licensed under ${data.license}.

  ## Contribution

  ${data.contribution}

  ## Testing

  ${data.testing}

  ---
  
  ## Questions?
  For any questions, please contact me via e-mail. Thank you!
  GitHub: ${data.github}
  E-mail: ${data.email}
  
`;
  return markdownRender;
}

module.exports = generateMarkdown;
