import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feature coming soon!");
    window.location.href = "#contact"; // Redirect to Contact section
  };

  return (
    <footer className="bg-black text-white w-full py-12">
      <div className="bg-black rounded container mx-auto px-8 p-11 shadow-inner flex flex-col md:flex-row justify-between items-start">
        {/* Addresses Section */}
        <div className="flex flex-col md:w-1/2 space-y-4">
          <h3 className="text-lg font-bold mb-4">Our Offices</h3>
          <div className="flex flex-col space-y-4">
            <div className="relative bg-white text-black rounded-2xl p-4 pr-10 flex items-start max-w-full">
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014367/13_myxd2c.png"
                alt="New York Clip Art"
                className="rounded-2xl w-12 h-12 absolute top-2 left-2"
              />
              <div className="ml-16">
                <p className="font-semibold">New York Office</p>
                <p>10640 Union Hall St #2, Jamaica, NY-11433</p>
              </div>
            </div>

            <div className="relative bg-white text-black rounded-2xl p-4 pr-10 flex items-start h-full">
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014367/12_ko22fi.png"
                alt="London Clip Art"
                className="rounded-2xl w-12 h-12 absolute top-2 left-2"
              />
              <div className="ml-16">
                <p className="font-semibold">London Office</p>
                <p>456 Oxford Street, London, UK W1D 1AP</p>
              </div>
            </div>

            <div className="relative bg-white text-black rounded-2xl p-4 pr-10 flex items-start max-w-full">
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726014367/14_khk1lu.png"
                alt="Tokyo Clip Art"
                className="rounded-2xl w-12 h-12 absolute top-2 left-2"
              />
              <div className="ml-16">
                <p className="font-semibold">Tokyo Office</p>
                <p>789 Shibuya, Tokyo, Japan 150-0002</p>
              </div>
            </div>
          </div>
        </div>

        {/* Email Subscription Section */}
        <div className="flex flex-col md:w-1/2 md:items-end mt-8 md:mt-0">
          <h3 className="text-lg font-bold mb-4 text-center">Stay Updated</h3>
          <form className="flex flex-col items-center md:items-end" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 mb-4 text-white rounded-md w-full md:w-64"
              required
            />
            <button
              type="submit"
              className="bg-white text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center mt-8 space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
            alt="Linked-In"
            className="w-6 h-6"
          />
        </a>
        {/* Add more social media icons as needed */}
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Texxties. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
