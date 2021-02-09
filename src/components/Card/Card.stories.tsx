import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card, CardProps } from "./Card";
import { Article } from "../Article";
import { SimpleIcon } from "../Icon";
import { BsFilm } from "react-icons/bs";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    ref: {
      table: { disable: true },
    },
  },
} as Meta;

export const Shadow: Story<CardProps> = (args: CardProps) => (
  <main>
    <header>
      <h3>Plain Card</h3>
    </header>
    <Card type={args.type} style={{ maxWidth: 400 }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Card>
  </main>
);
Shadow.args = {
  type: "shadow",
};

export const Border: Story<CardProps> = (args: CardProps) => (
  <main>
    <header>
      <h3>Plain Card</h3>
    </header>
    <Card type={args.type} style={{ maxWidth: 400 }}>
      <Article
        icon={
          <SimpleIcon>
            <BsFilm />
          </SimpleIcon>
        }
        header={"Article 1"}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </Article>
    </Card>
  </main>
);
Border.args = {
  type: "border",
};
