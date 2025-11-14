import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function ViewEmails() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get("https://dhamanjali-group.vercel.app/api/email")
      .then((res) => setEmails(res.data))
      .catch(() => console.error("Error fetching emails"));
  }, []);

  return (
    <>
      <Sidebar />
      <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
        <h2 className="text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-6">
          Subscribers
        </h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-[#0f2769] text-gray-200">
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Subscribed On</th>
            </tr>
          </thead>

          <tbody>
            {emails.map((item) => (
              <tr key={item._id} className="text-[#0f2769]">
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewEmails;
