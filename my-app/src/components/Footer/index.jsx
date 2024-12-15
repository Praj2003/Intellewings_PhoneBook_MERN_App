import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="container flex flex-col lg:flex-row items-center h-auto min-w-full justify-between bg-black text-white text-sm font-bold">
      <div className="lg:w-1/3 w-full flex justify-center mb-7 lg:mb-0 p-2">
        <ul className="flex flex-col justify-center items-center gap-2">
          <Link>
            <motion.li
              whileHover={{
                scale: 1.1,
                backgroundColor: "orange",
                color: "white",
              }}
              className="p-2 rounded-xl"
            >
              Home
            </motion.li>
          </Link>

          <Link>
            <motion.li
              whileHover={{
                scale: 1.1,
                backgroundColor: "orange",
                color: "white",
              }}
              className="p-2 rounded-xl"
            >
              About Us
            </motion.li>
          </Link>

          <Link>
            <motion.li
              whileHover={{
                scale: 1.1,
                backgroundColor: "orange",
                color: "white",
              }}
              className="p-2 rounded-xl"
            >
              Sign In
            </motion.li>
          </Link>

          <Link>
            <motion.li
              whileHover={{
                scale: 1.1,
                backgroundColor: "orange",
                color: "white",
              }}
              className="p-2 rounded-xl"
            >
              Contact Us
            </motion.li>
          </Link>
        </ul>
      </div>

      <div className="lg:w-1/3 w-full flex flex-col gap-2 mb-8 lg:mb-0">
        <h3 className="font-bold text-xl text-white mb-3 text-center">
          Contact Us
        </h3>
        <ul className="flex flex-col justify-center items-center gap-2">
          <li>Address: Z-20 second floor Green Park Main,New Delhi 11XX20</li>
          <li>Phone: +91 70XXXXXX12</li>
          <li>Email : ContactHub@gmail.com</li>
        </ul>
      </div>

      <div className="lg:w-1/3 flex flex-col mb-4 justify-center lg:mb-0">
        <h3 className="font-bold text-xl text-white mb-3 text-center">
          Join us on social media
        </h3>
        <ul className="flex justify-center items-center gap-4 mb-11">
          <motion.li whileHover={{scale : 1.1}} className="text-white text-xl mb-1 p-2 bg-orange-600 rounded-xl">
            <FaFacebookF />
          </motion.li>
          <motion.li whileHover={{scale : 1.1}} className="text-white text-xl mb-1 p-2 bg-orange-600 rounded-xl">
            <FaLinkedinIn />
          </motion.li>
          <motion.li whileHover={{scale : 1.1}} className="text-white text-xl mb-1 p-2 bg-orange-600 rounded-xl">
            <FaTwitter />
          </motion.li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
