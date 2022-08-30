import React from "react";

type Props = {
  Header?: () => JSX.Element
  Content: () => JSX.Element
  Footer?: () => JSX.Element
}

export const Layout = ({ Header, Content, Footer }: Props) => {
  return (
    <div>
      { Header && Header() }
      { Content() }
      { Footer && Footer() }
    </div>
  )
}