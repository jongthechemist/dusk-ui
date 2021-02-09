import {
  Tooltip as RTooltip,
  TooltipProps as RTooltipProps,
} from "@reach/tooltip";
import styled from "styled-components";
import "@reach/tooltip/styles.css";

export type TooltipProps = RTooltipProps & {
  type?: "shadow" | "border";
};

export type TooltipContainerProps = React.ComponentPropsWithRef<"div"> & {
  type?: "shadow" | "border";
};

const TooltipContainer: React.FC<TooltipContainerProps> = styled.div.attrs(
  (props: TooltipContainerProps) => ({
    className: [
      `dusk-ui-tooltip-container`,
      `dusk-ui-tooltip-container--${props.type}`,
      props.className || "",
    ].join(" "),
  })
)<TooltipProps>`
  color: var(--primary_text);
  background-color: var(--primary_background);
  background-blend-mode: difference;
  border-radius: 8px;
  box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 1rem;
  &.dusk-ui-tooltip-container {
    &--border {
      border-color: var(--secondary_border);
      border-width: 3px;
      border-style: solid;
    }
  }
`;

export function Tooltip(props: TooltipProps) {
  const { label, children, type, ...rest } = props;
  return (
    <RTooltip
      {...rest}
      style={{
        backgroundColor: "transparent",
        border: "none",
      }}
      label={<TooltipContainer type={type}>{label}</TooltipContainer>}
      className={"dusk-ui-tooltip"}
    >
      {children}
    </RTooltip>
  );
}

Tooltip.defaultProps = {
  type: "shadow",
};
