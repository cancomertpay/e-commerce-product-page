import React from "react";
// dummy-datas
import data from "../../data/dummy-product";
// styles
import classes from "./Main.module.css";
// components
import Product from "./Product";

function Main() {
  return (
    <main className={classes.main}>
      {data.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          brand={item.brand}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
          thumbnail={item.thumbnail}
          discount={item.discount}
        />
      ))}
    </main>
  );
}

export default Main;
