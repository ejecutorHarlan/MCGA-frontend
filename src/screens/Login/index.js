import React from 'react';
import Link from '../../components/Link';
import styles from './login.module.css';
import buttonStyles from './constants';

const Login = () => {
  return (
    <div className={styles.container}>
      <div>Login</div>
      <Link text={'Ingresarrr'} to={'/'}  customStyle={buttonStyles} />
    </div>
  );
};

export default Login;
