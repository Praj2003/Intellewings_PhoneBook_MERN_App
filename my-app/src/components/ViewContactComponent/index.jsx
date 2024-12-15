import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewContact = ({ contact }) => {
  const navigate = useNavigate();
  const handleDelete = async (event) => {
    event.preventDefault();
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${contact.first_name} ${contact.last_name}?`
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `http://localhost:4000/phoneBook/api/deleteContact/${contact.id}`
      );

      if (response.status === 200) {
        alert("Contact deleted successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact. Please try again.");
    }
  };

  const handleEdit = () => {
    navigate(`/edit-contact/${contact.id}`, { state: { contact } });
  };

  return (
    <div className="container flex flex-col bg-white shadow-xl rounded-xl gap-7 p-6 ">
      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">First Name:</h4>
        <p className="text-md font-semibold text-teal-700">
          {contact.first_name}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">Middle Name:</h4>
        <p className="text-md font-semibold text-teal-700">
          {contact.middle_name || "Not provided"}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">Last Name:</h4>
        <p className="text-md font-semibold text-teal-700">
          {contact.last_name}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">Email:</h4>
        <p className="text-md font-semibold text-teal-700">
          {contact.email || "Not provided"}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">Phone Number 1:</h4>
        <p className="text-md font-semibold text-teal-700">
          {contact.phone_number_1}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">Phone Number 2:</h4>
        <p className="text-md font-semibold text-teal-700">
          {contact.phone_number_2 || "Not provided"}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">Address:</h4>
        <p className="text-md font-semibold text-teal-700">
          {contact.address || "Not provided"}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">Created At:</h4>
        <p className="text-md font-semibold text-teal-700">
          {new Date(contact.created_at).toLocaleString()}
        </p>
      </div>

      <div className="flex justify-between items-center gap-6">
        <h4 className="text-md font-bold text-gray-800">Updated At:</h4>
        <p className="text-md font-semibold text-teal-700">
          {new Date(contact.updated_at).toLocaleString()}
        </p>
      </div>

      <div className="flex items-center justify-center gap-10 mr-3 ml-3 mb-2">
        <button onClick={handleDelete} className="cursor-pointer">
          <FaTrash className="text-5xl mr-6 p-2 text-white bg-orange-700 rounded-xl shadow-xl text-center" />
        </button>
        <button onClick={handleEdit} className="cursor-pointer">
          <FaEdit className="text-5xl mr-6 p-2 text-white bg-orange-700 rounded-xl shadow-xl text-center" />
        </button>
      </div>
    </div>
  );
};

export default ViewContact;
