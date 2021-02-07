import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Link, LinkProps } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args: LinkProps) => (
  <article>
    <header>
      <h3>Link</h3>
    </header>
    <section>
      <Link {...args} />
    </section>
    <section>
      <h5>In a paragraph</h5>
      <p style={{ maxWidth: 400 }}>
        Lorem ipsum dolor sit amet,{" "}
        <Link {...args}>consectetur adipiscing elit</Link>, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, <Link {...args}>quis nostrud exercitation</Link> ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  </article>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: <>How it works</>,
  href: "#",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: <>How it works</>,
  href: "#",
};
