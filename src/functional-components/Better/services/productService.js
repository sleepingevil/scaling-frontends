// eslint-disable-next-line import/no-webpack-loader-syntax
import ownCode from '!!raw-loader!./productService.js';

export const getProducts = async (limit, offset) => (
  await fetch(`/product?limit=${limit}&offset=${offset}`, {
    method: 'get'
  })
).json();

/* EXCLUDE */
export const code = ownCode.replace(/(\/\*\sEXCLUDE\s\*\/[\W\w]*\/\*\s\/EXCLUDE\s\*\/)|([\n]*import\sownCode.*\n)|([\n]*\/\/\seslint-disable.*\n)/g, '');
/* /EXCLUDE */
