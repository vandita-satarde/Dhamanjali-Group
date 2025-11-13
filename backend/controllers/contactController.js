import Contact from "../models/contactModel.js";

// POST - Add contact form submission
export const submitContactForm = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// GET - Fetch all contact submissions (for admin panel)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch contacts", error });
  }
};

export const updateRemark = async (req, res) => {
  try {
    const { id } = req.params;
    const { remark } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { remark },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }

    res.status(200).json({ success: true, message: "Remark updated successfully", data: updatedContact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update remark", error });
  }
};

// DELETE contact
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting contact", error });
  }
};
