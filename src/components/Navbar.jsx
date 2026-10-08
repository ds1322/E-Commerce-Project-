import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {

    const {setIsCartOpen} = useContext(MyStore);
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-900 px-6 py-4 text-white">
      <h1 className="text-2xl font-bold tracking-wide">
        My<span className="text-yellow-400">Store</span>
      </h1>

      <div className="flex gap-8 text-lg">
        <p
          onClick={() => {
            setIsCartOpen(false);
          }}
          className="cursor-pointer hover:text-yellow-400"
        >
          Home
        </p>
        <p
          onClick={() => {
            setIsCartOpen(true);
          }}
          className="cursor-pointer hover:text-yellow-400"
        >
          Cart
        </p>
      </div>

      <button className="rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black hover:bg-yellow-300">
        Login
      </button>
    </div>
  );
};

export default Navbar;
