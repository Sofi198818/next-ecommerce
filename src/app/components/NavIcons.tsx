"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartpen, setIsCartpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        className="cursor-pointer"
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        onClick={handleProfile}
      />

      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        className="cursor-pointer"
        src="/notification.png"
        alt=""
        width={22}
        height={22}
      />
      <div className="relative cursor-pointer">
        <Image
          className="cursor-pointer"
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          onClick={() => setIsCartpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#F35C7A] rounded-full text-white text-sm flex items-center justify-center">2</div>
      </div>
      {isCartpen && (
        <div>
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
