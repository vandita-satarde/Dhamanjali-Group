import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const AddHealthTestimonial = () => {
  const [formData, setFormData] = useState({ name: "", text: "" });
  const [testimonials, setTestimonials] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const API_URL = "http://localhost:5000/api/healthTestimonials";

  // ✅ Fetch testimonials
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(API_URL);
      setTestimonials(res.data);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      alert("Failed to load testimonials");
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // ✅ Add testimonial with alert
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.text.trim()) {
      alert("Please fill in both Name and Testimonial fields!");
      return;
    }

    try {
      if (editingId) {
        // 🔹 Update existing testimonial
        await axios.put(`${API_URL}/${editingId}`, formData);
        alert("✏️ Testimonial updated successfully!");
        setEditingId(null);
      } else {
        // 🔹 Add new testimonial
        await axios.post(API_URL, formData);
        alert("✅ Testimonial added successfully!");
      }
      setFormData({ name: "", text: "" });
      fetchTestimonials();
    } catch (err) {
      console.error("Error submitting testimonial:", err);
      alert("❌ Failed to save testimonial. Try again.");
    }
  };

  // ✅ Cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ name: "", text: "" });
  };

  // ✅ Edit
  const handleEdit = (t) => {
    setFormData({ name: t.name, text: t.text });
    setEditingId(t._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Delete testimonial with confirmation
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "⚠️ Are you sure you want to delete this testimonial?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("🗑️ Testimonial deleted successfully!");
      fetchTestimonials();
    } catch (err) {
      console.error("Error deleting testimonial:", err);
      alert("❌ Failed to delete testimonial. Try again.");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
        <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-6">
          {editingId ? "Edit Health Testimonial" : "Add Health Testimonial"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 p-4 rounded shadow-lg max-w-lg">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Testimonial"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            className="border p-2 rounded"
            rows={4}
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-indigo-700 text-white font-semibold px-6 py-2 rounded hover:bg-indigo-500 transition-colors"
            >
              {editingId ? "Update" : "Add"} Health Testimonial
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="flex flex-wrap gap-6 mt-6">
          {testimonials.length > 0 ? (
            testimonials.map((t) => (
              <div
                key={t._id}
                className="flex flex-col justify-between w-[350px] md:w-[400px] rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-lg mb-2">{t.name}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
                </div>
                <div className="flex justify-end mt-4 gap-3">
                  <button
                    onClick={() => handleEdit(t)}
                    className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="px-3 py-1 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">No testimonials found.</p>
          )}
        </div>

      </div>
    </>
  );
};

export default AddHealthTestimonial;
