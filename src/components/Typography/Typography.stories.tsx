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
