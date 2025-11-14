import emailModel from "../models/emailModel.js";

export const addEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // Prevent duplicate entries
    const existing = await emailModel.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: "This email is already subscribed" });
    }

    const newEmail = new emailModel({ email });
    await newEmail.save();

    res.status(201).json({ success: true, message: "Subscribed successfully", data: newEmail });

  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// Get all emails (for admin panel)
export const getEmails = async (req, res) => {
  try {
    const emails = await emailModel.find().sort({ createdAt: -1 });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
