import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const AddHandpicked = () => {
    const [formData, setFormData] = useState({
        name: "",
        plotArea: "",
        priceFrom: "",
        priceTo: "",
        image: null,
        description: "",
        highlights: "",
    });

    const [projects, setProjects] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const fetchProjects = async () => {
        try {
            const res = await axios.get("https://dhamanjali-group.vercel.app/api/handpicked");
            setProjects(res.data);
        } catch (err) {
            console.error("Error fetching projects:", err);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // ✅ Handle input & file change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // ✅ Handle form submit (Cloudinary + MongoDB)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = formData.image;

            // Upload image to Cloudinary if a file is selected
            if (formData.image && typeof formData.image !== "string") {
                const data = new FormData();
                data.append("file", formData.image);
                data.append("upload_preset", "newerror"); // your Cloudinary preset name

                const uploadRes = await axios.post(
                    "https://api.cloudinary.com/v1_1/dsauuyk9v/image/upload",
                    data
                );

                imageUrl = uploadRes.data.secure_url;
            }

            // Convert highlights to array
            const highlightsArray = formData.highlights
                .split(",")
                .map((item) => item.trim());

            const projectData = {
                name: formData.name,
                plotArea: formData.plotArea,
                price: {
                    from: formData.priceFrom,
                    to: formData.priceTo,
                },
                description: formData.description,
                highlights: highlightsArray,
                imageUrl,
            };

            if (editingId) {
                // Update existing project
                await axios.put(`https://dhamanjali-group.vercel.app/api/handpicked/${editingId}`, projectData);
                alert("Project updated successfully!");
            } else {
                // Add new project
                await axios.post("https://dhamanjali-group.vercel.app/api/handpicked", projectData);
                alert("Project added successfully!");
            }

            // Refresh list & reset form
            fetchProjects();
            setFormData({
                name: "",
                plotArea: "",
                priceFrom: "",
                priceTo: "",
                image: null,
                description: "",
                highlights: "",
            });
            setEditingId(null);
        } catch (error) {
            console.error("Error saving project:", error.response?.data || error.message);
        }
    };

    // ✅ Edit existing project
    const handleEdit = (project) => {
        setFormData({
            name: project.name,
            plotArea: project.plotArea,
            priceFrom: project.price?.from || "",
            priceTo: project.price?.to || "",
            description: project.description,
            highlights: project.highlights.join(", "),
            image: project.imageUrl,
        });
        setEditingId(project._id);
    };

    // ✅ Delete project
    const handleDelete = async (id) => {
        if (window.confirm("Delete this project?")) {
            await axios.delete(`https://dhamanjali-group.vercel.app/api/handpicked/${id}`);
            setProjects(projects.filter((p) => p._id !== id));
        }
    };

    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-6">
                    {editingId ? "Edit" : "Add"} Handpicked Project
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
                    <input
                        type="text"
                        name="name"
                        placeholder="Project Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="plotArea"
                        placeholder="Location"
                        value={formData.plotArea}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                    />

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Price Range</label>
                        <div className="flex gap-2">
                            <div className="flex items-center border rounded w-1/2">
                                <span className="px-2 text-gray-600">₹</span>
                                <input
                                    type="text"
                                    name="priceFrom"
                                    placeholder="Min Price"
                                    value={formData.priceFrom || ""}
                                    onChange={handleChange}
                                    className="w-full p-2 outline-none"
                                    required
                                />
                            </div>

                            <div className="flex items-center border rounded w-1/2">
                                <span className="px-2 text-gray-600">₹</span>
                                <input
                                    type="text"
                                    name="priceTo"
                                    placeholder="Max Price"
                                    value={formData.priceTo || ""}
                                    onChange={handleChange}
                                    className="w-full p-2 outline-none"
                                    required
                                />
                            </div>
                        </div>
                    </div>


                    <label className="text-gray-600 text-sm">
                        {editingId ? "Change Image (optional)" : "Upload Image"}
                    </label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required={!editingId}
                    />

                    {/* ✅ Live Preview */}
                    {formData.image && (
                        <div className="mt-3">
                            <p className="text-gray-600 text-sm mb-1">Image Preview:</p>
                            <img
                                src={
                                    typeof formData.image === "string"
                                        ? formData.image
                                        : URL.createObjectURL(formData.image)
                                }
                                alt="Preview"
                                className="w-full h-48 object-cover rounded border"
                            />
                        </div>
                    )}

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="highlights"
                        placeholder="Highlights (comma-separated)"
                        value={formData.highlights}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {editingId ? (
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded"
                            >
                                Update Project
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setEditingId(null);
                                    setFormData({
                                        name: "",
                                        plotArea: "",
                                        price: "",
                                        image: null,
                                        description: "",
                                        highlights: "",
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
                            Add Project
                        </button>
                    )}

                </form>

                {/* ✅ Display projects */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.map((p) => (
                        <div key={p._id} className="border p-3 rounded shadow">
                            <img
                                src={p.imageUrl}
                                alt={p.name}
                                className="w-full h-40 object-cover rounded"
                            />
                            <h3 className="font-bold mt-2">{p.name}</h3>
                            <p className="text-sm text-gray-600">{p.plotArea}</p>
                            <p className="text-gray-500 text-sm">₹{p.price?.from} - ₹{p.price?.to}</p>

                            <div className="flex gap-2 mt-3">
                                <button
                                    onClick={() => handleEdit(p)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(p._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* If no projects */}
                    {projects.length === 0 && (
                        <p className="text-gray-500 col-span-full text-center">
                            No handpicked projects added yet.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default AddHandpicked;
