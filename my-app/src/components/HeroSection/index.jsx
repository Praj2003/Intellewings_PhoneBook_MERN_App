import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function HeroSection() {
  
  return (
    <div className="mt-2 flex items-center justify-between h-[450px] shadow-xl min-w-full">
      <div className="w-1/2 flex flex-col justify-center items-center gap-5">
        <h3 className="text-4xl font-bold text-orange-600 text-center">
        Keep Your Contacts Organized, Anytime, Anywhere.
        </h3>

        <div className="flex gap-7 mt-12">
          <Link to={"/addNewContact"}>
            <motion.button
              whileHover={{
                scale: 1.1,
                color: "white",
                backgroundColor: "orange",
              }}
              className="text-white text-xl bg-black p-4 rounded-lg"
            >
              Add New Contact
            </motion.button>
          </Link>
          <Link to={"/signup"}>
            <motion.button
              whileHover={{
                scale: 1.1,
                color: "white",
                backgroundColor: "orange",
              }}
              className="text-white text-xl bg-black p-4 rounded-lg"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <motion.img
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px rgba(0, 128, 128, 0.8)",
          }}
          src="/images/contactBook.png"
          className="h-[350px] w-[400px] shadow-2xl rounded-xl"
          alt="company name"
        />
      </div>
    </div>
  );
}

export default HeroSection;
