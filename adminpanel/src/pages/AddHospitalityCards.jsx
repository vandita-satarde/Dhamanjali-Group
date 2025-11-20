import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const AddHospitalityCards = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Deluxe Rooms",
    image: "",
  });
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "newerror"); // 🔹 Replace with your actual preset name
    data.append("folder", "hospitality-images"); // optional: Cloudinary folder name

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dsauuyk9v/image/upload", // 🔹 Replace with your Cloudinary cloud name
        data
      );

      setFormData({ ...formData, image: res.data.secure_url });
      setUploading(false);
    } catch (err) {
      console.error("Cloudinary Upload Error:", err);
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // update existing record
        await axios.put(`https://dhamanjali-group.vercel.app/api/hospitality/${editingId}`, formData);
        alert("Updated successfully");
        setEditingId(null);
      } else {
        // add new
        await axios.post("https://dhamanjali-group.vercel.app/api/hospitality", formData);
        alert("Added successfully");
      }

      setFormData({ title: "", category: "Deluxe Rooms", image: "" });
      fetchImages();
    } catch (err) {
      console.error(err);
    }
  };

  const fetchImages = async () => {
    const res = await axios.get("https://dhamanjali-group.vercel.app/api/hospitality");
    setImages(res.data);
  };

  // Edit existing
  const handleEdit = (item) => {
    setEditingId(item._id);
    setFormData({
      title: item.title,
      category: item.category,
      image: item.image,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete item
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      try {
        await axios.delete(`https://dhamanjali-group.vercel.app/api/hospitality/${id}`);
        fetchImages();
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
        <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-3 md:mb-6 lg:mb-8">
          { editingId ? "Edit Hospitality Card" : "Add Hospitality Card" }
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6 max-w-md shadow-lg p-6 rounded-xl">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="border p-2 w-full rounded"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option>Deluxe Rooms</option>
            <option>Suite Rooms</option>
            <option>Presidential</option>
          </select>

          {/* File Upload Input */}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            className=" bg-blue-100  p-2 w-full rounded"
          />

          {uploading ? (
            <p className="text-blue-600 text-sm">Uploading image...</p>
          ) : (
            formData.image && (
              <img
                src={formData.image}
                alt="preview"
                className="w-32 h-32 object-cover rounded"
              />
            )
          )}

          <button
            className="bg-blue-900 text-white hover:bg-blue-800 px-4 py-2 rounded"
            disabled={uploading}
          >
            { editingId ? "Update Card" : "Add Card" }
          </button>
        </form>

        <div className="mx-7 md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((item) => (
            <div key={item._id} className=" rounded-lg overflow-hidden shadow-lg p-2 md:p-4 mb-5 md:mb-10">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded-xl" />
              <div className="p-1 md:p-3">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="px-3 py-1 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddHospitalityCards;
