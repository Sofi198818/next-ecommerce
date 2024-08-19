"use client";
import Image from "next/image";
import React from "react";

const CartModal = () => {
  // Hardcoded cartItems as `true` to show the cart content
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      CartModal
      {cartItems ? (
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Image
              src="https://images.pexels.com/photos/27077972/pexels-photo-27077972/free-photo-of-dryers-and-currants-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Product Image"
              height={96}
              width={72}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Product Name</h3>
                <div>$49</div>
                <div className="p-1 bg-gray-50 rounded-sm"></div>
              </div>
              <div className="text-sm text-gray-500">Available</div>
            </div>
          </div>
          <div className="flex justify-between text-gray-500 mb-1">
            <div className="">
              <span>Qty.2</span>
            </div>
            <div className="flex justify-between text-blue-500">
              <span>Remove</span>
            </div>
          </div>
        </div>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
};

export default CartModal;
