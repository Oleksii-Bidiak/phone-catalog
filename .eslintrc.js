module.exports = {
  extends: ['@mate-academy/eslint-config-react-typescript'],
  rules: {
    'react/display-name': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
  },
};
