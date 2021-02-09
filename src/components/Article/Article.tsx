import React from "react";
import styled from "styled-components";

export type ArticleProps = React.ComponentPropsWithRef<"article"> & {
  header?: React.ReactNode;
  icon?: React.ReactNode;
};

export const Article: React.FC<ArticleProps> = styled.article.attrs(
  (props: ArticleProps) => ({
    className: `dusk-ui-article ${props.className || ""}`,
    children: (
      <>
        {(props.icon || props.header) && (
          <header>
            {props.icon && <div>{props.icon}</div>}
            {props.header && <h5>{props.header}</h5>}
          </header>
        )}
        {props.children}
      </>
    ),
  })
)<ArticleProps>`
  padding-bottom: 3rem;
  header {
    padding-bottom: 0.5rem;
  }
`;
