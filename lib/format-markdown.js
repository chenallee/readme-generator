const formatMarkdown = responseData => {
  let descText;
  let tocText;
  let installText;
  let usageText;
  
  let emailText;

  if (!responseData.githubData.email){
    emailText = ``;
  } else {
    emailText = `Email: [${responseData.email}](mailto:${responseData.email})`
  }

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