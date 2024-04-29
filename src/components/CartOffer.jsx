import React, { useState } from 'react';
export default function CartOffer({setOffer}){
    const handleOfferChange = (event) => {
        setOffer(event.target.value)
      };
    return(
        <div className="m-4 flex justify-end ">
        <label htmlFor="offer" className="mr-2">
          Select an offer:
        </label>
        <select
          id="offer"
          className="border rounded-md p-2"
          onChange={handleOfferChange}
        >
          <option value="">None</option>
          <option value="OFF10">OFF10 (10% off)</option>
          <option value="OFF20">OFF20 (20% off)</option>
        </select>
      </div>
    )
}