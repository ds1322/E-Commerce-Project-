import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ elem, isInCart }) => {
  const { setCartItems,incrementQuantity,decrementQuantity} = useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, {...elem, quantity:1}]);
    alert("Product added into cart");
  };

  return (
    <div className="group border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Image */}
      <div className="h-56 w-full bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
        <img
          src={elem.image}
          alt={elem.title}
          className="h-full w-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Category */}
      <p className="text-gray-400 text-sm mt-4 capitalize">{elem.category}</p>

      {/* Title */}
      <h3 className="font-semibold text-gray-800 mt-1 h-12 line-clamp-2">
        {elem.title}
      </h3>

      {/* Rating */}
      <p className="text-sm text-gray-600 mt-2">
        ⭐ {elem.rating.rate}{" "}
        <span className="text-gray-400">({elem.rating.count})</span>
      </p>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-lg text-gray-900">${elem.price}</span>

        {isInCart ? (
          <div className="flex items-center gap-1 bg-gray-100 border border-gray-200 rounded-lg p-1">
            <button onClick={()=>decrementQuantity(elem.id)}
            className="w-8 h-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-white hover:shadow-sm transition-all duration-200">
              −
            </button>

            <span className="w-8 text-center font-semibold text-gray-800">
             {isInCart.quantity}
            </span>

            <button onClick={()=>incrementQuantity(elem.id)}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-black text-white hover:bg-gray-800 transition-all duration-200">
              +
            </button>
          </div>
        ) : (
          <button
            onClick={addToCart}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-200"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
