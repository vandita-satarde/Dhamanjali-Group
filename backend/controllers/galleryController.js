import Gallery from "../models/galleryModel.js";
import cloudinary from "../config/cloudinary.js";


export const addGalleryImage = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // ✅ Upload directly from buffer
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "Dhamanjali" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(500).json({ error });
        }

        // ✅ Save in MongoDB
        const newImage = new Gallery({
          imageUrl: result.secure_url,
          public_id: result.public_id,
        });

        await newImage.save();
        res.status(201).json(newImage);
      }
    );

    // ✅ Pipe buffer to upload stream
    uploadStream.end(file.buffer);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getGalleryImages = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ _id: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE image
export const deleteGalleryImage = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the image in MongoDB
    const image = await Gallery.findById(id);
    if (!image) return res.status(404).json({ message: "Image not found" });

    // Delete from Cloudinary using public_id
    await cloudinary.uploader.destroy(image.public_id);

    // Delete from MongoDB
    await Gallery.findByIdAndDelete(id);

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
