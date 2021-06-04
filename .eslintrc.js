const style = require('react-coding-style');

style.tslint.parser = '@typescript-eslint/parser';
style.tslint.rules = {
  ...style.tslint.rules,
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
  'import/order': [
    'warn',
    {
      pathGroups: [
        {
          pattern: '~/**',
          group: 'external',
        },
        {
          pattern: '@/**',
          patternOptions: {
            nocomment: false,
          },
          group: 'external',
          position: 'after',
        },
        {
          pattern: './*.scss',
          group: 'object',
        },
        {
          pattern: './*.less',
          group: 'object',
        },
        {
          pattern: './*.css',
          group: 'object',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
    },
  ],
  'no-useless-escape': 0,
  'no-useless-constructor': 0,
  'jsx-a11y/anchor-is-valid': 0,
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': ['error'],
  'no-console': ['error', { allow: ['warn', 'error'] }],
};
style.eslint.rules = {
  ...style.eslint.rules,
  '@typescript-eslint/no-useless-constructor': 0,
};

module.exports = style.tslint;
