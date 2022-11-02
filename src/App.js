import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Products from './screens/Products';
import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsThunk } from './redux/Products/thunks';
//import { setProducts, isLoadingProducts } from './redux/Products/actions';
import { useEffect } from 'react';
import ButtonShared from './components/sharedButton';
import sharedButtonCSS from '../src/components/sharedButton';
import InputShared from './components/sharedInput';
import FormShared from './components/sharedForm';
import Styles from './components/Layout/layout.module.css';
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const mail = watch('mail');
  console.log(mail);
  const pass = watch('pass');
  console.log(pass);

  const dispatch = useDispatch();
  const { products, isLoadingProducts } = useSelector(
    (state) => state.products
  );
  // const { products, isLoadingProducts } = useSelector(
  //   (state) => state.products
  // );
  // console.log('productosssss', products);
  // console.log(isLoadingProducts);
  // console.log('shared ->', sharedButtonCSS);

  useEffect(() => {
    dispatch(() => setProductsThunk(dispatch));
  }, [dispatch]);

  // if (isLoadingProducts) return <div> Cargando </div>;

  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <div className='App'>
        <h1>Hola</h1>
        {/* <p>isLoadingProducts {String(isLoadingProducts)}</p> */}
        {/* <Form /> */}
        {/* {JSON.stringify(products)} */}
        <div> Lista </div>
        {products.map((item) => {
          return (
            <p>
              <b>Nombre:</b> {item.name} - <b>ID:</b> {item._id} -{' '}
              <b>Descripcion:</b> {item.description}
            </p>
          );
        })}
      </div>
      <div>
        {/* <form style={{ border: '5px solid red' }}>
          <ButtonShared
            text='Ingresarrrasasas'
            Click={'/'}
            styleshare={Styles.buttonStyles}
            type={'button'}
          />
          <InputShared
            placeholder={'Email'}
            styleshare={Styles.inputbox}
            type={'text'}
          />
          <InputShared
            placeholder={'Password'}
            styleshare={Styles.inputbox}
            type={'Password'}
          />
        </form> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputShared
            placeholder={'Email'}
            styleshare={Styles.inputbox}
            type={'text'}
            register={register}
            name={'mail'}
          />
          <InputShared
            placeholder={'Password'}
            styleshare={Styles.inputbox}
            type={'Password'}
            register={register}
            name={'pass'}
          />
          <ButtonShared
            text='Enviar'
            // Click={'/'}
            styleshare={Styles.buttonStyles}
            type={'submit'}
          />
        </form>
      </div>
    </Layout>
  );
};
export default App;
