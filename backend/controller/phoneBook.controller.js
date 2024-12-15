const db = require("../db");

const insertContactBookDetails = async (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    email,
    phone_number_1,
    phone_number_2,
    address,
  } = req.body;

  // Validate required fields
  if (!first_name || !last_name || !phone_number_1) {
    return res
      .status(400)
      .json({
        error: "First name, last name, and phone number 1 are required",
      });
  }

  try {
    const query = `
        INSERT INTO contact_book (
          first_name, middle_name, last_name, email, phone_number_1, phone_number_2, address
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;

    const values = [
      first_name,
      middle_name || null,
      last_name,
      email,
      phone_number_1,
      phone_number_2 || null,
      address || null,
    ];

    const result = await db.query(query, values);

    res.status(201).json({
      message: "Contact added successfully",
      contact: result.rows[0],
    });
  } catch (err) {
    console.error("Error inserting contact details:", err.stack);

    res.status(500).json({ error: "Failed to add contact" });
  }
};

const deleteContactBookDetails = async (req, res) => {
  const { id } = req.params; 

  if (!id) {
    return res.status(400).json({ error: "Contact ID is required" });
  }

  try {
    const query = `DELETE FROM contact_book WHERE id = $1 RETURNING *;`;
    const result = await db.query(query, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({
      message: "Contact deleted successfully",
      deletedContact: result.rows[0],
    });
  } catch (err) {
    console.error("Error deleting contact:", err.stack);
    res.status(500).json({ error: "Failed to delete contact" });
  }
};

const fetchAllContactBookDetails = async (req, res) => {
  try {
    const query = `SELECT * FROM contact_book ORDER BY created_at DESC;`;
    const result = await db.query(query);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }

    res.status(200).json({
      message: "Contacts fetched successfully",
      contacts: result.rows,
    });
  } catch (err) {
    console.error("Error fetching all contacts:", err.stack);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

const editContactBookDetails = async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    middle_name,
    last_name,
    email,
    phone_number_1,
    phone_number_2,
    address,
  } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Contact ID is required" });
  }
  if (!first_name || !last_name || !phone_number_1) {
    return res
      .status(400)
      .json({
        error: "First name, last name, and phone number 1 are required",
      });
  }

  try {
    const query = `
      UPDATE contact_book
      SET
        first_name = $1,
        middle_name = $2,
        last_name = $3,
        email = $4,
        phone_number_1 = $5,
        phone_number_2 = $6,
        address = $7,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $8
      RETURNING *;
    `;

    const values = [
      first_name,
      middle_name || null,
      last_name,
      email,
      phone_number_1,
      phone_number_2 || null,
      address || null,
      id,
    ];

    const result = await db.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({
      message: "Contact updated successfully",
      updatedContact: result.rows[0],
    });
  } catch (err) {
    console.error("Error updating contact details:", err.stack);
    res.status(500).json({ error: "Failed to update contact" });
  }
};


module.exports = {insertContactBookDetails,deleteContactBookDetails,fetchAllContactBookDetails,editContactBookDetails};
