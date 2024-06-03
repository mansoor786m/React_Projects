import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  // console.log(cartProducts);
  const totalPrice = cartProducts.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  console.log(totalPrice);
  return (
    <div className='bg-gray-100 h-screen py-8'>
      <div className='container mx-auto px-4'>
        {/* top heading */}
        <h1 className='text-2xl font-semibold mb-4'>Shopping Cart</h1>
        <div className='flex flex-col md:flex-row gap-4 justify-between'>
          {/* list of cart products */}
          <div className='flex flex-col gap-4 w-full'>
            {cartProducts && cartProducts.length
              ? cartProducts.map((product) => (
                  <CartProductCard
                    key={product.id}
                    product={product}
                  />
                ))
              : null}
          </div>
          {/* summary and checkout menu */}
          <div className='md:w-1/3'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-lg font-semibold mb-4'>Summary</h2>
              <div className='flex justify-between mb-2'>
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className='flex justify-between mb-2'>
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className='flex justify-between mb-2'>
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className='my-2' />
              <div className='flex justify-between mb-2'>
                <span className='font-semibold'>Total</span>
                <span className='font-semibold'>${totalPrice + 1.99}</span>
              </div>
              <button className='bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
