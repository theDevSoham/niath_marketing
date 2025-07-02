"use client";

import { useRef } from "react";
import { lexendDeca, roboto } from "@/assets/fonts";
import { X } from "lucide-react";

const ContactUs = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <section
        id="contact_us"
        className="w-full lg:h-[100vh] h-[80vh] flex flex-col lg:flex-row lg:justify-center justify-start items-center pb-10 lg:pb-0 bg-black"
      >
        <div className="lg:flex-1 flex-2 flex flex-col justify-center items-center gap-5">
          {["Hello", "Bonjour", "Olá", "Marhabaan"].map((greeting, i) => (
            <p
              key={i}
              className={`${roboto.className} lg:text-8xl md:text-4xl text-3xl font-bold`}
            >
              {greeting}
            </p>
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-center lg:items-start items-center text-center lg:text-left lg:gap-10 gap-4 px-10 lg:px-0">
          <h1
            className={`${roboto.className} lg:text-3xl md:text-2xl text-xl font-medium`}
          >
            Say Hi! We&apos;d love to learn more about your project.
          </h1>
          <a
            href="mailto:Atharva@niathadvisory.com"
            className={`${roboto.className} lg:text-xl md:text-lg text-md font-medium`}
          >
            Email: Atharva@niathadvisory.com
          </a>
          <a href="tel:+91 7875695399">Phone: +91 7875695399</a>
          <address>
            Address: Niath Advisory Raghuvansh Apartment, Model Colony, Shivaji
            Nagar, Pune. 411016
          </address>
          <button
            onClick={openModal}
            className={`${lexendDeca.className} cursor-pointer uppercase text-white bg-[#114455] hover:bg-[#587c88] focus:ring-4 focus:ring-[#587c88] font-medium rounded-lg text-md lg:w-[20rem] w-full lg:h-[4rem] h-[4rem]`}
          >
            Say Hi!
          </button>
        </div>
      </section>

      {/* === Modal === */}
      <dialog
        ref={modalRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             w-full max-w-lg p-6 
             open:flex flex-col gap-4 z-50 bg-white rounded-lg shadow-lg 
             backdrop:bg-black/50"
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className={`${lexendDeca.className} text-xl font-semibold`}>
            Chat with us
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-red-500"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        <form action="https://formspree.io/f/xanjkyop" method="POST">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#114455] text-white rounded hover:bg-[#587c88]"
            >
              Send message
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ContactUs;
