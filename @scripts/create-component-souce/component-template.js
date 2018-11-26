const { userInfo } = require("os");

const { STATELESS } = require("../create-component");

const date = new Date();

const renderBody = `<div>Hello</div>`;
const name = `/**
 * @flow
 * @author ${userInfo().username}
 * @since ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}
 */`;
const imports = `import * as React from 'react';
import inject from 'react-jss';

import styles from './index.styles';`;

const stateless = (component) => `${name}

${imports}

const ${component} = ({ classes }) => (
  ${renderBody}
);

export default inject(styles)(${component});
`;

const stateful = (component) => `${name}

import * as React from 'react';

class ${component} extends React.Component {
  public render() {
    return (
      ${renderBody}
    );
  }
}

export default ${component};
`;

module.exports = (name, type) => type === STATELESS ? stateless(name) : stateful(name);
