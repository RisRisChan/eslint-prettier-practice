module.exports = [
  {
    ignores: ["node_modules/", "dist/"], // 無視するフォルダ
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "warn",
      "semi": ["error", "always"]
    },
    "extends": ["airbnb-base"]
  },
];