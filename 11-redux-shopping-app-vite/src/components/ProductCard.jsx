import React from "react";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const ProductCard = ({ product }) => {
  //redux veriables
  const dispatch = useDispatch();

  //add to cart handler
  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
  };

  // main component
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <img
        className='rounded-t-lg p-1 object-cover h-52 w-96'
        src={product.image}
        alt={product.title}
      />
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {product.title}
        </h5>
        <button
          onMouseDown={() => handleAddtoCart(product)}
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
