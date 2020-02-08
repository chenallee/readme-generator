const formatMarkdown = responseData => {
  let descText;
  let tocText = '';
  let tocArr;
  let installText;
  let usageText;
  let licenseBadge;
  
  let emailText;

  if (!responseData.confirmDesc){
    descText = ``;
  } else {
    descText = `### Description:

    ${responseData.description}`;
  }

  if(responseData.confirmTOC){
    tocArr = [`* [License](#license) \n`, `* [Contact](#contact)`];
  }

  if (responseData.confirmUse){
    usageText = 
    `### Usage

    ${responseData.usage}`;
    tocArr.unshift(`* [Usage](#usage) \n`);
    
  } else {
    usageText = ``;
  }

  if (responseData.confirmInstall){
    installText = 
    `### Installation:

    ${responseData.installation}`;
    tocArr.unshift(`* [Installation](#install) \n`);
  } else {
    installText = ``;
  }

  if (responseData.license === 'Apache License 2.0'){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (responseData.license === 'GNU GPLv3') {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (responseData.license === 'MIT') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (responseData.license === 'ISC') {
    licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }

  if (!responseData.githubData.email){
    emailText = ``;
  } else {
    emailText = `Email: [${responseData.email}](mailto:${responseData.email})`
  }
  
  if (tocArr){
    tocArr = tocArr.join('');
    tocText = `### Table of Contents
  
    \n${tocArr}`;
  }

  return `
  # ${responseData.title}

  ${descText}

  ${tocText}

  ${installText}

  ${usageText}

  ### License: \n
  ${licenseBadge}

  ### Contact: \n
  ![Avatar for ${responseData.username} on Github](${responseData.githubData.avatar_url}) \n

  Github: [${responseData.username}](${responseData.githubData.html_url})
  ${emailText}

  `;
};

module.exports = formatMarkdown;