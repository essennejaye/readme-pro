// function to generate markdown for README
function generateMarkdown(data) {
  const {github, email, title} = data;
  return `# ${title}
          ** ${email}
          ** ${github}
  `;
}

module.exports = generateMarkdown;
