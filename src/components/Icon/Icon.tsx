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

export const Icon: React.FC<IconProps> = styled.span.attrs((props) => ({
  className: `dusk-ui-icon ${props.className || ""}`,
}))<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  ${(props) => {
    switch (props.type) {
      case "primary":
        return `
          background-image: var(--vertical_gradient);
          color: var(--primary_text);
          transition: background-position ease-in-out 200ms;
          box-shadow: -10px 10px 15px -3px rgba(100, 5, 255, 0.1), 0 3px 3px 0px rgba(0, 0, 0, 0.5);
          transition: box-shadow ease-in-out 200ms;
          &:hover {
            box-shadow: -10px 15px 25px -3px rgba(100, 5, 255, 0.1), 0 3px 3px 0px rgba(0, 0, 0, 0.5);
          }
        `;
      case "secondary":
        return `
          background-color: var(--primary_accent);
          color: var(--primary_text);
          box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.2), 0 3px 3px 0px rgba(0, 0, 0, 0.5);
          transition: box-shadow ease-in-out 200ms;
          &:hover {
            box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.2), 0 3px 3px 0px rgba(0, 0, 0, 0.5);
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: var(--primary_text);
          box-shadow: 0 10px 15px -3px rgba(100, 5, 255, 0.1), inset 0px 0px 0px 2px var(--primary_border);
          transition: background-color ease-in-out 200ms;
          &:hover {
            background-color: var(--primary_accent);
            box-shadow: 0 15px 25px -3px rgba(100, 5, 255, 0.1), inset 0px 0px 0px 2px var(--primary_border);
          }
        `;
      case "plain":
        return `
          background-color: transparent;
          color: var(--primary_text);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), inset 0px 0px 0px 2px var(--secondary_border);
          transition: box-shadow ease-in-out 0ms, background-color ease-in-out 200ms;
          &:hover {
            background-color: var(--contrast_background);
            color: var(--contrast_text);
            box-shadow: 0 15px 25px -3px rgba(0, 0, 0, 0.3), inset 0px 0px 0px 2px transparent;

          }
        `;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          width: 3rem;
          height: 3rem;
          font-size: 1rem;
          > * {
            margin-top: -0.2rem;
          }
        `;
      case "medium":
        return `
          width: 8rem;
          height: 8rem;
          font-size: 2.5rem;
          > * {
            margin-top: -0.2rem;
          }
        `;
      case "large":
        return `
          width: 10rem;
          height: 10rem;
          font-size: 4rem;
          > * {
            margin-top: -0.4rem;
          }
        `;
    }
  }}
`;

Icon.defaultProps = {
  type: "plain",
  size: "medium",
};
