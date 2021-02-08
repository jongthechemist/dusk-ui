import React from "react";

import { ColorPalette } from "./Color";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Util/Color",
} as Meta;

const ColorPaletteItem = (props: {
  label: string;
  color: string;
  name: string;
}) => (
  <div
    style={{
      width: 200,
      paddingRight: 40,
      paddingBottom: 80,
    }}
  >
    <div
      style={{
        backgroundColor: props.color,
        backgroundImage: props.color,
        border: props.label.toLowerCase().includes("background")
          ? `${ColorPalette.SECONDARY_BORDER} solid 1px`
          : "none",
        width: 160,
        height: 60,
        borderRadius: 8,
      }}
    ></div>
    <p
      style={{ color: ColorPalette.PRIMARY_COLOR, whiteSpace: "break-spaces" }}
    >
      {props.color.toUpperCase()}
    </p>
    <p
      style={{
        color: ColorPalette.SECONDARY_COLOR,
        whiteSpace: "break-spaces",
      }}
    >
      {props.label}
      <br />
    </p>
    JS: <code>{`ColorPalette.${props.name}`}</code>
    <br/>
    CSS: <code>{`var(--${props.name.toLowerCase()})`}</code>
  </div>
);

const PALETTE_DETAILS: {
  color: keyof typeof ColorPalette;
  description: string;
}[] = [
  {
    color: "SECONDARY_COLOR",
    description: "Footer navigation, paragraph text",
  },
  {
    color: "TERTIARY_COLOR",
    description: "Footer navigation sec., member icons",
  },
  {
    color: "SECONDARY_BORDER",
    description: "Border for secondary buttons",
  },
  {
    color: "TERTIARY_BACKGROUND",
    description: "Third background",
  },
  {
    color: "SECONDARY_BACKGROUND",
    description: "Secondary background",
  },
  {
    color: "PRIMARY_BACKGROUND",
    description: "Primary background",
  },
  {
    color: "PRIMARY_ACCENT",
    description: "Capital headers, highlight line",
  },
  {
    color: "PRIMARY_GRADIENT",
    description: "Primary buttons, community icons",
  },
];

export const Palette = () => (
  <article>
    <header>
      <h3>Color palette</h3>
    </header>
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {PALETTE_DETAILS.map(({ color, description }) => (
        <ColorPaletteItem
          key={color}
          label={description}
          color={ColorPalette[color]}
          name={color}
        />
      ))}
    </section>
  </article>
);
