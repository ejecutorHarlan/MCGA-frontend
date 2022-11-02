import {
  showProducts,
  // dismissLoadingProducts,
  // setLoadingProducts,
  setProducts,
  setProductsLoading,
  dismissProductsLoading,
} from './actions';

export const setProductsThunk = async (dispatch) => {
  dispatch(setProductsLoading());
  const response = await fetch('http://localhost:3000/api/products');
  // console.log('response: ', response);
  const data = await response?.json();
  if (data) {
    dispatch(setProducts(data.data));
    dispatch(dismissProductsLoading());
    // console.log('Data en el Thunk', data.data);
  }
  if (response.status === 400) {
    dispatch(setProducts([]));
    dispatch(dismissProductsLoading());
  }
  dismissProductsLoading();
};
