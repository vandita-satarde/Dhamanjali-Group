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

            await axios.post("https://dhamanjali-group.vercel.app/api/testimonials", {
                ...formData,
                image: imageUrl,
            });

            alert("Testimonial added successfully");
            setFormData({ name: "", role: "", description: "", image: "" });
            setImageFile(null);
            fetchTestimonials();
        } catch (err) {
            console.error(err);
        }
    };

    const fetchTestimonials = async () => {
        const res = await axios.get("https://dhamanjali-group.vercel.app/api/testimonials");
        setTestimonials(res.data);
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this testimonial?");
        if (!confirmDelete) return; // stop if user clicks "Cancel"

        try {
            await axios.delete(`https://dhamanjali-group.vercel.app/api/testimonials/${id}`);
            alert("Testimonial deleted successfully!");
            fetchTestimonials(); // refresh list
        } catch (error) {
            console.error("Error deleting testimonial:", error);
            alert("Failed to delete testimonial!");
        }
    };


    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-6">
                    Add Testimonial</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={formData.name}
                        className="border p-2 w-full"
                    />
                    <input
                        name="role"
                        placeholder="Role"
                        onChange={handleChange}
                        value={formData.role}
                        className="border p-2 w-full"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        value={formData.description}
                        className="border p-2 w-full"
                    />
                    <input type="file" onChange={handleImageChange} />
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    {testimonials.map((t) => (
                        <div key={t._id} className="border p-3 rounded shadow">
                            <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full" />
                            <h3 className="font-bold">{t.name}</h3>
                            <p>{t.role}</p>
                            <p className="text-gray-600">{t.description}</p>
                            <button
                                onClick={() => handleDelete(t._id)}
                                className="text-red-500 mt-2"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AddTestimonial;
