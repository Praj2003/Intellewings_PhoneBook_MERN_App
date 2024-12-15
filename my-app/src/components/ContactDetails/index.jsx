import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContactDetailsBox() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone_number_1: "",
    phone_number_2: "",
    address: "",
  });
  const [errorFields, setErrorFields] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const input = await axios.post(
        "http://localhost:4000/phoneBook/api/insertContactDetails",
        {
          first_name: formData.first_name,
          middle_name: formData.middle_name,
          last_name: formData.last_name,
          email: formData.email,
          phone_number_1: formData.phone_number_1,
          phone_number_2: formData.phone_number_2,
          address: formData.address,
        }
      );

      console.log(input);

      const result = await input.data;

      console.log(result);

      if(result){
          navigate("/responseSuccess",{state : result.contact})
      }
    } catch (err) {
      console.error("Error submitting form:", err.response?.data || err.message);
    }
  }

  return (
    <form className="flex flex-col bg-white shadow-2xl p-7 rounded-xl">
      <h3 className="text-center mb-5 text-amber-950 font-bold text-xl">
        Contact Details
      </h3>

      <div className="flex items-center justify-between gap-7 mb-3">
        <label className="text-lg text-black font-semibold">First Name:</label>
        <motion.input
          whileFocus={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
          type="text"
          name="first name"
          placeholder="Enter your first name"
          id="name"
          className={`border border-black p-2 rounded-xl ${
            errorFields.name ? "border-red-800" : "border-black"
          } `}
          value={formData.first_name}
          onChange={(event) =>
            setFormData({ ...formData, first_name: event.target.value })
          }
        />
      </div>

      <div className="flex items-center justify-between gap-7 mb-3">
        <label className="text-lg text-black font-semibold">Middle Name:</label>
        <motion.input
          whileFocus={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
          type="text"
          name="middle name"
          placeholder="Optional"
          id="email"
          className="border border-black p-2 rounded-xl"
          value={formData.middle_name}
          onChange={(event) =>
            setFormData({ ...formData, middle_name: event.target.value })
          }
        />
      </div>

      <div className="flex items-center justify-between gap-7 mb-3">
        <label className="text-lg text-black font-semibold">Last Name:</label>
        <motion.input
          whileFocus={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
          type="text"
          name="number"
          placeholder="Enter your last name"
          id="number"
          className="border border-black p-2 rounded-xl"
          value={formData.last_name}
          onChange={(event) =>
            setFormData({ ...formData, last_name: event.target.value })
          }
        />
      </div>

      <div className="flex items-center justify-between gap-7 mb-3">
        <label className="text-lg text-black font-semibold">Email:</label>
        <motion.input
          whileFocus={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
          type="text"
          name="email"
          placeholder="Enter your email ID"
          id="email"
          className="border border-black p-2 rounded-xl"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>

      <div className="flex items-center justify-between gap-7 mb-3">
        <label className="text-lg text-black font-semibold">
          Phone Number 1:
        </label>
        <motion.input
          whileFocus={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
          type="text"
          name="phone1"
          placeholder="Enter your number"
          id="phone1"
          className="border border-black p-2 rounded-xl"
          value={formData.phone_number_1}
          onChange={(event) =>
            setFormData({ ...formData, phone_number_1: event.target.value })
          }
        />
      </div>
      <div className="flex items-center justify-between gap-7 mb-3">
        <label className="text-lg text-black font-semibold">
          Phone Number 2:
        </label>
        <motion.input
          whileFocus={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
          type="text"
          name="phone2"
          placeholder="Optional"
          id="phone2"
          className="border border-black p-2 rounded-xl"
          value={formData.phone_number_2}
          onChange={(event) =>
            setFormData({ ...formData, phone_number_2: event.target.value })
          }
        />
      </div>

      <div className="flex items-center justify-between gap-7 mb-3">
        <label className="text-lg text-black font-semibold">Address:</label>
        <motion.input
          whileFocus={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
          type="text"
          name="address"
          placeholder="Enter your address"
          id="address"
          className="border border-black p-2 rounded-xl"
          value={formData.address}
          onChange={(event) =>
            setFormData({ ...formData, address: event.target.value })
          }
        />
      </div>

      <div className="flex justify-center mt-3">
        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.1, backgroundColor: "red", color: "white" }}
          type="submit"
          className="p-3 bg-black text-white font-bold rounded-xl text-lg"
        >
          Submit
        </motion.button>
      </div>
    </form>
  );
}

export default ContactDetailsBox;
