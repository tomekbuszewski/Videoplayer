module.exports = name => `import * as React from 'react';
import renderer from 'react-test-renderer';

import ${name} from './';

describe('${name} tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<${name} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
`;
