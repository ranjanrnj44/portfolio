import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


function Navbar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between ">
        <nav className="flex">
          <NavLink
            to="/"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-800 text-4xl font-bold tracking-widest"
            activeClassName="text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounder text-red-100 hover:text-yellow-400"
            activeClassName="font-bold text-red-100 bg-purple-900"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounder text-red-100 hover:text-yellow-800"
            activeClassName="font-bold text-red-100 bg-purple-900"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounder text-red-100 hover:text-yellow-800"
            activeClassName="font-bold text-red-100 bg-purple-900"
          >
            About Me
          </NavLink>
        </nav>

        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/ranjanrnj44"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ranjan-rnj-bb343b130/"
            className="mr-4 hover: title-Twitter"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/ranjan.rj.58"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
