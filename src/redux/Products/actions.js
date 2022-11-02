import { SET_LOADING, DISMISS_LOADING, SET_PRODUCTS } from './types';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const setProductsLoading = () => ({
  type: SET_LOADING,
  payload: { isLoadingProducts: true },
});

export const dismissProductsLoading = () => ({
  type: DISMISS_LOADING,
  payload: { isLoadingProducts: false },
});

// import {
//   SET_PRODUCTS,
//   SHOW_PRODUCTS,
//   SET_LOADING,
//   DISMISS_LOADING,
// } from './types';

// export const setProducts = (products) => {
//   console.log(products, 'dentro de action');
//   return {
//     type: SET_PRODUCTS,
//     payload: {
//       products: products,
//     },
//   };
// };

// export const showProducts = () => {
//   return {
//     type: SHOW_PRODUCTS,
//     isLoadingProducts: true,
//   };
// };

// export const dismissLoadingProducts = () => {
//   return {
//     type: DISMISS_LOADING,
//     isLoadingProducts: false,
//   };
// };

// export const setLoadingProducts = () => {
//   return {
//     type: SET_LOADING,
//     isLoadingProducts: true,
//   };
// };
