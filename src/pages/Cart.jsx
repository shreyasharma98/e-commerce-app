import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { allItems } from "../stores/cartSlice";
import { ItemList } from "../components/ItemList";
import CartOffer from "../components/CartOffer";
import { Link } from "react-router-dom";

export default function Cart() {
  const list = useSelector(allItems);

  const [offer, setOffer] = useState("");

  const total = list.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const [grandTotal, setGrandTotal] = useState(total);

  const [orderSummary, setOrderSummary] = useState({
    total: total,
    offer: offer,
    grandTotal: grandTotal,
  });

  useEffect(() => {
    if (offer === "OFF10") {
      setGrandTotal(total - total * 0.1);
    } else if (offer === "OFF20") {
      setGrandTotal(total - total * 0.2);
    } else {
      setGrandTotal(total);
    }
  }, [offer, total]);

  useEffect(()=>{
    setOrderSummary({
        total : total,
        offer : offer,
        grandTotal : grandTotal,
      })
  },[grandTotal])


  return (
    <>
      <ItemList list={list} />
      <div className="m-4 flex justify-end ">
        <label htmlFor="offer" className="mr-2">
          Total : $ {total}
        </label>
      </div>

      <CartOffer setOffer={setOffer} />

      <div className="m-4 flex justify-end ">
        <label htmlFor="offer" className="mr-2">
          Grand Total : $ {grandTotal}
        </label>
      </div>

      <div className="flex justify-end">
      <Link to={'/checkout'} state={{ orderSummary }} >
<button
    type="button"
    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
  >
    Proceed to checkout
  </button>
</Link>
      
      </div>
    </>
  );
}
