import React from 'react';
import styles from './layout.module.css';
import Link from '../../components/Link';
//import stylesLogin from './login.module.css';
import buttonStyles from '../../screens/Login/constants';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>MCGA 2022</h1>
      </header>
      {children}
      <footer>
        <h3>Este es el footer. Notas de contacto, telefono, mail</h3>
        <div>
          Para acceder al repositorio haga click en el botón
          <a
            href='https://github.com/ejecutorHarlan/MCGA-Backend/tree/main/MCGA-frontend/mcga-frontend`'
            target='_blank'
          >
            ir
          </a>
          <Link
            text={'Ir'}
            to={
              'https://github.com/ejecutorHarlan/MCGA-Backend/tree/main/MCGA-frontend/mcga-frontend`'
            }
            target='_blank'
            rel='noopener noreferrer'
            customStyle={buttonStyles}
          />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
