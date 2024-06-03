import React from "react";

const CartProductCard = ({ product }) => {
  return (
    <div className=''>
      <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-left font-semibold'>Product</th>
              <th className='text-left font-semibold'>Price</th>
              <th className='text-left font-semibold'>Quantity</th>
              <th className='text-left font-semibold'>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-4'>
                <div className='flex items-center'>
                  <img
                    className='h-16 w-16 mr-4'
                    src={product.image}
                    alt='Product image'
                  />
                  <span className='font-semibold'>{product.title}</span>
                </div>
              </td>
              <td className='py-4'>${product.price}</td>
              <td className='py-4'>
                <div className='flex items-center'>
                  <button className='border rounded-md py-2 px-4 mr-2'>
                    -
                  </button>
                  <span className='text-center w-8'>1</span>
                  <button className='border rounded-md py-2 px-4 ml-2'>
                    +
                  </button>
                </div>
              </td>
              <td className='py-4'>${product.price}</td>
            </tr>
            {/* More product rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartProductCard;
