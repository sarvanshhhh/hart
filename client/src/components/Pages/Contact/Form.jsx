import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";

const Form = () => {
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
    <div className="w-[80%] lg:w-[50%] mx-auto mt-[10rem] rounded shadow-2xl shadow-gray-900 p-10">
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
        <h3 className="text-2xl lg:text-3xl font-semibold text-customBlue mb-5">
          Contact Us
        </h3>

        <input
          className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-customRed mb-3"
          placeholder="NAME"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-customRed mb-3"
          placeholder="EMAIL"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-customRed mb-3"
          placeholder="CONTACT NO"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        {/* Category Dropdown */}
        <div className="relative mb-3">
          <select
            className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-customRed appearance-none cursor-pointer"
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

          {/* Custom dropdown arrow */}
          <span className="absolute right-2 top-2.5 text-gray-400 pointer-events-none">▼</span>
        </div>

        <input
          className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-customRed mb-3"
          placeholder="SUBJECT"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-customRed mb-3"
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
            className="text-red-600 text-sm uppercase hover:text-customRed transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-red-600 text-sm uppercase hover:text-customRed transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;