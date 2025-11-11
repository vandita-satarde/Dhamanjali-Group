import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function AddGallery() {
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]); // store uploaded images

   useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/gallery");
      setGallery(res.data);
    } catch (err) {
      console.error("Failed to fetch gallery images", err);
    }
  };


  const compressImage = (file, maxWidth = 1200, quality = 0.8) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
        const newWidth = img.width * ratio;
        const newHeight = img.height * ratio;
        
        canvas.width = newWidth;
        canvas.height = newHeight;
        
        // Draw and compress
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(resolve, 'image/jpeg', quality);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Check file size (limit to 5MB before compression)
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5MB");
      return;
    }

    // Compress the image
    try {
      const compressedFile = await compressImage(selectedFile);
      setImage(compressedFile);
    } catch (err) {
      console.error("Error compressing image:", err);
      setImage(selectedFile); // Fallback to original if compression fails
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image!");

    const data = new FormData();
    data.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/gallery/add", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        timeout: 30000 // 30 second timeout
      });
      alert("Image uploaded successfully!");
      setImage(null);
      fetchGallery(); // Refresh gallery
    } catch (err) {
      console.error(err);
      if (err.code === 'ERR_BAD_REQUEST' && err.response?.status === 413) {
        alert("Image is too large. Please select a smaller image.");
      } else {
        alert("Upload failed! Please try again.");
      }
    }
  };

  // ✅ Delete image
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/gallery/${id}`);
      alert("Image deleted successfully");
      fetchGallery(); // refresh
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="pl-5 md:pl-80 lg:pl-85 pt-24 md:pt-10 lg:pt-8 bg-[#F5F9FE] min-h-screen pr-6 md:pr-8 lg:pr-16">
        <h2 className=" text-[#0f2769] text-[22px] md:text-[30px] font-bold mb-3 md:mb-6 lg:mb-8">
          Upload Gallery Image
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="file" 
              onChange={handleFileChange} 
              accept="image/*"
              required 
              className="bg-blue-100 p-2 rounded-lg w-full" 
            />
            {image && (
              <p className="text-sm text-gray-600 mt-2">
                Selected file size: {(image.size / 1024 / 1024).toFixed(2)} MB
                {image.size > 1024 * 1024 && " (Compressed)"}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Max file size: 5MB. Images will be automatically compressed.
            </p>
          </div>
          <button
            type="submit"
            className=" px-4 py-2 rounded bg-blue-900 text-white hover:bg-blue-800"
            disabled={!image}
          >
            Upload
          </button>
        </form>{/* Uploaded Images Section */}
        <h3 className="text-[#0f2769] text-[16px] font-semibold ml-3 mt-6 mb-2">
          Uploaded Images
        </h3>

        {gallery.length === 0 ? (
          <p className="text-gray-500">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img) => (
              <div
                key={img._id}
                className="rounded-lg overflow-hidden shadow-md bg-white"
              >
                <img
                  src={img.imageUrl}
                  alt="Gallery"
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
                 <button
                  onClick={() => handleDelete(img._id)}
                  className="bg-red-600 text-white text-[12px] m-2 p-1 rounded-md hover:bg-red-700 hover:scale-105 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default AddGallery;
