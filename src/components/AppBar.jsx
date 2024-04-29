import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { allItems } from "../stores/cartSlice";

export const Appbar = () => {
    const cart = useSelector(allItems)
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const navigate = useNavigate();
    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4 cursor-pointer" onClick={()=>{navigate("/")}}>
            Groceries App
            </div>
            <button className="flex items-center mr-4 focus:outline-none" >
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-gray-600" onClick={()=>{navigate('/cart')}} /> 
            <span className="ml-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    {totalQuantity}
                </span>
            </button>
        </div>
    )}