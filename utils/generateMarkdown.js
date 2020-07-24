// function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contribute, ...contact } = data;
  return `# ${title}
          # Table of Contents
          1. [Description](#description)
          2. [Installation](#installation)
          3. [Usage](#usage)
          4. [License](#license)
          5. [Contact](#contact)
          ## Description <a name="description"></a> ${description}
          # ${installation}
          # ${usage}
          # ${license}
          # ${contact}
  `;
}

module.exports = generateMarkdown;
