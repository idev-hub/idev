module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier', "stylelint-config-standard-scss"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "value-list-comma-newline-after": "never-multi-line",
    "selector-list-comma-newline-after": "always-multi-line",
    "declaration-colon-newline-after": "always-multi-line",
    "no-empty-source": null
  },
}
