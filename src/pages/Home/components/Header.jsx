import React from "react";
import Logo from "../../../assets/img/logo.png";

const Header = () => {
  return (
    <nav class="container relative mx-auto p-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <img src={Logo} alt="" width={50} />
          <h2 class="text-white font-bold text-3xl">Lilies</h2>
        </div>

        <div className="hidden items-center space-x-6 md:flex text-white">
          <a href="/#" className="hover:text-brightBrown">Home</a>
          <a href="/#" className="hover:text-brightBrown">Login</a>
          <a href="/#" className="bg-brightBrown rounded-md text-veryDarkGreen px-4 py-2 font-semibold">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
