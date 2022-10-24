module.exports = {
  "stories": [
    "../src/components/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": { "builder": "@storybook/builder-webpack5" }
}
