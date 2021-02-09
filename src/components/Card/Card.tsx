import React from "react";
import styled from "styled-components";

export type CardProps = React.ComponentPropsWithRef<"div"> & {
  type?: "shadow" | "border";
};

export const Card: React.FC<CardProps> = styled.div.attrs(
  (props: CardProps) => ({
    className: [
      `dusk-ui-card`,
      `dusk-ui-card--${props.type}`,
      props.className || "",
    ].join(" "),
  })
)<CardProps>`
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 8px;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 3rem;
  &.dusk-ui-card {
    &--border {
      border-color: var(--secondary_border);
      border-width: 3px;
      border-style: solid;
    }
  }
`;

Card.defaultProps = {
  type: "shadow",
};
