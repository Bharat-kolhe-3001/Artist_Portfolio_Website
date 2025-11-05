import React, { useState } from "react";
import { motion } from "framer-motion";

const BlogUpload = () => {
  const [image, setImage] = useState(null);
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image || !shortDesc || !longDesc) { 
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    console.log({
      image: image.name,
      shortDesc,
      longDesc,
    });

    alert("✅ Blog uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-xl p-8 text-white border border-gray-700"
      >
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-indigo-500">Upload</span> Your Blog
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 animate__animated animate__fadeIn"
        >
          {/* Upload Image */}
          <div className="space-y-2">
            <label className="text-lg font-semibold">Upload Image:</label>
            <div className="border-2 border-dashed border-gray-600 rounded-xl p-4 flex flex-col items-center justify-center hover:border-indigo-500 transition-all duration-300">
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label
                htmlFor="fileInput"
                className="cursor-pointer text-indigo-400 hover:text-indigo-500 transition-all duration-300"
              >
                <i className="ri-upload-2-line text-3xl mb-2"></i>
                <p>Click or drag an image here</p>
              </label>
            </div>

            {image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-4 text-center"
              >
                <p className="text-gray-300 mb-2 font-medium">
                  Selected Image: {image.name}
                </p>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="mx-auto w-48 h-48 object-cover rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            )}
          </div>

          {/* Short Description */}
          <div className="space-y-2">
            <label className="text-lg font-semibold">Short Description:</label>
            <input
              type="text"
              placeholder="Enter short blog title..."
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
              className="w-full bg-gray-900/80 border border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-300"
            />
          </div>

          {/* Long Description */}
          <div className="space-y-2">
            <label className="text-lg font-semibold">Long Description:</label>
            <textarea
              placeholder="Write your full blog content..."
              value={longDesc}
              onChange={(e) => setLongDesc(e.target.value)}
              rows="6"
              className="w-full bg-gray-900/80 border border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none resize-none transition-all duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md shadow-indigo-700/30 transition-all duration-300"
          >
            <i className="ri-send-plane-2-line mr-2"></i> Upload Blog
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default BlogUpload;

