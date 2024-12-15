import React from "react";
import ContactDetailsBox from "../components/ContactDetails";

function AddContact() {
  return (
    <div className="min-w-full min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl text-orange-800 font-bold text-center mb-6">
        Expand Your Contact Hub
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Create a New Contact Entry 📝
        </p>

        <div className="flex items-center justify-center">
          <ContactDetailsBox />
        </div>
      </div>
    </div>
  );
}

export default AddContact;
