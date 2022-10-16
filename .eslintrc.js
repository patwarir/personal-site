/** @type { import("eslint").ESLint.ConfigData } */
const eslintConfig = {
  extends: "next",
  rules: {
    "comma-dangle": [ "error", "always-multiline" ],
    "indent": [ "error", 2 ],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
  },
};

module.exports = eslintConfig;
