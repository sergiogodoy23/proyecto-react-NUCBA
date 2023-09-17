export const SORT_PRODUCTS = 'SORT_PRODUCTS';

export const sortProducts = products => ({
  type: SORT_PRODUCTS,
  payload: products,
});