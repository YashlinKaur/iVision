import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-[#f5f5f7] border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 md:px-8 h-[65px]">

        {/* Logo */}
        <div className="w-[90px] md:w-[110px]">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[200px] object-cover"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">

          {/* Store */}
          <div className="group">
            <Link
              to="/store"
              className="text-[#6e6e73] hover:text-black transition-all duration-300"
            >
              Store
            </Link>

            <div className="absolute left-0 top-[65px] w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="max-w-[1300px] mx-auto flex gap-20 px-10 py-12">

                <div>
                  <h1 className="text-2xl font-semibold mb-3">Shop</h1>
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold cursor-pointer">
                      Shop the Latest
                    </h2>
                    <h2 className="text-xl font-bold cursor-pointer">
                      Mac mini's
                    </h2>
                    <h2 className="text-xl font-bold cursor-pointer">
                      Mac book's
                    </h2>
                    <h2 className="text-xl font-bold cursor-pointer">
                      Iphone's
                    </h2>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500 mb-4">Quick Links</h4>

                  <div className="space-y-3">
                    <p className="cursor-pointer hover:underline">
                      Find a Store
                    </p>
                    <p className="cursor-pointer hover:underline">
                      Order Status
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500 mb-4">Shop Special</h4>

                  <div className="space-y-3">
                    <p className="cursor-pointer hover:underline">
                      Get Quality Assurance
                    </p>
                    <p className="cursor-pointer hover:underline">
                      24/7 Customer Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accessories */}
          <div className="group">
            <Link
              to="/accessories"
              className="text-[#6e6e73] hover:text-black transition-all duration-300"
            >
              Accessories
            </Link>

            <div className="absolute left-0 top-[65px] w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="max-w-[1300px] mx-auto flex gap-20 px-10 py-12">

                <div>
                  <h1 className="text-2xl font-semibold mb-4">
                    Shop All Accessories
                  </h1>

                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Mac</h2>
                    <h2 className="text-xl font-bold">iPhone</h2>
                    <h2 className="text-xl font-bold">Apple Watch</h2>
                    <h2 className="text-xl font-bold">iPad</h2>
                    <h2 className="text-xl font-bold">AirPods</h2>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500 mb-4">
                    Explore Accessories
                  </h4>

                  <div className="space-y-3">
                    <p className="hover:underline cursor-pointer">
                      Made By Apple
                    </p>

                    <p className="hover:underline cursor-pointer">
                      Beats
                    </p>

                    <p className="hover:underline cursor-pointer">
                      AirTags
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <Link
            to="/aboutus"
            className="text-[#6e6e73] hover:text-black transition-all duration-300"
          >
            AboutUs
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
          >
            Login
          </Link>

          {/* Register */}
          <Link
            to="/register"
            className="px-5 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Register
          </Link>

          {/* Search */}
          <div className="group relative">
            <i className="fa-solid fa-magnifying-glass text-[18px] text-[#6e6e73] cursor-pointer"></i>

            <div className="absolute right-0 top-10 w-[350px] bg-white shadow-2xl rounded-2xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="flex items-center border rounded-full px-4 py-3">
                <i className="fa-solid fa-magnifying-glass text-gray-500"></i>

                <input
                  type="text"
                  placeholder="Search iVision.com"
                  className="w-full ml-3 outline-none bg-transparent"
                />
              </div>

              <div className="mt-5">
                <p className="text-gray-500 mb-3">Quick Links</p>

                <div className="space-y-3">
                  <p className="cursor-pointer hover:translate-x-1 transition-all duration-300">
                    → Finds a Store
                  </p>

                  <p className="cursor-pointer hover:translate-x-1 transition-all duration-300">
                    → Accessories
                  </p>

                  <p className="cursor-pointer hover:translate-x-1 transition-all duration-300">
                    → AirPods
                  </p>

                  <p className="cursor-pointer hover:translate-x-1 transition-all duration-300">
                    → Apple Intelligence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cart */}
          <div className="group relative">
            <i className="fa-solid fa-bag-shopping text-[18px] text-[#6e6e73] cursor-pointer"></i>

            <div className="absolute right-0 top-10 w-[260px] bg-white shadow-2xl rounded-2xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <p className="text-lg font-semibold mb-4">My Profile</p>

              <div className="space-y-4 text-[#6e6e73]">

                <div className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <i className="fa-solid fa-box-open"></i>
                  <p>Orders</p>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <i className="fa-regular fa-bookmark"></i>
                  <p>Saves</p>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <i className="fa-solid fa-house-user"></i>
                  <p>Account</p>
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:text-black">
                  <i className="fa-regular fa-circle-user"></i>
                  <p>Sign In</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-500 ${
          mobileMenu ? "max-h-[500px] py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6">

          <Link to="/store" className="text-lg">
            Store
          </Link>

          <Link to="/accessories" className="text-lg">
            Accessories
          </Link>

          <Link to="/aboutus" className="text-lg">
            AboutUs
          </Link>

          <Link to="/login" className="text-lg">
            Login
          </Link>

          <Link to="/register" className="text-lg">
            Register
          </Link>

          <div className="flex items-center gap-5 pt-2 text-xl">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;