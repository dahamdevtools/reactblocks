"use client";

import CustomSelect from "@/app/components/main/CustomSelect";
import Footer from "@/app/components/main/Footer";
import Navigation from "@/app/components/main/Navigation";
import { useRef, useState } from "react";

export default function Contact() {
  const scrollContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
                  className="w-full h-12 px-6 rounded-2xl bg-neutral-200 dark:bg-neutral-900"
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
                  className="w-full h-12 px-6 rounded-2xl bg-neutral-200 dark:bg-neutral-900"
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
                  className="w-full px-6 py-5 rounded-2xl resize-none bg-neutral-200 dark:bg-neutral-900"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-12 px-6 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-800"
            >
              Send Message
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
