import React, { useEffect, useState } from "react";
import Pagination from "../../Pagination";
import { Card, Button } from "semantic-ui-react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import ownCode from '!!raw-loader!./AwesomeProducts.js';

const AwesomeProducts = () => {
  const [{ limit, offset }, setPagination] = useState({ limit: 18, offset: 0 });
  const [{ total, products }, setProducts] = useState({
    total: 0,
    products: [],
  });

  useEffect(() => {
    const doEffect = async () => {
      const productsResponse = await (
        await fetch(`/product?limit=${limit}&offset=${offset}`, {
          method: "get",
        })
      ).json();
      setProducts(productsResponse);
    };

    doEffect();
  }, [limit, offset]);
  return (
    <>
      <div className="AwesomeProducts">
        {products.map((product) => (
          <Card fluid key={product.id} style={{ margin: 0 }}>
            <Card.Content textAlign="center">
              <Card.Header>{product.name}</Card.Header>
              <Card.Meta>£ {product.price}</Card.Meta>
            </Card.Content>
            <Card.Content extra textAlign="center">
              <Button>Buy Now</Button>
            </Card.Content>
          </Card>
        ))}
      </div>
      <Pagination {...{ limit, offset, total }} onChange={setPagination} />
    </>
  );
};

export default AwesomeProducts;

/* EXCLUDE */
AwesomeProducts.code = ownCode.replace(/(\/\*\sEXCLUDE\s\*\/[\W\w]*\/\*\s\/EXCLUDE\s\*\/)|([\n]*import\sownCode.*\n)|([\n]*\/\/\seslint-disable.*\n)/g, '');
/* /EXCLUDE */