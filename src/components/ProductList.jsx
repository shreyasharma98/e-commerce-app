import React, { useState } from 'react';
import { addItemToCart,allItems } from '../stores/cartSlice';
import { useDispatch,useSelector } from 'react-redux';

const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/300',
      price : 20,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/300',
      price : 20,
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/300',
      price : 40,
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://via.placeholder.com/300',
      price : 40,
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'https://via.placeholder.com/300',
      price : 60,
    },
    {
      id: 6,
      name: 'Product 6',
      image: 'https://via.placeholder.com/300',
      price : 60,
    }
]
  

export default function ProductList() {
    const dispatch = useDispatch()

 
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 p-2 m-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            
                <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={()=>{dispatch(addItemToCart(product))}}
                >
                Add to Cart
                </button>
            
            </div>
        </div>
        ))}
    </div>
    );
}
