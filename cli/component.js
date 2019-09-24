const fs = require('fs');
const path = require('path');

const minimist = require('minimist');
const args = minimist(process.argv, {
  alias: { path: 'p' },
});

const arrPath = args.path.split('/');
const componentName = arrPath.splice(-1, 1)[0];

fs.mkdirSync(path.resolve(__dirname, '..', ...arrPath, componentName));

const componentCode = `import React from 'react';
import css from './${componentName}.module.scss';

const ${componentName} = () => {
  return (
    <div className={css.container}>
    </div>
  );
};

export default ${componentName};
`;

fs.writeFileSync(
  path.resolve(__dirname, '..', ...arrPath, componentName, `${componentName}.jsx`),
  componentCode,
);

fs.writeFileSync(
  path.resolve(__dirname, '..', ...arrPath, componentName, 'index.js'),
  `export { default } from './${componentName}';
`,
);

fs.writeFileSync(
  path.resolve(__dirname, '..', ...arrPath, componentName, `${componentName}.module.scss`), '',
);

