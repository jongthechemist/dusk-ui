import React from "react";

import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Util/Typography",
} as Meta;

const TypographyItem = (props: {
  label: string;
  description: string;
  tag: keyof JSX.IntrinsicElements;
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    }}
  >
    <props.tag>{props.label}</props.tag>
    <p
      style={{
        color: "var(--secondary_text)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.description}
    </p>
  </div>
);

const TYPOGRAPHY_DETAILS: {
  tag: keyof JSX.IntrinsicElements;
  label: string;
  description: string;
}[] = [
  {
    tag: "h1",
    label: "Heading 1",
    description: "Banner text",
  },
  {
    tag: "h2",
    label: "Heading 2",
    description: "Main header",
  },
  {
    tag: "h3",
    label: "Heading 3",
    description: "Capital header, Labels",
  },
  {
    tag: "h4",
    label: "Heading 4",
    description: "Large paragraph text",
  },
  {
    tag: "h5",
    label: "Heading 5",
    description: "Paragraph titles",
  },
  {
    tag: "h6",
    label: "Heading 6",
    description: "Paragraph subtitles",
  },
  {
    tag: "p",
    label: "Paragraph",
    description: "Paragraph text",
  },
];

export const Headings = () => (
  <article>
    <header>
      <h3>Typography</h3>
    </header>
    <section>
      {TYPOGRAPHY_DETAILS.map(({ tag, label, description }) => (
        <TypographyItem
          key={tag}
          label={label}
          description={description}
          tag={tag}
        />
      ))}
    </section>
  </article>
);

export const Paragraphs = () => (
  <article>
    <header>
      <h4>Paragraphs</h4>
    </header>
    <section>
      <p style={{ maxWidth: 400 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute <code>irure dolor in reprehenderit</code> in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
    <section>
      <p style={{ maxWidth: 400 }}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </section>
  </article>
);
