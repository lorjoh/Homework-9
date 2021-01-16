// function to generate markdown for README
function generateMarkdown(data, githubData) {
  return `# **${data.title}**
  ${data.badge}

  ## Description 
  ${data.description}

  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Licence
  ${data.licence}
  
  ## Contributors
  ${data.contributing}
  
  ## Test
  ${data.test}
  
  ## Repository
  - [Project Repo](${data.repo})
  
  ![Image of me](${githubData.Img})
  - ${githubData.name}
  - [GitHub Profile](${githubData.profile})
  - <${githubData.email}>

  // ![user image](${githubData.image})
  // ### ${githubData.email !== null ? "[" + githubData.email + "](mailto:" + githubData.email + ")" : "This email is private."}  
  // `;
  }

module.exports = generateMarkdown;



