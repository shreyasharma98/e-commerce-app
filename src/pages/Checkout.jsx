import { useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { emptyCart,allItems } from "../stores/cartSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../components/Modal'; // Assuming you have a Modal component

const Checkout = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const orderSummary = location.state.orderSummary

    const list = useSelector(allItems);

    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [showModal, setShowModal] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // For example, dispatch an action to place the order and empty the cart
       
        // Show modal for 2 seconds
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            navigate('/');
        dispatch(emptyCart());
        }, 3000);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div>
                    <p>Total: ${orderSummary.grandTotal}</p>
                    <p>Offer: {orderSummary.offer}</p>
                    <p>Grand Total: ${orderSummary.grandTotal}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-8">
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                        Payment Method
                    </label>
                    <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    >
                        <option value="">Select Payment Method</option>
                        <option value="credit">Credit Card</option>
                        <option value="debit">Debit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Place Order
                </button>
            </form>
            {showModal && (
               <Modal>
               <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
               <ul>
                   {list.map((item, index) => (
                       <li key={index} className="mb-2">
                           <span className="font-semibold">{item.name}</span>
                           <span className="ml-2">{item.quantity} x ${item.price}</span>
                       </li>
                   ))}
               </ul>
               {/* Additional line */}
               <hr className="my-4" />
               {/* Total, offer, and grand total */}
               <div className="text-sm">
                   <p>Total: ${orderSummary.total}</p>
                   <p>Offer: {orderSummary.offer ? orderSummary.offer : "null"}</p>
                   <p>Grand Total: ${orderSummary.grandTotal}</p>
               </div>
               
           </Modal>
            )}
        </div>
    );
};

export default Checkout;
