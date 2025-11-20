import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const AddFoodTestimonials = () => {
    const [formData, setFormData] = useState({ name: "", text: "" });
    const [testimonials, setTestimonials] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const API_URL = "https://dhamanjali-group.vercel.app/api/foodTestimonials";

    // Fetch all testimonials on load
    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => setTestimonials(res.data))
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit (add / update)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`${API_URL}/${editingId}`, formData);
                alert("✅ Testimonial updated successfully!");
            } else {
                await axios.post(API_URL, formData);
                alert("✅ Testimonial added successfully!");
            }
            setFormData({ name: "", text: "" });
            setEditingId(null);
            const res = await axios.get(API_URL);
            setTestimonials(res.data);
        } catch (error) {
            console.error("Save error:", error);
            alert("❌ Failed to save testimonial. Please try again.");
        }
    };

    // Handle edit
    const handleEdit = (item) => {
        setFormData({ name: item.name, text: item.text });
        setEditingId(item._id);
    };

    // Handle delete
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
        try {
            await axios.delete(`${API_URL}/${id}`);
            alert("🗑️ Testimonial deleted successfully!");
            setTestimonials(testimonials.filter((item) => item._id !== id));
        } catch (error) {
            console.error("Delete error:", error);
            alert("❌ Failed to delete testimonial.");
        }
    };

    // Handle cancel edit
    const handleCancel = () => {
        setFormData({ name: "", text: "" });
        setEditingId(null);
    };

    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-6">
                    {editingId ? "Edit Food Testimonial" : "Add Food Testimonial"}
                </h2>

                <form onSubmit={handleSubmit} className="max-w-lg p-6 rounded shadow-md space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Customer Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        name="text"
                        placeholder="Testimonial Text"
                        value={formData.text}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                        rows="4"
                    />
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-600"
                        >
                            {editingId ? "Update" : "Submit"}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>

                <h2 className="text-xl font-semibold mt-10 mb-4">All Food Testimonials</h2>

                <div className="flex flex-wrap gap-4">
                    {testimonials.map((item) => (
                        <div
                            key={item._id}
                            className="flex flex-col justify-between w-[350px] md:w-[400px] rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                            <div className="flex-1">
                                <p className="font-bold text-lg">{item.name}</p>
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                            <div className="flex justify-end mt-4 gap-3">
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
                    ))}
                </div>
            </div >
        </>
    );
};

export default AddFoodTestimonials;
