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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5000/api/mart/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Mart item added!");
      fetchMartItems();
      setFormData({ title: "", description: "", image: null });
    } catch (err) {
      console.error(err);
      alert("Error adding mart item");
    }
  };

  const fetchMartItems = async () => {
    const res = await axios.get("http://localhost:5000/api/mart");
    setMartItems(res.data);
  };

  useEffect(() => {
    fetchMartItems();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
        <h2 className=" text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-3 md:mb-6 lg:mb-8"> Add Mart Item</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
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
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>

        {/* Display existing mart items */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {martItems.map((item) => (
            <div
              key={item._id}
              className="p-4 border rounded shadow flex flex-col items-center"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-24 w-24 object-cover mb-2 rounded"
              />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddMartItem;
