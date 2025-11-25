import React, { useState } from "react";

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
    resumeFile: null,
  });

  // 🔹 Open Modal
  const openModal = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
    setFormSubmitted(false);
    resetFormData();
  };

  // 🔹 Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRole("");
    setFormSubmitted(false);
    resetFormData();
  };

  // 🔹 Reset Form Data
  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      coverLetter: "",
      resumeFile: null,
    });
  };

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resumeFile: files[0] }));
    } else if (name === "coverLetter") {
      const words = value.trim().split(/\s+/).filter(Boolean);
      if (words.length <= 120) {
        setFormData((prev) => ({ ...prev, coverLetter: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 🔹 Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="relative text-white overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/Home/Hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* Page Heading */}
      <div className="py-16 text-center relative z-10">
        <h1
          className="text-5xl md:text-6xl mb-4 mt-20 drop-shadow-md text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #dae1e2ff, #dff8f8ff)",
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
          }}
        >
          Join Our Team
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Discover life at{" "}
          <span className="text-cyan-400 font-semibold">Hartalkar</span> and
          explore exciting opportunities to grow with us.
        </p>
      </div>

      {/* Careers Section */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4">
        <h2
          className="text-5xl mb-6 drop-shadow-md text-transparent bg-clip-text text-center"
          style={{
            backgroundImage: "linear-gradient(to right, #dae1e2ff, #dff8f8ff)",
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
          }}
        >
          Open Roles
        </h2>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left font-sans">
          {[
            {
              title: "Frontend Developer",
              pos: "Software Development",
              skills: "React, Tailwind CSS, Responsive Design",
              eligibility: "B.Tech in CS/IT, MCA",
              exp: "0-1 year",
              loc: "Onsite",
            },
            {
              title: "Backend Developer",
              pos: "Software Development",
              skills: "Node.js, Express, MongoDB, REST APIs",
              eligibility: "B.Tech in CS/IT, MCA",
              exp: "0-1 years",
              loc: "Onsite",
            },
            {
              title: "UI/UX Designer",
              pos: "Design",
              skills: "Figma, Adobe XD, Design Systems",
              eligibility: "B.Tech in CS/IT, MCA",
              exp: "0-1 years",
              loc: "Onsite",
            },
            {
              title: "AutoCAD Mechanical Designer",
              pos: "Mechanical Design",
              skills: "Drafting, 3D Modelling, AutoCAD",
              eligibility: "B.Tech in Mechatronics/Mechanical",
              exp: "Fresher",
              loc: "Onsite",
            },
            {
              title: "Marketing Intern",
              pos: "Marketing",
              skills: "SEO, Social Media, Email Marketing",
              eligibility: "BCOM,BBA,MBA",
              exp: "0-1 years",
              loc: "Onsite",
            },
            {
              title: "IT Support Engineer",
              pos: "Technical Support",
              skills: "Tech Support, Troubleshooting, Networking",
              eligibility: "B.Tech in CS/IT",
              exp: "Fresher",
              loc: "Onsite",
            },
            {
              title: "Network Engineer",
              pos: "Networking",
              skills: "TCP/IP, LAN, WAN, DHCP, DNS",
              eligibility: "B.Tech in CS/IT",
              exp: "Fresher",
              loc: "Onsite",
            },
            {
              title: "Team Coordinator",
              pos: "Management",
              skills: "Task Coordination, Communication",
              eligibility: "BBA/MBA",
              exp: "Fresher",
              loc: "Onsite",
            },
            {
              title: "Business Development Executive",
              pos: "Business Development",
              skills: "Communication, Lead Generation",
              eligibility: "BBA/B.Com/MBA",
              exp: "Fresher",
              loc: "Onsite",
            },
            {
              title: "Content Writer",
              pos: "Content Writing",
              skills: "Content Creation, SEO Basics, Grammar",
              eligibility: "B.Tech in CS/IT, BA/MA in English",
              exp: "Fresher",
              loc: "Onsite",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black/40 to-[#0a3d4a]/40 p-6 rounded-2xl shadow-xl 
              hover:shadow-cyan-400/30 transition-all transform hover:-translate-y-2 
              hover:scale-[1.02] duration-300 border border-cyan-700/30 backdrop-blur-sm"
            >
              <h3
                className="text-2xl font-semibold text-transparent bg-clip-text mb-3"
                style={{
                  backgroundImage: "linear-gradient(to right, #00e5ff, #00ffff)",
                }}
              >
                {job.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                <strong>Position:</strong> {job.pos}
                <br />
                <strong>Skills:</strong> {job.skills}
                <br />
                <strong>Eligibility:</strong> {job.eligibility}
                <br />
                <strong>Experience:</strong> {job.exp}
                <br />
                <strong>Location:</strong> {job.loc}
              </p>
              <button
                onClick={() => openModal(job.title)}
                className="w-full bg-gradient-to-r from-black to-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-8 rounded-2xl max-w-lg w-full relative shadow-xl border border-cyan-600">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold mb-4">
              Apply for {selectedRole}
            </h3>

            {formSubmitted ? (
              <p className="text-green-400 font-semibold">
                ✅ Your application has been submitted!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:border-cyan-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:border-cyan-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:border-cyan-400"
                />
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn Profile"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:border-cyan-400"
                />
                <textarea
                  name="coverLetter"
                  placeholder="Cover Letter (Max 120 words)"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:border-cyan-400"
                />
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="w-full text-gray-300"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-white py-2 rounded-lg font-semibold hover:scale-105 transition transform"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Career;