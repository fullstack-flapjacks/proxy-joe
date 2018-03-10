module.exports = {
  extends: ["plugin:jsx-a11y/recommended", "airbnb"],
  plugins: ["jsx-a11y"],
  rules: {
    "no-console": "off",
    "no-undef": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "no-unused-vars": "off",
  },
  env: { browser: true }
};