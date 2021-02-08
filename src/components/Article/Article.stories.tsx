import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Article, ArticleProps } from "./Article";
import { SimpleIcon } from "../Icon";
import { BsFilm, BsHouseDoor, BsInbox, BsWallet } from "react-icons/bs";

const IconOptions = { BsFilm, BsHouseDoor, BsInbox, BsWallet };

export default {
  title: "Components/Article",
  component: Article,
  argTypes: {
    header: {
      type: { name: "string", required: false },
    },
    icon: {
      control: {
        type: "select",
        options: ["BsFilm", "BsHouseDoor", "BsInbox", "BsWallet"],
      },
    },
    ref: {
      table: { disable: true },
    },
  },
} as Meta;

export const Plain: Story<ArticleProps> = () => (
  <main>
    <header>
      <h3>Plain article</h3>
    </header>
    <Article style={{ maxWidth: 400 }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Article>
  </main>
);

export const WithHeader: Story<ArticleProps> = (args: ArticleProps) => (
  <main>
    <header>
      <h3>Article with header</h3>
    </header>
    <Article header={args.header} style={{ maxWidth: 400 }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Article>
  </main>
);
WithHeader.args = {
  header: "This is header",
};
WithHeader.argTypes = {
  icon: { table: { disable: true } },
};

export const WithIcon: Story<ArticleProps> = (args: ArticleProps) => {
  const Icon =
    IconOptions[args.icon as "BsFilm" | "BsHouseDoor" | "BsInbox" | "BsWallet"];
  return (
    <main>
      <header>
        <h3>Article with icon</h3>
      </header>
      <Article
        icon={
          <SimpleIcon type="primary">
            <Icon />
          </SimpleIcon>
        }
        header={args.header}
        style={{ maxWidth: 400 }}
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
    </main>
  );
};
WithIcon.args = {
  header: "With header and icon",
  icon: "BsFilm",
};
