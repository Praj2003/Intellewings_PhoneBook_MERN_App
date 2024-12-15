import React, { useEffect, useState } from "react";
import ViewContact from "../components/ViewContactComponent";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function ViewAllContacts() {
  const [fetchContactData, isFetchContactData] = useState([]);

  
  const handleFetchContactData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/phoneBook/api/fetchContactDetails"
      );

      const result = response.data;

      if (result) {
        isFetchContactData(result.contacts);
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetchContactData();
  }, []);

  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      <div className="flex items-center justify-between min-w-full mb-7">
        <h1 className="text-center text-2xl font-bold text-orange-800 ml-7 mt-4">
          Contacts Dashboard
        </h1>

        <Link to={"/addNewContact"}>
          <button className="p-3 text-white bg-orange-600 text-center text-2xl rounded-full cursor-pointer mr-7 mt-4">
            <FaPlus />
          </button>
        </Link>
      </div>
      <div className="flex justify-around min-w-full ">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 mx-auto my-3">
          {fetchContactData.map((data) => (
            <ViewContact key={data.id} contact={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewAllContacts;
