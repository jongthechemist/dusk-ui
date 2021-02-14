import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Nav, NavProps } from "./Nav";
import { Link } from "../Link";
import { Button, ButtonIcon } from "../Button";
import { BsDownload } from "react-icons/bs";

export default {
  title: "Components/Nav",
  component: Nav,
  argTypes: {
    ref: {
      table: { disable: true },
    },
  },
} as Meta;

export const Plain: Story<NavProps> = (args: NavProps) => (
  <Nav {...args} brand="DUSK">
    <>
      <Link href="#">About</Link>
      <Link href="#">Career</Link>
      <Link href="#">Contact Us</Link>
      <Button btnType="outline">
        <ButtonIcon>
          <BsDownload />
        </ButtonIcon>
        Whitepaper
      </Button>
    </>
  </Nav>
);
Plain.args = {
  type: "plain",
};

export const Shadow: Story<NavProps> = (args: NavProps) => (
  <Nav {...args} brand="DUSK">
    <>
      <Link href="#">About</Link>
      <Link href="#">Career</Link>
      <Link href="#">Contact Us</Link>
      <Button btnType="plain">
        <ButtonIcon>
          <BsDownload />
        </ButtonIcon>
        Whitepaper
      </Button>
    </>
  </Nav>
);
Shadow.args = {
  type: "shadow",
};
