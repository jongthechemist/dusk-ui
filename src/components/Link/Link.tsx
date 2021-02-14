import React from "react";
import styled from "styled-components";

export type LinkProps = React.ComponentPropsWithRef<"a"> & {
  type?: "primary" | "secondary";
};

export const Link: React.FC<LinkProps> = styled.a.attrs((props: LinkProps) => ({
  className: `dusk-ui-link dusk-ui-link-${props.type} ${props.className || ""}`,
  children: <span>{props.children}</span>,
}))<LinkProps>`
  display: inline;
  box-sizing: border-box;
  border-bottom: 3px solid transparent;
  padding-bottom: 0.3rem;

  &.dusk-ui-link-primary {
    color: var(--primary_text);
    text-decoration: none;
    &:hover {
      border-bottom-color: var(--primary_accent);
    }
  }

  &.dusk-ui-link-secondary {
    color: var(--secondary_text);
    text-decoration: none;
    &:hover {
      color: var(--primary_text);
      border-bottom-color: var(--secondary_accent);
    }
  }
`;

Link.defaultProps = {
  type: "primary",
};
