import { addons } from "@storybook/addons";
import { create, themes } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: "DUSK UI",
    brandImage: null
  }),
});
