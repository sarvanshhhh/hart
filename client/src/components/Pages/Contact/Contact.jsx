import React from 'react'

import Hero from './Hero'
import Address from './Address'
import Location from './Location'

{/*import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  // Alert state
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { name, email, contact, message };

    try {
      const response = await axios.post("http://localhost:5000", dataToSend);
      setAlertMessage(response.data.status || "Message sent successfully!");
      setAlertType("success");
      clearField(); // Clear input fields after submission
    } catch (err) {
      setAlertMessage("Something went wrong. Please try again.");
      setAlertType("error");
    }
  };

  const clearField = () => {
    setName("");
    setEmail("");
    setContact("");
    setMessage("");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-3 pt-[7rem]">
      {/* Contact Form
      <div className="flex flex-col p-12 bg-gray-900 text-white max-w-lg mx-auto rounded-lg shadow-lg w-[100%] lg:w-[60%]">
        <div className="px-5 rounded-2xl shadow-lg w-full">
          <div className="relative inline-block mb-6">
            <div className="flex flex-col text-4xl font-bold uppercase">
              <span className="text-pink-600">Contact</span>
              <span className="text-pink-600">Us</span>
            </div>
            <div className="absolute left-0 -bottom-2 w-8 h-1 bg-pink-600"></div>
          </div>

          {/* Alert
          <div className="mb-4">
            {alertMessage && (
              <Alert severity={alertType} onClose={() => setAlertMessage(null)}>
                {alertMessage}
              </Alert>
            )}
          </div>

          {/* Form
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-gray-300"
                placeholder="NAME"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-gray-300"
                placeholder="EMAIL"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-gray-300"
                placeholder="CONTACT NO"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <textarea
                className="w-full bg-transparent border-b border-gray-600 py-2 text-gray-300 text-sm outline-none focus:border-gray-300"
                placeholder="MESSAGE"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Buttons
            <div className="mt-8 flex justify-end space-x-4">
              <button
                type="button"
                onClick={clearField}
                className="text-pink-600 text-sm uppercase hover:text-pink-700 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-pink-600 text-sm uppercase hover:text-pink-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Side Map & Contact Info
      <div className="w-full md:w-1/2 p-6 flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-300 mb-5">Our Office</h3>
          <p className="text-gray-500">
            Address: 3rd Floor, M.P. Audyogik Kendra Vikas Nigam (J) Ltd Howbagh,
            Railway Station Rd, MCI Colony, Gorakhpur, Jabalpur, Madhya Pradesh 482001
          </p>
          <p className="text-gray-500">Phone: +91 93991 83331</p>
          <p className="text-gray-500">Email: hrhartalkarinnovations@gmail.com</p>
        </div>
        <iframe
          className="w-full h-64 rounded-2xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.6350062585216!2d79.93315177430581!3d23.147012911674818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae11953e4813%3A0x5ed47710c0e66e3a!2sJabalpur%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1740758667361!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Jabalpur Incubation Center"
        ></iframe>
      </div>
    </div>
  );
}
*/}


const Contact = () => {
  return (
    <div>
      <Hero />
      <Address />
      
      <Location />
    </div>
  )
}

export default Contact
