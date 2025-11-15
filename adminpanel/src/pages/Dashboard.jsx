import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../adminpanel/src/components/Sidebar";

function Dashboard() {
  const menuItems = [
    { label: "Gallery", route: "/gallery" },
    { label: "M-Mart Cards", route: "/mmart" },
    { label: "Food Items", route: "/food-items" },
    { label: "Hospitality", route: "/hospitality" },
    { label: "Handpicked Projects", route: "/handpicked-projects" },
    { label: "Farmer Stories", route: "/farmer-stories" },
    { label: "Testimonials", route: "/testimonials" },
    { label: "Health Testimonials", route: "/health-testimonials" },
    { label: "Food Testimonials", route: "/food-testimonials" },
    { label: "Contact Submissions", route: "/contact-submissions" },
    { label: "Email Subscribers", route: "/email-subscribers" },
    { label: "Medical Devices", route: "/medical-devices" },
  ];

  return (
    <>
      <Sidebar />
      <div className='pl-5 md:pl-85 pt-24 md:pt-8 min-h-screen p-8 md:p-16  text-[#0f2769]  bg-[#F5F9FE] '>
        <p className='text-center text-[25px] md:text-[38px] font-bold mb-4 md:mb-6 '>Welcome Admin</p>
        <h2 className='text-center text-[22px] md:text-[30px] font-bold mb-6 '>Dashboard</h2>

        {/* Grid Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-5 md:space-x-14 ">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              className="bg-[#0f2769] text-[#F5F9FE] text-center px-10 py-6 rounded-md hover:bg-blue-900 transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard
