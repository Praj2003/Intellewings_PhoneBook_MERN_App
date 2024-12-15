import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditContact = () => {
  const { state } = useLocation();
  const { contact } = state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: contact.first_name,
    middle_name: contact.middle_name || "",
    last_name: contact.last_name,
    email: contact.email || "",
    phone_number_1: contact.phone_number_1,
    phone_number_2: contact.phone_number_2 || "",
    address: contact.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/phoneBook/api/UpdateContactDetails/${contact.id}`,
        formData
      );

      if (response.status === 200) {
        alert("Contact updated successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("Failed to update contact. Please try again.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col bg-white shadow-xl rounded-xl gap-7 p-6 my-3 mx-auto"
      >
        <h2 className="text-xl font-bold text-gray-800">Edit Contact</h2>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="middle_name"
          value={formData.middle_name}
          onChange={handleChange}
          placeholder="Middle Name"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="phone_number_1"
          value={formData.phone_number_1}
          onChange={handleChange}
          placeholder="Phone Number 1"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="phone_number_2"
          value={formData.phone_number_2}
          onChange={handleChange}
          placeholder="Phone Number 2"
          className="p-2 border rounded"
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="p-2 bg-orange-700 text-white rounded shadow-xl"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditContact;
