import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const AddTestimonial = () => {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        description: "",
        image: "",
    });
    const [imageFile, setImageFile] = useState(null);
    const [editing, setEditing] = useState(null);
    const [testimonials, setTestimonials] = useState([]);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleImageChange = (e) => setImageFile(e.target.files[0]);

    // Upload to Cloudinary
    const uploadImageToCloudinary = async () => {
        if (!imageFile) return "";
        const data = new FormData();
        data.append("file", imageFile);
        data.append("upload_preset", "newerror");


        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dsauuyk9v/image/upload",
            { method: "post", body: data }
        );
        const imgData = await res.json();
        return imgData.secure_url;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const imageUrl = await uploadImageToCloudinary();

            if (editing) {
                // ✅ Update existing testimonial
                await axios.put(`http://localhost:5000/api/testimonials/${editing}`, {
                    ...formData,
                    image: imageUrl,
                });
                alert("Testimonial updated successfully!");
            } else {
                // ✅ Add new testimonial
                await axios.post("http://localhost:5000/api/testimonials", {
                    ...formData,
                    image: imageUrl,
                });
                alert("Testimonial added successfully!");
            }
            setFormData({ name: "", role: "", description: "", image: "" });
            setImageFile(null);
            setEditing(null);
            fetchTestimonials();
        } catch (err) {
            console.error("Error saving testimonial:", err);
            alert("Failed to save testimonial!");
        }
    };

    // Fetch all testimonials
    const fetchTestimonials = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/testimonials");
            setTestimonials(res.data);
        } catch (err) {
            console.error("Error fetching testimonials:", err);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this testimonial?");
        if (!confirmDelete) return; // stop if user clicks "Cancel"

        try {
            await axios.delete(`http://localhost:5000/api/testimonials/${id}`);
            alert("Testimonial deleted successfully!");
            fetchTestimonials(); // refresh list
        } catch (error) {
            console.error("Error deleting testimonial:", error);
            alert("Failed to delete testimonial!");
        }
    };

    // Set data for editing
    const handleEdit = (t) => {
        setEditing(t._id);
        setFormData({
            name: t.name,
            role: t.role,
            description: t.description,
            image: t.image,
        });
        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to form
    };

    // Cancel edit
    const handleCancelEdit = () => {
        setEditing(null);
        setFormData({ name: "", role: "", description: "", image: "" });
        setImageFile(null);
    };

    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-6">
                    {editing ? "Edit Testimonial" : "Add Testimonial"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3 max-w-md shadow-lg p-6 rounded-xl" >
                    <input
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={formData.name}
                        className="border p-2 w-full rounded"
                    />
                    <input
                        name="role"
                        placeholder="Role"
                        onChange={handleChange}
                        value={formData.role}
                        className="border p-2 w-full rounded"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        value={formData.description}
                        className="border p-2 w-full rounded"
                    />
                    <input type="file" onChange={handleImageChange} className="bg-blue-100 p-2 rounded w-full " />
                    {formData.image && !imageFile && (
                        <img
                            src={formData.image}
                            alt="preview"
                            className="w-20 h-20 rounded-full mt-2"
                        />
                    )}

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded"
                        >
                            {editing ? "Update" : "Submit"}
                        </button>
                        {editing && (
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    {testimonials.map((t) => (
                        <div key={t._id} className=" p-4 rounded shadow-lg ">
                            <div className="flex items-center gap-4 ">
                                <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full" />
                                <div className="">
                                    <h3 className="font-bold">{t.name}</h3>
                                    <p>{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600">{t.description}</p>
                            <div className="flex gap-3 mt-3">
                                <button
                                    onClick={() => handleEdit(t)}
                                    className="text-blue-600 font-semibold"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(t._id)}
                                    className="text-red-500 font-semibold"
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
};

export default AddTestimonial;
