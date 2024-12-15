import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="container flex items-center justify-between shadow-xl bg-white h-[100px] min-w-full">
      <div className="flex justify-center gap-3 ml-4">
        <img
          src="/images/book.png"
          alt="Logo image"
          className="h-[40px] rounded-full   bg-white "
        />
        <motion.h3
          whileHover={{ scale: 1.1 }}
          className="font-semibold text-2xl text-amber-950"
        >
          ContactHub
        </motion.h3>
      </div>

      <ul className="flex gap-6 text-gray-700 text-lg font-bold list-none cursor-pointer mr-4">
        <Link to={"/"}>
          <motion.li
            whileHover={{
              scale: 1.1,
              color: "white",
              backgroundColor: "brown",
            }}
            className="p-4 rounded-2xl"
          >
            Home
          </motion.li>
        </Link>
        <Link to={"/addNewContact"}>
          <li className="relative">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "white",
                backgroundColor: "brown",
              }}
              className="p-4 rounded-2xl"
            >
              Create New Contact
            </motion.div>
          </li>
        </Link>
        <Link to={"/viewAllContactDetails"}>
          <motion.li
            whileHover={{
              scale: 1.1,
              color: "white",
              backgroundColor: "brown",
            }}
            className="p-4 rounded-2xl"
          >
            View All Contacts
          </motion.li>
        </Link>
        <Link to={"/signin"}>
          <motion.li
            whileHover={{
              scale: 1.1,
              color: "white",
              backgroundColor: "brown",
            }}
            className="p-4 rounded-2xl"
          >
            Login
          </motion.li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
