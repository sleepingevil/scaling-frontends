import React from 'react';
import { getProducts } from '../services/productService';
// eslint-disable-next-line import/no-webpack-loader-syntax
import ownCode from '!!raw-loader!./withProducts.js'

const withProducts = Component => class extends React.Component {
  state = {
    limit: 18,
    offset: 0,
    total: 0,
    products: [],
  };

  async componentDidMount() {
    this.setState({
      products: await this.getProducts(),
    });
  }

  async getProducts() {
    const productsResponse = await getProducts(this.state.limit, this.state.offset);
    this.setState({
      total: productsResponse.total,
    });
    return productsResponse.products;
  }

  async handlePageChange({ offset, limit }) {
    this.setState({
      offset,
      limit
    }, async () => {
      this.setState({
        products: await this.getProducts(),
      })
    });
  }

  render() {
    return <Component {...{ ...this.state, handlePageChange: this.handlePageChange.bind(this) }}/>;
  }
};

export default withProducts;

/* EXCLUDE */
export const code = ownCode.replace(/(\/\*\sEXCLUDE\s\*\/[\W\w]*\/\*\s\/EXCLUDE\s\*\/)|([\n]*import\sownCode.*\n)|([\n]*\/\/\seslint-disable.*\n)/g, '');
/* /EXCLUDE */