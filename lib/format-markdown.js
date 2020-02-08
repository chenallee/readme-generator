const formatMarkdown = responseData => {
  let descText;
  let tocText;
  let installText;
  let usageText;
  
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

    ${responseData.install}`;
    tocArr.unshift(`* [Install](#install) \n`);
  } else {
    installText = ``;
  }

  if (!responseData.githubData.email){
    emailText = ``;
  } else {
    emailText = `Email: [${responseData.email}](mailto:${responseData.email})`
  }

  tocArr = tocArr.join('');
  tocText = `### Table of Contents

  ${tocArr}`;

  return `
  # ${responseData.title}

  ${descText}

  ${tocText}

  ${installText}

  ${usageText}

  ### License: \n
  ${responseData.license}

  ### Contact: \n
  ![Avatar for ${responseData.username} on Github](${responseData.githubData.avatar_url}) \n

  Github: [${responseData.username}](${responseData.githubData.html_url})
  ${emailText}

  `;
};

module.exports = formatMarkdown;