import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { MdPlayArrow } from "react-icons/md";

import { Button, ButtonProps, ButtonIcon } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnType: "primary",
  children: "Button",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  btnType: "primary",
  children: (
    <>
      <ButtonIcon>
        <MdPlayArrow />
      </ButtonIcon>
      Play
    </>
  ),
};
