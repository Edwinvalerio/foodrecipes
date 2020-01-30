/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
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
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },{
      type: 'confirm',
      name: 'universal',
      default: true,
      message: 'Do you want to universal import to your component?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
    {type: 'confirm',
      name: 'scss',
      default: true,
      message: 'Do you want to add scss file?',},
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.js',
        templateFile: './component/component.js.hbs',
        abortOnFail: true,
      },
    ];

    // If the user wants i18n messages


    // If the user wants Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/components/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }
    if (data.universal) {
      actions.push({
        type: 'add',
        path: '../../app/components/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      });
    }
    if (data.scss) {
      actions.push({
        type: 'add',
        path: '../../app/components/{{properCase name}}/{{properCase name}}.scss',
        templateFile: './component/style.scss.hbs',
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
