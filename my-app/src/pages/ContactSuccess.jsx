import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContactSuccess() {
  return (
    <div>
      <div className="flex h-screen  flex-col gap-6 min-w-full items-center justify-center">
        <div className="flex items-center justify-center">
          <h1 className=" text-2xl text-teal-700 ">Success!</h1>
        </div>

        <div className="flex items-center justify-center mt-6 ">
          <h2 className="text-black text-xl">
            You have successfully added another contact in ContactHub.
          </h2>
        </div>

        <div className="container flex flex-col items-center justify-center gap-7">
          <h2 className="text-black text-lg text-bold">
            Go Back to the home page.
          </h2>
          <Link to={"/"}>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "teal",
                color: "white",
              }}
              className="p-4 bg-black text-white rounded-2xl text-lg text-bold cursor-pointer"
            >
              Home
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactSuccess;
