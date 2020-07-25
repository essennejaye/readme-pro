// determine if contributing or tests sections are displayed
const createContribute = contributeText => {
  if (!contributeText) {
    return '';
  }
  return `
  ## Contributing
  * ${contributeText}
  https://www.contributor-covenant.org
  `;
};

const createTests = testsText => {
  if (!testsText) {
    return '';
  }
  return `
  ## Tests
  * ${testsText}
  `;
};
// function to determine if contributing or tests are displayed in ToC
const includeSection = (textPresent, sectionTitle) =>{
if (!textPresent) {
  return '';
}
return sectionTitle;
}

// function to generate markdown for README
function generateMarkdown(data) {
  var data = `
  # ${data.title}
  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Table of Contents
  ### <a href='#description'>Description</a>
  ### <a href='#installation'>Installation</a>
  ### <a href='#usage'>Usage</a>
  ### <a href='#license'>License</a>
  ${includeSection(data.contribute, "### <a href='#contribute'>Contributions</a>")}
  ${includeSection(data.tests, "### <a href='#tests'>Tests</a>")}
  ### <a href='#questions'>Questions</a>
  ## Description
  * ${data.description}
  ## Installation
  * ${data.installation}
  ## Usage
  * ${data.usage}
  ## License
  * ${data.license}
  ${createContribute(data.contribute)}
  ${createTests(data.tests)}
  ## Questions
  * For answers to common questions about this project please see my GitHub repository at https://github.com/${data.github} or send questions to ${data.email}. 
  `;
  return data;
}

module.exports = generateMarkdown;
