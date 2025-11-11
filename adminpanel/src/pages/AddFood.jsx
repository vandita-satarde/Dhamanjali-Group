import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function AddFood() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null,
  });
  const [foodItems, setFoodItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch existing food items
  useEffect(() => {
    axios.get("http://localhost:5000/api/food")
      .then(res => setFoodItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = formData.image;

      // If a new image file is selected (not a URL)
      if (formData.image && typeof formData.image !== "string") {
        const data = new FormData();
        data.append("file", formData.image);
        data.append("upload_preset", "newerror");

        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dsauuyk9v/image/upload",
          data
        );
        imageUrl = uploadRes.data.secure_url;
      }

      const foodData = {
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description,
        image: imageUrl,
      };

      if (editingId) {
        // 🟢 UPDATE existing food item
        await axios.put(`http://localhost:5000/api/food/${editingId}`, foodData);
        alert("Food item updated successfully!");
      } else {
        // 🟢 ADD new food item
        await axios.post("http://localhost:5000/api/food", foodData);
        alert("Food item added successfully!");
      }

      // ✅ Refresh the list
      const res = await axios.get("http://localhost:5000/api/food");
      setFoodItems(res.data);

      // Reset form
      setFormData({
        title: "",
        subtitle: "",
        description: "",
        image: null,
      });
      setEditingId(null);
    } catch (error) {
      console.error("Error saving food item:", error.response?.data || error.message);
    }
  };


  // ✅ Handle edit button click
  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      image: item.image,
    });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this food item?")) {
      await axios.delete(`http://localhost:5000/api/food/${id}`);
      setFoodItems(foodItems.filter(item => item._id !== id));
    }
  };

  return (
    <>
      <Sidebar />
      <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
        <h2 className=" text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-3 md:mb-6 lg:mb-8">
          {editingId ? "Edit" : "Add"} Food Item
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter food title"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Enter food subtitlee"
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="border p-2 rounded"
            required
          />
          <input type="file" name="image" accept="image/*" onChange={handleChange} required />
          <button type="submit" className="bg-blue-900 text-white hover:bg-blue-800 px-4 py-2 rounded">
            {editingId ? "Update" : "Add"} Item
          </button>
        </form>

        {/* Display food items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {foodItems.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg shadow">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddFood;
