import React from "react";
import styled from "styled-components";
export type ButtonProps = React.ComponentProps<"button"> & {
  /**
   * Type of button
   */
  btnType?: "primary" | "secondary" | "outline" | "plain";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
};

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = styled.button.attrs(
  (props: ButtonProps) => ({
    className: [
      `dusk-ui-btn`,
      `dusk-ui-btn--${props.size}`,
      `dusk-ui-btn--${props.btnType}`,
      props.className || "",
    ].join(" "),
  })
)<ButtonProps>`
  font-family: "Overpass", sans-serif;
  border-radius: 4px;
  border-width: 0px;
  border-style: inset;
  display: flex;
  align-items: center;
  cursor: pointer;
  > * {
    display: block;
  }
  &.dusk-ui-btn {
    &--primary {
      background-image: var(--primary_gradient);
      color: var(--primary_text);
      transition: background-position ease-in-out 200ms;
      box-shadow: 10px 10px 15px -3px rgba(235, 115, 108, 0.1),
        -10px 10px 15px -3px rgba(100, 5, 255, 0.1),
        0 3px 3px 0px rgba(0, 0, 0, 0.5);
      transition: box-shadow ease-in-out 200ms, transform ease-in-out 100ms;
      &:hover {
        box-shadow: 10px 15px 25px -3px rgba(235, 115, 108, 0.1),
          -10px 15px 25px -3px rgba(100, 5, 255, 0.1),
          0 3px 3px 0px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
      }
    }
    &--secondary {
      background-color: var(--primary_accent);
      color: var(--primary_text);
      box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.2),
        0 3px 3px 0px rgba(0, 0, 0, 0.5);
      transition: box-shadow ease-in-out 200ms, transform ease-in-out 100ms;
      &:hover {
        box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.2),
          0 3px 3px 0px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
      }
    }
    &--outline {
      background-color: transparent;
      color: var(--primary_text);
      box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.1),
        inset 0px 0px 0px 2px var(--primary_border);
      transition: background-color ease-in-out 200ms;
      &:hover {
        background-color: var(--primary_accent);
        background-image: var(--primary_gradient);
        box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.1),
          inset 0px 0px 0px 0px var(--primary_border);
      }
    }
    &--plain {
      background-color: transparent;
      color: var(--primary_text);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3),
        inset 0px 0px 0px 2px var(--secondary_border);
      transition: box-shadow ease-in-out 0ms, background-color ease-in-out 200ms;
      &:hover {
        background-color: var(--contrast_background);
        color: var(--contrast_text);
        box-shadow: 0 15px 25px -3px rgba(0, 0, 0, 0.3),
          inset 0px 0px 0px 2px transparent;
      }
    }
    &--small {
      font-size: 0.8rem;
      padding: 0.8rem 1rem;
    }
    &--medium {
      font-size: 1rem;
      padding: 1.2rem 1.8rem;
    }
    &--large {
      font-size: 1.5rem;
      padding: 1.8rem 2.5rem;
    }
  }
`;

Button.defaultProps = {
  btnType: "plain",
  size: "medium",
};

export type ButtonIconProps = React.ComponentProps<"span">;
export const ButtonIcon: React.FC<ButtonIconProps> = styled.span.attrs(
  (props) => ({
    className: `dusk-ui-btn-icon ${props.className || ""}`,
  })
)`
  ${(Button as any)}.dusk-ui-btn--small & {
    height: 1.5rem;
    font-size: 1.2rem;
    margin: -0.75rem 0;
    padding-right: 0.3rem;
  }
  ${(Button as any)}.dusk-ui-btn--medium & {
    height: 1.8rem;
    font-size: 1.5rem;
    margin: -0.75rem 0;
    padding-right: 0.5rem;
  }
  ${(Button as any)}.dusk-ui-btn--large & {
    height: 2.5rem;
    font-size: 2.2rem;
    margin: -1.25rem 0;
    padding-right: 1rem;
  }
`;
