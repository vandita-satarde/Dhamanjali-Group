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
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [editingId, setEditingId] = useState(null);


    // Fetch existing stories
    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const res = await axios.get("https://dhamanjali-group.vercel.app/api/farmerStories");
            setStories(res.data);
        } catch (error) {
            console.error("Error fetching stories:", error);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle image upload
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Show preview
        setPreview(URL.createObjectURL(file));

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "newerror");
        data.append("folder", "farmer-stories");

        try {
            setLoading(true);
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dsauuyk9v/image/upload",
                data
            );
            setFormData({ ...formData, storyImg: res.data.secure_url });
        } catch (error) {
            console.error("Image upload failed:", error);
        } finally {
            setLoading(false);
        }
    };


    // Submit new story
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = formData.storyImg;

            // Upload only if storyImg is a File
            if (formData.storyImg instanceof File) {
                imageUrl = await uploadFile(formData.storyImg);
            }

            const dataToSend = { ...formData, storyImg: imageUrl };

            if (editingId) {
                await axios.put(`https://dhamanjali-group.vercel.app/api/farmerStories/${editingId}`, dataToSend);
                alert("Story updated successfully!");
                setEditingId(null);
            } else {
                await axios.post("https://dhamanjali-group.vercel.app/api/farmerStories", dataToSend);
                alert("Story added successfully!");
            }

            setFormData({ name: "", role: "", quote: "", storyImg: null });
            setPreview(null);
            fetchStories();
        } catch (error) {
            console.error("Error submitting story:", error);
        }
    };

    // helper to upload file to Cloudinary
    const uploadFile = async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "newerror");
        data.append("folder", "farmer-stories");

        const res = await axios.post("https://api.cloudinary.com/v1_1/dsauuyk9v/image/upload", data);
        return res.data.secure_url;
    };


    const handleEdit = (story) => {
        setFormData({
            name: story.name,
            role: story.role,
            quote: story.quote,
            storyImg: story.storyImg,
        });
        setPreview(story.storyImg);
        setEditingId(story._id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    // Delete story
    const handleDelete = async (id) => {
        if (!window.confirm("Delete this story?")) return;
        try {
            await axios.delete(`https://dhamanjali-group.vercel.app/api/farmerStories/${id}`);
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
                    className="bg-white p-6 rounded-xl shadow-md mb-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            onChange={handleImageUpload}
                            className="border p-2 rounded w-full"
                        />

                        {preview && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-40 h-40 object-cover rounded-lg border"
                                />
                            </div>
                        )}

                    </div>

                    <div className="mt-4 flex items-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            {loading ? "Uploading..." : editingId ? "Update Story" : "Add Story"}
                        </button>

                        {editingId && (
                            <button
                                type="button"
                                onClick={() => {
                                    setEditingId(null);
                                    setFormData({ name: "", role: "", quote: "", storyImg: null });
                                    setPreview(null);
                                }}
                                className="ml-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>

                {/* Display stories */}
                <div className="grid md:grid-cols-3 gap-6">
                    {stories.map((story) => (
                        <div
                            key={story._id}
                            className="bg-white rounded-xl shadow-md overflow-hidden p-4"
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
