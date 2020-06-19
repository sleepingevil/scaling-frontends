import React from "react";
import AwesomeProducts from "./AwesomeProducts";
import { Container, Header, Label } from "semantic-ui-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai as style } from "react-syntax-highlighter/dist/esm/styles/prism";
// eslint-disable-next-line import/no-webpack-loader-syntax
import ownCode from "!!raw-loader!./MyPage.js";

const MyPage = () => (
  <main style={{ textAlign: "left" }}>
    <Container as="header" style={{ padding: "30px" }} textAlign="center">
      <Header as="h1">
        Awesome Products with Functional Component
        <Header.Subheader>
          <Label color="red">Bad</Label>
        </Header.Subheader>
      </Header>
    </Container>
    <Container className="body">
      <AwesomeProducts />
      <Header as="h3">MyPage.js</Header>
      <SyntaxHighlighter language="javascript" style={style}>
        {code}
      </SyntaxHighlighter>
      <Header as="h3">AwesomeProducts.js</Header>
      <SyntaxHighlighter language="javascript" style={style}>
        {AwesomeProducts.code}
      </SyntaxHighlighter>
    </Container>
  </main>
);

export default MyPage;

/* EXCLUDE */
export const code = ownCode.replace(
  /(\/\*\sEXCLUDE\s\*\/[\W\w]*\/\*\s\/EXCLUDE\s\*\/)|([\n]*import\sownCode.*\n)|([\n]*\/\/\seslint-disable.*\n)/g,
  ""
);
/* /EXCLUDE */
