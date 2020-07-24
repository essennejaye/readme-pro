// function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contribute, ...contact } = data;
  return `# ${title}
          * ${description}
          # ${installation}
          # ${usage}
          # ${license}
          # ${contact}
  `;
}

module.exports = generateMarkdown;
