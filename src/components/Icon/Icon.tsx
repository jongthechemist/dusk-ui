import styled from "styled-components";

export type IconProps = React.ComponentProps<"span"> & {
  /**
   * Type of button
   */
  type?: "primary" | "secondary" | "outline" | "plain";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
};

export const Icon: React.FC<IconProps> = styled.span.attrs(
  (props: IconProps) => ({
    className: [
      `dusk-ui-icon`,
      `dusk-ui-icon--${props.type}`,
      `dusk-ui-icon--${props.size}`,
      props.className || "",
    ].join(" "),
  })
)<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &.dusk-ui-icon {
    &--primary {
      background-image: var(--vertical_gradient);
      color: var(--primary_text);
      transition: background-position ease-in-out 200ms;
      box-shadow: -10px 10px 15px -3px rgba(100, 5, 255, 0.1),
        0 3px 3px 0px rgba(0, 0, 0, 0.5);
      transition: box-shadow ease-in-out 200ms;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        transition: box-shadow ease-in-out 200ms;
        z-index: 0;
      }
      > svg {
        transition: transform ease-in-out 200ms;
        z-index: 1;
      }
      &:hover {
        box-shadow: -10px 15px 25px -3px rgba(100, 5, 255, 0.1),
          0 6px 3px 0px rgba(0, 0, 0, 0.5);
        > svg {
          transform: translate(0, -2px);
        }
        &.dusk-ui-icon--small:before {
          box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.3);
        }
        &.dusk-ui-icon--medium:before {
          box-shadow: 0 15px 20px 20px rgba(0, 0, 0, 0.3);
        }
        &.dusk-ui-icon--large:before {
          box-shadow: 0 20px 30px 30px rgba(0, 0, 0, 0.3);
        }
      }
    }
    &--secondary {
      background-color: var(--primary_accent);
      color: var(--primary_text);
      box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.2),
        0 3px 3px 0px rgba(0, 0, 0, 0.5);
      transition: box-shadow ease-in-out 200ms, transform ease-in-out 200ms;
      &:hover {
        transform: translate(0, -2px);
        box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.2),
          0 6px 3px 0px rgba(0, 0, 0, 0.5);
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
        box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.1),
          inset 0px 0px 0px 2px var(--primary_border);
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
      width: 3rem;
      height: 3rem;
      font-size: 1rem;
      > * {
        margin-top: -0.2rem;
      }
    }
    &--medium {
      width: 8rem;
      height: 8rem;
      font-size: 2.5rem;
      > * {
        margin-top: -0.2rem;
      }
    }
    &--large {
      width: 10rem;
      height: 10rem;
      font-size: 4rem;
      > * {
        margin-top: -0.4rem;
      }
    }
  }
`;

Icon.defaultProps = {
  type: "plain",
  size: "medium",
};

export type SimpleIconProps = React.ComponentProps<"span"> & {
  /**
   * Type of button
   */
  type?: "primary" | "secondary" | "outline" | "plain";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
};

export const SimpleIcon: React.FC<SimpleIconProps> = styled.span.attrs(
  (props: SimpleIconProps) => ({
    className: [
      "dusk-ui-simple-icon",
      `dusk-ui-simple-icon--${props.size}`,
      `dusk-ui-simple-icon--${props.type}`,
      props.className || "",
    ].join(" "),
    children: (
      <>
        <svg className="svg-def" width="660" height="220">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary_accent)" />
              <stop offset="100%" stopColor="var(--secondary_accent)" />
            </linearGradient>
          </defs>
        </svg>
        {props.children}
      </>
    ),
  })
)`
  background: none;
  > .svg-def {
    opacity: 0;
    width: 0;
    height: 0;
  }
  &.dusk-ui-simple-icon {
    &--small {
      font-size: 1rem;
    }
    &--medium {
      font-size: 2.5rem;
    }
    &--large {
      font-size: 4rem;
    }
    &--primary {
      > :not(.svg-def) path {
        fill: url(#gradient);
      }
    }
    &--secondary path {
      fill: var(--primary_border);
    }
    &--outline path {
      fill: var(--secondary_border);
    }
    &--plain path {
      fill: var(--primary_text);
    }
  }
`;

SimpleIcon.defaultProps = {
  type: "primary",
  size: "medium",
};
