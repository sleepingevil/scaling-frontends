import { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
// eslint-disable-next-line import/no-webpack-loader-syntax
import ownCode from '!!raw-loader!./useProducts.js';

const useProducts = () => {
  const [ { limit, offset }, setPagination ] = useState({ limit: 18, offset: 0 });
  const [ { total, products }, setProducts ] = useState({ total: 0, products: [] });

  useEffect(() => {
    const doEffect = async () => {
      const { total, products } = await getProducts(limit, offset);
      setProducts({ total, products });
    };
    doEffect();
  }, [limit, offset]);

  return { 
    limit, 
    offset,
    setPagination,
    total,
    products 
  };
};

export default useProducts;

/* EXCLUDE */
export const code = ownCode.replace(/(\/\*\sEXCLUDE\s\*\/[\W\w]*\/\*\s\/EXCLUDE\s\*\/)|([\n]*import\sownCode.*\n)|([\n]*\/\/\seslint-disable.*\n)/g, '');
/* /EXCLUDE */