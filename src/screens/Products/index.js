import React from "react";
import Link from "../../components/Link";
import styles from "./login.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <div>Login</div>
      <Link text={"Ver Productos"} to={"/"} />
    </div>
  );
};

export default Products;
