import React from "react";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = React.useRef(null);

  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_yk850xe",
        "template_fyggjsd",
        {
          from_name: form.name,
          to_name: "Thomas",
          reply_to: form.email,
          to_email: "amighithomas@gmail.com",
          message: form.message,
        },
        "cbf4-DN-h3V2IcMYN"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent !");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong ...");
        }
      );
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8"
    >
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Name</span>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Email</span>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Message</span>
        <textarea
          rows={7}
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <button
        type="submit"
        className="bg-tertiary w-fit outline-none shadow-md text-white py-3 px-8 font-bold shadow-primary rounded-xl"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
