const path = require('path');
// const micromatch = require('micromatch');
// const prettier = require('prettier');
// const prettierSupportedExtensions = prettier
//   .getSupportInfo()
//   .languages.map(({ extensions }) => extensions)
//   .flat();
// const addQuotes = a => `"${a}"`;

const tsconfigPath = path.join(__dirname, './tsconfig.json');
module.exports = {
  '*.{js,jsx,ts,tsx}': filenames => [`eslint --fix ${filenames.join(' ')}`],
  '*.{ts,tsx}': tsFilenames => [`tsc -p '${tsconfigPath}' --noEmit`],
  // '*': allStagedFiles => {
  //   const prettierFiles = micromatch(
  //     allStagedFiles,
  //     prettierSupportedExtensions.map(extension => `**/*${extension}`)
  //   );
  //   return [`prettier --write ${prettierFiles.map(addQuotes).join(' ')}`];
  // },
  // https://github.com/microsoft/TypeScript/issues/27379
};
