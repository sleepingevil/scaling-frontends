import React from 'react';
import AwesomeProducts from './AwesomeProducts';
import useProducts, { code as useProductsCode } from './hooks/useProducts';
import { Container, Header, Label } from 'semantic-ui-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { code as productServiceCode } from './services/productService';
// eslint-disable-next-line import/no-webpack-loader-syntax
import ownCode from '!!raw-loader!./MyPage.js';

const MyPage = () => {
    const productsProps = useProducts();

    return (
      <main>
        <Container as="header" style={{ padding: '30px' }} textAlign="center">
          <Header as="h1">
            Awesome Products with Functional Component
            <Header.Subheader><Label color="green">Best</Label></Header.Subheader>
          </Header>
        </Container>
        <Container className="body">
          <AwesomeProducts {...productsProps} />
          <Header as="h3">MyPage.js</Header>
          <SyntaxHighlighter language="javascript" style={style}>
            {code}
          </SyntaxHighlighter>
          <Header as="h3">AwesomeProducts.js</Header>
          <SyntaxHighlighter language="javascript" style={style}>
            {AwesomeProducts.code}
          </SyntaxHighlighter>
          <Header as="h3">services/productService.js</Header>
          <SyntaxHighlighter language="javascript" style={style}>
            {productServiceCode}
          </SyntaxHighlighter>
          <Header as="h3">hooks/useProducts.js</Header>
          <SyntaxHighlighter language="javascript" style={style}>
            {useProductsCode}
          </SyntaxHighlighter>
        </Container>
      </main>
    );
  };

export default MyPage;

/* EXCLUDE */
export const code = ownCode.replace(/(\/\*\sEXCLUDE\s\*\/[\W\w]*\/\*\s\/EXCLUDE\s\*\/)|([\n]*import\sownCode.*\n)|([\n]*\/\/\seslint-disable.*\n)/g, '');
/* /EXCLUDE */
