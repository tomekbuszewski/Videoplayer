const prompts = require('prompts');
const { existsSync, mkdirSync, writeFileSync } = require('fs');
const { resolve } = require('path');

/** Config variables */
const COMPONENT_NAME_NAME = 'COMPONENT_NAME';
const COMPONENT_TYPE_NAME = 'COMPONENT_TYPE';

const COMPONENT = 'COMPONENT';
const TEST = 'TEST';
const STORY = 'STORY';
const STYLE = 'STYLE';

const STATELESS = 'STATELESS';
const STATEFUL = 'STATEFUL';

const FILES = [
  {
    filename: 'index.js',
    body: COMPONENT,
  },
  {
    filename: 'index.stories.js',
    body: STORY,
  },
  {
    filename: 'index.test.js',
    body: TEST,
  },
  {
    filename: 'index.styles.js',
    body: STYLE,
  },
];

const QUESTIONS = [
  {
    type: 'text',
    name: COMPONENT_NAME_NAME,
    message: 'Name of the component',
  },
  {
    type: 'select',
    name: COMPONENT_TYPE_NAME,
    message: 'Type of component',
    choices: [
      { title: 'stateless', value: STATELESS },
      { title: 'stateful', value: STATEFUL },
    ],
  },
];

const createDir = async (componentType, dirname) => {
  const type = componentType === STATEFUL ? 'containers' : 'components';
  const PATH = resolve('src', type, dirname);

  return new Promise((resolve, reject) => {
    if (!existsSync(PATH)) {
      mkdirSync(PATH);
      resolve(PATH);
    } else {
      reject('Directory exists');
    }
  });
};

const getBody = (body, name, type) => {
  const createComponent = require('./create-component-souce/component-template');
  const createStory = require('./create-component-souce/story-template');
  const createTest = require('./create-component-souce/test-template');
  const createStyles = require('./create-component-souce/styles-template');

  switch (body) {
    case COMPONENT: return createComponent(name, type);
    case STORY: return createStory(name);
    case TEST: return createTest(name);
    case STYLE: return createStyles();
    default: return '';
  }
};

const createFiles = (dir, name, type) => {
  FILES.map(({ filename, body }) => {
    if ((body === STORY || body === STYLE) && type === STATEFUL) { return false; }
    writeFileSync(resolve(dir, filename), getBody(body, name, type));
  });
};

const formatComponentName = (input) => {
  const arr = input.split(' ');

  return arr.map(item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`).join('');
};

const main = async () => {
  const responses = await prompts(QUESTIONS);
  const { COMPONENT_NAME, COMPONENT_TYPE } = responses;
  const REAL_NAME = formatComponentName(COMPONENT_NAME);

  const dir = await createDir(COMPONENT_TYPE, REAL_NAME);
  createFiles(dir, REAL_NAME, COMPONENT_TYPE);
};

main();

module.exports = { STATELESS };
