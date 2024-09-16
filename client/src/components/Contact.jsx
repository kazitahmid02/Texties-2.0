import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_qx5idqm",
        "template_0hxjp29",
        {
          from_name: form.name,
          to_name: "Texties",
          from_email: form.email,
          to_email: "info@texties.net",
          message: form.message,
        },
        "--tXIiTeHAcXDw1pB"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks! We will get back to you as soon as possible!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <div className="flex justify-center items-center h-screen xxs:mb-36 md:mb-20 relative ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black p-8 rounded-2xl md:w-[500px] absolute top-0"
        // style={{ marginTop: "165px" }}
      >
        <p className="text-white font-medium mb-2">Get in touch</p>
        <h3 className="text-white font-bold text-3xl mb-6">Contact Us:</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your full name?"
              className="bg-white placeholder-gray-400 text-black py-4 px-6 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white placeholder-gray-400 text-black py-4 px-6 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What is your message?"
              className="bg-white placeholder-gray-400 text-black py-4 px-6 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-white text-black py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

      
        
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Contact, "contact");
