import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = useSelector((state) => state.shopping.products);
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 m-5'>
      {products && products.length
        ? products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        : null}
    </div>
  );
};

export default Home;
