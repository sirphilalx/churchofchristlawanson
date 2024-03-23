import React from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <Navbar className="border-b">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-lg">
        <span className="px-2 py-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-lg text-white mr-2">
          COC, Lawanson
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
    </Navbar>
  );
};

export default Header;
