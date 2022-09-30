/** @type { import("postcss").Postcss } */
const postcssConfig = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    "tailwindcss": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      "autoprefixer": {
        flexbox: "no-2009",
      },
      features: {
        "nesting-rules": false,
      },
    },
    "cssnano": {},
  },
};

module.exports = postcssConfig;
