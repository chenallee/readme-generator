//
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');

const questions = require('./lib/questions');

//ask user questions
inquirer
  .prompt(questions)
  .then(response => {
    // axios
    // .get() //get email & avatar
    // .then(({data}) => {
    //   //write to file

    // }
    console.log(response);
    console.log(`done`);
  }
  );

//send username to github and get back email and avatar

//