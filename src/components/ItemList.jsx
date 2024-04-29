import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, decrementItemCount,incrementItemCount } from '../stores/cartSlice';

export const Item = (item) => {
    const dispatch = useDispatch()
    return(
        <div key={item.item.id} className="flex justify-between p-5">
        <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
            </div>
          </div>
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-col">
                <p className="mb-2 text-xl font-semibold">{item.item.name}</p> 
            </div>
        </div>
        </div>
        <div className="flex justify-between p-5">
        <button className="px-4 py-2 bg-blue-500 text-white rounded"  onClick={()=>dispatch(decrementItemCount(item.item.id))}>-</button>
          <span className="mx-2">{item.item.quantity}</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={()=>dispatch(incrementItemCount(item.item.id))}>+</button>
        </div>
        <button onClick={() =>{ dispatch(removeFromCart(item.item.id)) }}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
        <div className="flex flex-col justify-center h-full p-5">
        <p className="mb-4 flex justify-end"> ${item.item.price} * {item.item.quantity} =  &nbsp;&nbsp; $ {item.item.quantity * item.item.price} </p>
        </div>
      </div>
    )

}
export const ItemList = ({list}) => {
    return(
        <ul>
            {list.map(item => <li><Item item={item} /> </li>)}
        </ul>
    )
}