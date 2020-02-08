module.exports = [
  {
    type: 'input',
    message: 'Welcome to the Readme Generator! Enter your project title: ',
    name: 'title',
    validate: function (titleInput) {
      if (titleInput) {
        return true;
      }
      return false;
    }
  },
  {
    type: 'confirm',
    message: 'Do you want to add a description?',
    name: 'confirmDesc',
    default: false
  },
  {
    type: 'input',
    message: 'Description goes here: ',
    name: 'description',
    validate: function (descInput) {
      if (descInput) {
        return true;
      }
      return false;
    },
    when: function (confirm) {
      return confirm.confirmDesc;
    }
  },
  {
    type: 'confirm',
    message: 'Do you want to add an installation guide?',
    name: 'confirmInstall',
    default: false
  },
  {
    type: 'input',
    message: 'Cool. How do we set this up?: ',
    name: 'installation',
    validate: function (installInput) {
      if (installInput) {
        return true;
      }
      return false;
    },
    when: function (confirm) {
      return confirm.confirmInstall;
    }
  },
  {
    type: 'confirm',
    message: 'Do you want to add a usage guide?',
    name: 'confirmUse',
    default: false
  },
  {
    type: 'input',
    message: 'Sweet. How do I use this?: ',
    name: 'usage',
    validate: function (useInput) {
      if (useInput) {
        return true;
      }
      return false;
    },
    when: function (confirm) {
      return confirm.confirmUse;
    }
  },
  {
    type: 'list',
    message: 'What flavor is your license?',
    choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC'],
    name: 'license'
  },
  {
    type: 'input',
    message: 'Great! Now give us your Github username: ',
    name: 'username',
    validate: function (nameInput) {
      if (nameInput) {
        return true;
      }
      return false;
    }
  },
  {
    type: 'confirm',
    message: 'Last one: want us to generate a table of contents?',
    name: 'confirmTOC'
  }
];