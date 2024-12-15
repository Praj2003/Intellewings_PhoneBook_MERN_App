const {insertContactBookDetails,deleteContactBookDetails,fetchAllContactBookDetails,editContactBookDetails} = require("../controller/phoneBook.controller");
const express = require("express");

const phoneBookRouter = express.Router();

phoneBookRouter.post("/api/insertContactDetails",insertContactBookDetails);
phoneBookRouter.delete("/api/deleteContact/:id", deleteContactBookDetails);
phoneBookRouter.get("/api/fetchContactDetails",fetchAllContactBookDetails);
phoneBookRouter.put("/api/updateContactDetails/:id",editContactBookDetails);

module.exports = phoneBookRouter;