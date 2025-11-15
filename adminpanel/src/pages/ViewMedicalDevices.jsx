import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const ViewMedicalDevices = () => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = "http://localhost:5000/api/medical-devices";

    // Function to fetch medical devices
    const fetchDevices = () => {
        setLoading(true);
        axios
            .get(API_URL)
            .then((res) => {
                setDevices(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching devices:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchDevices();
    }, []);

    // Delete device
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this device?")) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                setDevices((prev) => prev.filter((device) => device._id !== id));
                alert("Device deleted successfully");
            } catch (error) {
                console.error(error);
                alert("Error deleting device");
            }
        }
    };

    if (loading) {
        return (
            <>
                <Sidebar />
                <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                    <div className="text-center">Loading...</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold">
                        Medical Devices ({devices.length})
                    </h2>
                    <a 
                        href="/add-medical-device" 
                        className="bg-[#0f2769] text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add New Device
                    </a>
                </div>

                {devices.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No medical devices found.</p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {devices.map((device) => (
                            <div key={device._id} className="bg-white rounded-lg shadow-md p-6">
                                <div className="mb-4">
                                    <img 
                                        src={device.imageUrl} 
                                        alt={device.deviceName}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0f2769]">
                                            {device.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {device.description}
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-semibold text-[#0f2769]">
                                            Device: {device.deviceName}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {device.deviceDescription}
                                        </p>
                                    </div>

                                    <div>
                                        <h5 className="font-semibold text-[#0f2769] mb-2">Features:</h5>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {device.features && device.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2">•</span>
                                                    {feature.trim()}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t">
                                        <button
                                            onClick={() => handleDelete(device._id)}
                                            className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
                                        >
                                            Delete Device
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ViewMedicalDevices;