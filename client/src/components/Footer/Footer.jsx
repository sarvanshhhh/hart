import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const FooterComponent = () => {
  return (
    <footer className="text-gray-500 font-sans py-20 bg-transparent pt-40 z-50">
      <div className="relative z-50 max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-9 items-start pb-4">
        
        {/* 🔹 Left Section (Services & Our Pages) */}
        <div className="flex justify-start items-start w-full lg:w-auto gap-16">
          <div className="flex flex-col justify-center items-start">
            <span className="text-xl pb-3" style={{ color: "#cc0000" }}>
              Services
            </span>
            <a href="/" className="block p-1 text-white hover:text-customBlue">Home</a>
            <a href="/about" className="block p-1 text-white hover:text-customBlue">About</a>
            <a href="/offering" className="block p-1 text-white hover:text-customBlue">Offering</a>
            <a href="/contact" className="block p-1 text-white hover:text-customBlue">Contact</a>
            <a href="/Media" className="block p-1 text-white hover:text-customBlue">Media</a>
          </div>

          <div className="flex flex-col justify-center items-start">
            <span className="text-xl pb-3" style={{ color: "#cc0000" }}>
              Our Pages
            </span>
            <a href="/career" className="block p-1 text-white hover:text-customBlue">Careers</a>
            <a href="/faq" className="block p-1 text-white hover:text-customBlue">FAQs</a>
            <a href="/testimonials" className="block p-1 text-white hover:text-customBlue">Testimonials</a>
            <a href="/terms" className="block p-1 text-white hover:text-customBlue">Terms & Conditions</a>
          </div>
        </div>

        {/* 🔹 Right Section (Get in Touch) */}
        <div className="flex flex-col justify-center items-center lg:items-end text-right">
          <div className="text-3xl pb-3" style={{ color: "#cc0000" }}>
            Get in Touch
          </div>
          <div className="flex space-x-4 justify-end">
            <a
              href="https://www.linkedin.com/company/hartalkar-industries/posts/?feedView=all"
              className="transition-all text-white hover:scale-105 w-[50px] h-[50px] bg-[var(--textwhite)] rounded-full flex justify-center pt-2 duration-300"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="transition-all text-white hover:scale-105 w-[50px] h-[50px] bg-[var(--textwhite)] rounded-full flex justify-center pt-2 duration-300"
            >
              <MdCall size={30} />
            </a>
            <a
              href="mailto:info@hartalkar.com"
              className="transition-all text-white hover:scale-105 w-[50px] h-[50px] bg-[var(--textwhite)] rounded-full flex justify-center pt-2 duration-300"
            >
              <IoMdMail size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-10">
        <p>
          Copyright &copy; 2025 •{" "}
          <span className="text-customBlue hover:underline">
            Hartalkar Innovation Pvt. Ltd.
          </span>{" "}
          • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
