import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const AddStories = () => {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        quote: "",
        storyImg: null,
    });
    const [stories, setStories] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // Fetch existing stories
    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/farmerStories");
            setStories(res.data);
        } catch (error) {
            console.error("Error fetching stories:", error);
        }
    };

    // ✅ Handle input & file change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files.length > 0) {
            setFormData({ ...formData, storyImg: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    // Submit new story
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.storyImg && formData.storyImg.size > 10 * 1024 * 1024) { // 10MB
            alert("File size too large! Please upload an image under 10MB.");
            return; // ⛔ stop the upload process
        }

        try {
            let imageUrl = formData.storyImg;

            // Upload only if storyImg is a File
            if (formData.storyImg && typeof formData.storyImg !== 'string') {
                const data = new FormData();
                data.append("file", formData.storyImg);
                data.append("upload_preset", "newerror");

                const res = await axios.post("https://api.cloudinary.com/v1_1/dsauuyk9v/image/upload", data);

                imageUrl = res.data.secure_url;
            }

            // const dataToSend = { ...formData, storyImg: imageUrl };

            const dataToSend = {
                name: formData.name,
                role: formData.role,
                quote: formData.quote,
                storyImg: imageUrl,
            }

            if (editingId) {
                await axios.put(`http://localhost:5000/api/farmerStories/${editingId}`, dataToSend);
                alert("Story updated successfully!");
                setEditingId(null);
            } else {
                await axios.post("http://localhost:5000/api/farmerStories", dataToSend);
                alert("Story added successfully!");
            }

            fetchStories();
            setFormData({ name: "", role: "", quote: "", storyImg: null });
            setEditingId(null);
        } catch (error) {
            console.error("Error submitting story:", error);
        }
    };

    const handleEdit = (story) => {
        setFormData({
            name: story.name,
            role: story.role,
            quote: story.quote,
            storyImg: story.storyImg,
        });
        setEditingId(story._id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    // Delete story
    const handleDelete = async (id) => {
        if (!window.confirm("Delete this story?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/farmerStories/${id}`);
            fetchStories();
        } catch (error) {
            console.error("Error deleting story:", error);
        }
    };

    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-6">
                    Add Farmer Story</h2>

                <form
                    onSubmit={handleSubmit}
                    className="max-w-md p-6 rounded-xl shadow-lg mb-8"
                >
                    <div className="  space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Farmer Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                        <input
                            type="text"
                            name="role"
                            placeholder="Role / Location"
                            value={formData.role}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                        <textarea
                            name="quote"
                            placeholder="Quote / Story"
                            value={formData.quote}
                            onChange={handleChange}
                            className="border p-2 rounded w-full md:col-span-2"
                            required
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="bg-blue-100 p-2 rounded w-full mb-4 "
                            required={!editingId}
                        />

                        {/* ✅ Live Preview */}
                        {formData.storyImg && (
                            <div className="mt-3">
                                <p className="text-gray-600 text-sm mb-1">Image Preview:</p>
                                <img
                                    src={
                                        typeof formData.storyImg === "string"
                                            ? formData.storyImg
                                            : URL.createObjectURL(formData.storyImg)
                                    }
                                    alt="Preview"
                                    className="w-full h-48 object-cover rounded border mb-5"
                                />
                            </div>
                        )}
                    </div>

                    {editingId ? (
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded"
                            >
                                Update Story
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setEditingId(null);
                                    setFormData({
                                        name: "",
                                        role: "",
                                        quote: "",
                                        storyImg: null,
                                    });
                                }}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded"
                        >
                            Add Story
                        </button>
                    )}
                </form>

                {/* Display stories */}
                <div className="grid md:grid-cols-3 gap-6 mb-10 ">
                    {stories.map((story) => (
                        <div
                            key={story._id}
                            className=" rounded-xl shadow-lg overflow-hidden p-4"
                        >
                            <img
                                src={story.storyImg}
                                alt={story.name}
                                className="w-full h-48 object-cover rounded-lg mb-3"
                            />
                            <h3 className="text-lg font-semibold">{story.name}</h3>
                            <p className="text-gray-500 text-sm">{story.role}</p>
                            <p className="mt-2 text-gray-700 text-sm">“{story.quote}”</p>
                            <button
                                onClick={() => handleEdit(story)}
                                className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(story._id)}
                                className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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

export default AddStories;
