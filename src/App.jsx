import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductsCard";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [productsData, setProductsData] = useState([]);

  console.log(productsData);

  const { cartItems, isCartOpen } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      setProductsData(res.data);
    } catch (error) {
      console.log("error in api");
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="min-h-screen p-2">
      <Navbar />

      {isCartOpen ? (
        <div className="mt-6 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-xl text-gray-400 mt-10">
              Cart is empty
            </p>
          ) : (
            <>
              {cartItems.map((item, index) => {
                return <CartScreen key={index} item={item} />;
              })}

              <h2 className="text-2xl font-bold mt-8 text-right border-t border-gray-700 pt-5">
                Total: $
                {cartItems
                  .reduce((sum, item) => sum + item.price * item.quantity, 0)
                  .toFixed(2)}
              </h2>
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {productsData.map((elem) => {
            let isInCart = cartItems.find((val) => val.id === elem.id);

            return (
              <ProductCard key={elem.id} elem={elem} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
