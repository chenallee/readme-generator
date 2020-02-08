//
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');

const questions = require('./lib/questions');
const formatMarkdown = require(`./lib/format-markdown`);

//ask user questions
inquirer
  .prompt(questions)
  .then(response => {
    axios
    .get(`https://api.github.com/users/${response.username}`) //get email & avatar
    .then(({data}) => {

      console.log(response);
      const responseData = {...response, githubData: {...data}};
      const markdownFormatted = formatMarkdown(responseData);

      //write to file
      fs.writeFile(`./${response.title}.md`, markdownFormatted, err =>{
        if(err){
          return console.log(err);
        }
        console.log(`Success!`);
      });
    });
  }
  );