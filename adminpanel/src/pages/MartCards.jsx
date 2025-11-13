import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function AddMartItem() {
  const [martItems, setMartItems] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const compressImage = (file, maxWidth = 1200, quality = 0.8) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
        const newWidth = img.width * ratio;
        const newHeight = img.height * ratio;
        
        canvas.width = newWidth;
        canvas.height = newHeight;
        
        // Draw and compress
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(resolve, 'image/jpeg', quality);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image' && files && files[0]) {
      const selectedFile = files[0];
      
      // Check file size (limit to 5MB before compression)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }

      // Compress the image
      try {
        const compressedFile = await compressImage(selectedFile);
        setFormData({
          ...formData,
          [name]: compressedFile,
        });
      } catch (err) {
        console.error("Error compressing image:", err);
        setFormData({
          ...formData,
          [name]: selectedFile, // Fallback to original if compression fails
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill in all fields and select an image!");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5000/api/mart/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 30000 // 30 second timeout
      });
      alert("Mart item added!");
      fetchMartItems();
      setFormData({ title: "", description: "", image: null });
    } catch (err) {
      console.error(err);
      if (err.code === 'ERR_BAD_REQUEST' && err.response?.status === 413) {
        alert("Image is too large. Please select a smaller image.");
      } else {
        alert("Error adding mart item. Please try again.");
      }
    }
  };

  const fetchMartItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/mart");
      setMartItems(res.data);
    } catch (error) {
      console.error("Error fetching mart items:", error);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/mart/${id}`);
      alert("Mart item deleted successfully!");
      fetchMartItems(); // Refresh the list
    } catch (error) {
      console.error("Error deleting mart item:", error);
      alert("Error deleting mart item. Please try again.");
    }
  };

  useEffect(() => {
    fetchMartItems();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
        <h2 className=" text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-3 md:mb-6 lg:mb-8"> Add Mart Item</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md shadow-lg p-6 rounded-xl">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded h-30 "
            required
          />
          <div>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="bg-blue-100 p-2 rounded w-full"
              required
            />
            {formData.image && (
              <p className="text-sm text-gray-600 mt-2">
                Selected file size: {(formData.image.size / 1024 / 1024).toFixed(2)} MB
                {formData.image.size > 1024 * 1024 && " (Compressed)"}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Max file size: 5MB. Images will be automatically compressed.
            </p>
          </div>
          <button
            type="submit"
            className=" py-2 rounded bg-blue-900 text-white hover:bg-blue-800"
            disabled={!formData.title || !formData.description || !formData.image}
          >
            Add Item
          </button>
        </form>

        {/* Display existing mart items */}
        <div className="mt-8 mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {martItems.map((item) => (
            <div
              key={item._id}
              className="p-4 rounded shadow-lg flex flex-col items-center relative"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-34 w-34 object-cover mb-2 rounded-xl"
              />
              <h3 className="font-semibold text-center">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center mb-3">{item.description}</p>
              
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(item._id, item.title)}
                className="mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddMartItem;
