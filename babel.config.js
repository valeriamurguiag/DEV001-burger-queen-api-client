// {
//     "presets": ["@babel/preset-env", "@babel/preset-react"],
//     "plugins": []
//   }

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", {runtime: "automatic"}],
  ],
}