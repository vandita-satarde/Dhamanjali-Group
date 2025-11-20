import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AddMedicalDevice = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        deviceName: "",
        deviceDescription: "",
        features: "",
    });

    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!imageFile) {
            alert("Please select an image");
            return;
        }

        setLoading(true);
        const sendData = new FormData();
        sendData.append("title", formData.title);
        sendData.append("description", formData.description);
        sendData.append("deviceName", formData.deviceName);
        sendData.append("deviceDescription", formData.deviceDescription);
        sendData.append("features", JSON.stringify(formData.features.split(",")));
        sendData.append("image", imageFile);

        try {
            await axios.post("https://dhamanjali-group.vercel.app/api/medical-devices", sendData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Device added successfully!");
            navigate("/medical-devices");
        } catch (error) {
            console.error(error);
            alert("Error adding device. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[#0f2769] text-[18px] md:text-[30px] font-bold">
                        Add Medical Device</h2>
                    <button 
                        onClick={() => navigate("/medical-devices")}
                        className="bg-gray-600 text-white px-3 md:px-4 py-2 rounded hover:bg-gray-700"
                    >
                        View All Devices
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="max-w-lg w-full space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Section Title"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Section Description"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    ></textarea>

                    <input
                        type="text"
                        name="deviceName"
                        placeholder="Device Name"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <textarea
                        name="deviceDescription"
                        placeholder="Device Description"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    ></textarea>

                    <input
                        type="text"
                        name="features"
                        placeholder="Features (comma separated)"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="border p-2 w-full"
                    />

                    <button 
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                    >
                        {loading ? "Adding..." : "Submit"}
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddMedicalDevice;
