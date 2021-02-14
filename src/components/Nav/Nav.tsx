import React from "react";
import styled from "styled-components";

export type NavProps = React.ComponentPropsWithRef<"nav"> & {
  type?: "plain" | "shadow";
  brand?: React.ReactNode;
};

export const Nav = styled.nav.attrs((props: NavProps) => ({
  className: ["dusk-ui-nav", `dusk-ui-nav--${props.type}`].join(" "),
  children: (
    <>
      <div className="dusk-ui-nav-brand">{props.brand}</div>
      <div className="dusk-ui-nav-links">{props.children}</div>
    </>
  ),
}))<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  .dusk-ui-nav {
    &-brand {
      padding: 0 3rem 0.3rem 0;
      margin: 0;
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
    }
    &-links {
      display: flex;
      align-items: center;
      > * {
        margin-right: 3rem;
      }
    }
  }
  &.dusk-ui-nav {
    &--shadow {
      background-color: var(--primary_background);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    .dusk-ui-nav {
      &-links {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem 0;
        > * {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

Nav.defaultProps = {
  type: "plain",
};
