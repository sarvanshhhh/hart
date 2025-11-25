import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { motion } from "framer-motion";
import { textVariant } from "../../Motion";

const Hero = () => {
  // ✅ Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { name, email, contact, category, subject, message };

    try {
      const response = await axios.post("http://localhost:5000", dataToSend);
      setAlertMessage(response.data.status || "Message sent successfully!");
      setAlertType("success");
      clearField();
    } catch (err) {
      setAlertMessage("Something went wrong. Please try again.");
      setAlertType("error");
    }
  };

  const clearField = () => {
    setName("");
    setEmail("");
    setContact("");
    setCategory("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
      {/* 🔹 Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover opacity-40 -z-10"
        src="/images/Contact/contact.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10"></div>

      {/* 🔹 Heading */}
      <div className="text-center mt-24 mb-10">
        <motion.h3
          initial="hidden"
          animate="show"
          variants={textVariant(0.3)}
          className="text-3xl lg:text-5xl font-semibold text-white-300 drop-shadow-lg mb-5"
        >
          Get in touch with us!
        </motion.h3>
      </div>

      {/* 🔹 Contact Form */}
      <div className="w-[85%] lg:w-[50%] mx-auto mb-20 rounded shadow-2xl shadow-gray-900 p-10 bg-black/40 backdrop-blur-md">
        {/* Alert */}
        <div className="mb-4">
          {alertMessage && (
            <Alert severity={alertType} onClose={() => setAlertMessage(null)}>
              {alertMessage}
            </Alert>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-semibold text-cyan-300 mb-5">
            Contact Us
          </h3>

          <input
            className="w-full bg-transparent border-b border-gray-500 py-2 text-gray-200 text-sm outline-none focus:border-cyan-400 mb-3"
            placeholder="NAME"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full bg-transparent border-b border-gray-500 py-2 text-gray-200 text-sm outline-none focus:border-cyan-400 mb-3"
            placeholder="EMAIL"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full bg-transparent border-b border-gray-500 py-2 text-gray-200 text-sm outline-none focus:border-cyan-400 mb-3"
            placeholder="CONTACT NO"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          {/* Category Dropdown */}
          <div className="relative mb-3">
            <select
              className="w-full bg-transparent border-b border-gray-500 py-2 text-gray-200 text-sm outline-none focus:border-cyan-400 appearance-none cursor-pointer"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled hidden>
                Select Category
              </option>
              <option className="bg-gray-900 text-gray-300" value="General Inquiry">
                General Inquiry
              </option>
              <option className="bg-gray-900 text-gray-300" value="Support">
                Support
              </option>
              <option className="bg-gray-900 text-gray-300" value="Feedback">
                Feedback
              </option>
              <option className="bg-gray-900 text-gray-300" value="Career">
                Career
              </option>
            </select>
            <span className="absolute right-2 top-2.5 text-gray-400 pointer-events-none">▼</span>
          </div>

          <input
            className="w-full bg-transparent border-b border-gray-500 py-2 text-gray-200 text-sm outline-none focus:border-cyan-400 mb-3"
            placeholder="SUBJECT"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <textarea
            className="w-full bg-transparent border-b border-gray-500 py-2 text-gray-200 text-sm outline-none focus:border-cyan-400 mb-3"
            placeholder="MESSAGE"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Buttons */}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={clearField}
              className="text-cyan-400 text-sm uppercase hover:text-cyan-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-cyan-400 text-sm uppercase hover:text-cyan-300 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
