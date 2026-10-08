import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartScreen = ({ item }) => {
  const { incrementQuantity, decrementQuantity } = useContext(MyStore);
  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-4 flex items-center gap-5 hover:border-gray-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="w-32 h-32 shrink-0 bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {item.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-white mt-1 line-clamp-2">
          {item.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-400 text-sm">★ {item.rating.rate}</span>

          <span className="text-gray-500 text-sm">
            ({item.rating.count} reviews)
          </span>
        </div>

        {/* Price + Quantity */}
        <div className="flex items-center justify-between mt-4">
          {/* Price */}
          <span className="text-xl font-bold text-white">${item.price}</span>

          {/* Quantity */}
          <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
            <button onClick={()=>decrementQuantity(item.id)}
            className="w-8 h-8 rounded-md bg-gray-700 text-white hover:bg-gray-600">
              −
            </button>

            <span className="w-8 text-center text-white font-semibold">
              {item.quantity}
            </span>

            <button onClick={()=>incrementQuantity(item.id)}
            className="w-8 h-8 rounded-md bg-white text-black hover:bg-gray-200">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
