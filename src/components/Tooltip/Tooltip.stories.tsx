import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Tooltip, TooltipProps } from "./Tooltip";
import { SimpleIcon } from "../Icon";
import { BsFilm } from "react-icons/bs";
import { Article } from "../Article";
import { Link } from "../Link";
import { Button } from "../Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    label: {
      type: { name: "string", required: false },
    },
    position: {
      table: { disable: true },
    },
  },
} as Meta;

export const Shadow: Story<TooltipProps> = (args: TooltipProps) => (
  <main>
    <header>
      <h3>Shadow Tooltip</h3>
    </header>
    <Tooltip {...args}>
      <SimpleIcon>
        <BsFilm />
      </SimpleIcon>
    </Tooltip>
    <Article header="On a paragraph" style={{ maxWidth: 400 }}>
      <p>
        <Tooltip {...args}>
          <Link type="secondary">Lorem ipsum dolor sit amet</Link>
        </Tooltip>
        , consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Article>
    <Article header="Complex content" style={{ maxWidth: 400 }}>
      <Tooltip
        {...args}
        label={
          <Article
            header="Article in a tooltip"
            icon={
              <SimpleIcon>
                <BsFilm />
              </SimpleIcon>
            }
            style={{ maxWidth: 400, display: "block", overflow: "hidden" }}
          >
            <p style={{ whiteSpace: "pre-wrap" }}>
              Lorem ipsum dolor sit amet , consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Article>
        }
      >
        <Button btnType="outline">Show article</Button>
      </Tooltip>
    </Article>
  </main>
);
Shadow.args = {
  type: "shadow",
  label: "Hello world!",
};

export const Border: Story<TooltipProps> = (args: TooltipProps) => (
  <main>
    <header>
      <h3>Border Tooltip</h3>
    </header>
    <Tooltip {...args}>
      <SimpleIcon>
        <BsFilm />
      </SimpleIcon>
    </Tooltip>
    <Article header="On a paragraph">
      <p>
        <Tooltip {...args}>
          <Link type="secondary">Lorem ipsum dolor sit amet</Link>
        </Tooltip>
        , consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Article>
  </main>
);
Border.args = {
  type: "border",
  label: "Hello world!",
};
