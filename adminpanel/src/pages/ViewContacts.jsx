import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar"; // optional if you use it

const ViewContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [remarks, setRemarks] = useState({});

    const API_URL = "https://dhamanjali-group.vercel.app/api/contact";

    // Function to fetch contacts
    const fetchContacts = () => {
        axios
            .get(API_URL)
            .then((res) => {
                setContacts(res.data);
                // initialize remarks for each contact
                const initialRemarks = {};
                res.data.forEach((contact) => {
                    initialRemarks[contact._id] = contact.remark || "";
                });
                setRemarks(initialRemarks);
            })
            .catch((err) => console.error("Error fetching contacts:", err));
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleRemarkChange = (id, value) => {
        setRemarks({ ...remarks, [id]: value });
    };

    const handleSaveRemark = (id) => {
        axios
            .put(`${API_URL}/${id}/remark`, {
                remark: remarks[id],
            })
            .then(() => {
                alert("Remark updated successfully!");
                fetchContacts();
            })
            .catch((err) => console.error(err));
    };

    // Delete contact
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                setContacts((prev) => prev.filter((contact) => contact._id !== id));
                alert("Contact deleted successfully");
                fetchContacts();
            } catch (error) {
                console.error(error);
                alert("Error deleting contact");
            }
        }
    };

    return (
        <>
            <Sidebar />
            <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
                <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-6">
                    Contact Submissions
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full shadow-md">
                        <thead className=" bg-blue-900 text-white">
                            <tr className="">
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Phone</th>
                                <th className="py-3 px-4 text-left">Address</th>
                                <th className="py-3 px-4 text-left">Occupation</th>
                                <th className="py-3 px-4 text-left">Remark</th>
                                <th className="py-3 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact._id} className="border-b border-gray-300 hover:bg-gray-50">
                                    <td className="py-3 px-4">{contact.fullName}</td>
                                    <td className="py-3 px-4">{contact.email}</td>
                                    <td className="py-3 px-4">{contact.phoneNumber}</td>
                                    <td className="py-3 px-4">{contact.address}</td>
                                    <td className="py-3 px-4">{contact.occupation}</td>
                                    {/* Remark Input */}
                                    <td className="py-3 px-4">
                                        <input
                                            type="text"
                                            value={remarks[contact._id] || ""}
                                            onChange={(e) => handleRemarkChange(contact._id, e.target.value)}
                                            className="h-20 border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
                                            placeholder="Add remark..."
                                        />
                                    </td>

                                    {/* Save Button */}
                                    <td className="py-3 px-4 ">
                                        <button
                                            onClick={() => handleSaveRemark(contact._id)}
                                            className="bg-blue-900 text-white m-1 px-3 py-1 rounded-md hover:bg-orange-600 text-sm"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => handleDelete(contact._id)}
                                            className="bg-red-500 text-white m-1 px-3 py-1 rounded-md hover:bg-red-600 text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ViewContacts;
