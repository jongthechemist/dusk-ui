import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  AiOutlineMessage,
  AiOutlinePhone,
  AiOutlineTeam,
  AiOutlineMobile,
} from "react-icons/ai";
import {
  BsController,
  BsCompass,
  BsAppIndicator,
  BsHouseDoor,
} from "react-icons/bs";

import { Icon, IconProps, SimpleIcon, SimpleIconProps } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => (
  <article>
    <header>
      <h3>Icons</h3>
    </header>
    <section style={{ display: "flex", marginBottom: 20 }}>
      <Icon {...args} style={{ marginRight: 20 }}>
        <AiOutlineMessage />
      </Icon>
      <Icon {...args} style={{ marginRight: 20 }}>
        <AiOutlinePhone />
      </Icon>
      <Icon {...args} style={{ marginRight: 20 }}>
        <AiOutlineTeam />
      </Icon>
      <Icon {...args} style={{ marginRight: 20 }}>
        <AiOutlineMobile />
      </Icon>
    </section>
    <section style={{ display: "flex" }}>
      <Icon {...args} style={{ marginRight: 20 }}>
        <BsController />
      </Icon>
      <Icon {...args} style={{ marginRight: 20 }}>
        <BsCompass />
      </Icon>
      <Icon {...args} style={{ marginRight: 20 }}>
        <BsAppIndicator />
      </Icon>
      <Icon {...args} style={{ marginRight: 20 }}>
        <BsHouseDoor />
      </Icon>
    </section>
  </article>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Simple: Story<SimpleIconProps> = (args) => (
  <article>
    <header>
      <h3>Simple Icons</h3>
    </header>
    <section style={{ display: "flex", marginBottom: 20 }}>
      <SimpleIcon {...args} style={{ marginRight: 20 }}>
        <AiOutlineMessage />
      </SimpleIcon>
      <SimpleIcon {...args} style={{ marginRight: 20 }}>
        <AiOutlinePhone />
      </SimpleIcon>
      <SimpleIcon {...args} style={{ marginRight: 20 }}>
        <AiOutlineTeam />
      </SimpleIcon>
      <SimpleIcon {...args} style={{ marginRight: 20 }}>
        <AiOutlineMobile />
      </SimpleIcon>
    </section>
    <section style={{ display: "flex" }}>
      <SimpleIcon {...args} style={{ marginRight: 20 }}>
        <BsController />
      </SimpleIcon>
      <SimpleIcon {...args} style={{ marginRight: 20 }}>
        <BsCompass />
      </SimpleIcon>
      <SimpleIcon {...args} style={{ marginRight: 20 }}>
        <BsAppIndicator />
      </SimpleIcon>
      <SimpleIcon {...args} style={{ marginRight: 20 }}>
        <BsHouseDoor />
      </SimpleIcon>
    </section>
  </article>
);
