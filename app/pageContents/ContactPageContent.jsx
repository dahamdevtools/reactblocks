"use client";

import Navigation from "../components/main/Navigation";
import Footer from "../components/main/Footer";
import { useRef, useState } from "react";
import CustomSelect from "../components/main/CustomSelect";

export default function ContactPageContent() {
  const scrollContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Name is required";
    }
    if (formData.name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (formData.name.trim().length > 100) {
      return "Name must be less than 100 characters";
    }
    if (!formData.email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address";
    }
    if (!formData.subject) {
      return "Please select a subject";
    }
    if (!formData.message.trim()) {
      return "Message is required";
    }
    if (formData.message.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return "";
  };

  const handleSubmit = async () => {
    // Validate form
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      // Call API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Submit error:", error);
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto scrollbar-none"
    >
      <Navigation position={"sticky"} scrollContainerRef={scrollContainerRef} />
      <div className="w-full max-w-[1440px] flex-1 flex flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center">
          <main className="w-full max-w-3xl h-fit flex flex-col gap-2 py-20 mb-8 px-5 sm:px-10">
            <h1 className="text-center font-extrabold text-3xl sm:text-6xl">
              Get in Touch
            </h1>
            <h4 className="text-center text-lg sm:text-2xl text-neutral-500">
              Have a question, found a bug, or have an idea for a new component?
              We'd love to hear from you. Your feedback helps make ReactBlocks
              better for everyone.
            </h4>
          </main>
          <div className="w-full max-w-lg h-fit flex flex-col gap-8 px-8 mb-20">
            <h3 className="font-semibold text-2xl sm:text-3xl">
              Send a Message
            </h3>
            <div className="flex flex-col gap-5">
              <div className="w-full h-fit flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  spellCheck="false"
                  placeholder="Enter your Name..."
                  disabled={isSubmitting}
                  className="w-full h-12 px-6 rounded-2xl bg-neutral-200 dark:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="text"
                  spellCheck="false"
                  placeholder="Enter your Email..."
                  disabled={isSubmitting}
                  className="w-full h-12 px-6 rounded-2xl bg-neutral-200 dark:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <label htmlFor="subject">Subject</label>
                <CustomSelect
                  value={formData.subject}
                  onChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                  options={[
                    { value: "component-request", label: "Component Request" },
                    { value: "bug-report", label: "Bug Report" },
                    { value: "general", label: "General Inquiry" },
                    { value: "feedback", label: "Feedback" },
                    { value: "other", label: "Other" },
                  ]}
                  placeholder="Select a subject"
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  type="text"
                  spellCheck="false"
                  placeholder="Enter your Message..."
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-6 py-5 rounded-2xl resize-none bg-neutral-200 dark:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>
            {errorMessage && (
              <div className="w-full h-fit ps-3 pe-5 py-3 rounded-xl flex items-center gap-3 bg-rose-100 dark:bg-rose-950/30 text-rose-400">
                <span className="h-full aspect-square flex items-center justify-center rounded-full overflow-visible relative">
                  <span className="w-3 absolute aspect-square rounded-full animate-ping bg-rose-300 dark:bg-rose-500"></span>
                  <span className="w-3 aspect-square rounded-full bg-rose-300 dark:bg-rose-500"></span>
                </span>
                <p className="font-semibold text-ellipsis line-clamp-1">
                  {errorMessage}
                </p>
              </div>
            )}
            {successMessage && !errorMessage && (
              <div className="w-full h-fit ps-3 pe-5 py-3 rounded-xl flex items-center gap-3 bg-emerald-300/20 dark:bg-emerald-950/30 text-emerald-500">
                <span className="h-full aspect-square flex items-center justify-center rounded-full overflow-visible relative">
                  <span className="w-3 absolute aspect-square rounded-full animate-ping bg-emerald-300 dark:bg-emerald-500"></span>
                  <span className="w-3 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-500"></span>
                </span>
                <p className="font-semibold text-ellipsis line-clamp-1">
                  {successMessage}
                </p>
              </div>
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full h-12 px-6 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
