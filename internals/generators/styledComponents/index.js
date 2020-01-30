/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a styled component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'styles',
      default: true,
      message: 'Do you want separate styles to your component?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/index.js',
        templateFile: './styledComponents/index.js.hbs',
        abortOnFail: true,
      },
    ];



    // If the user wants Loadable.js to load the component asynchronously

    if (data.styles) {
      actions.push({
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}Styles.js',
        templateFile: './styledComponents/styles.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/components/',
    });

    return actions;
  },
};
