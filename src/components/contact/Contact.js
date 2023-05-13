import React, { useState } from "react";
import Title from "../home/Title";
import { FiSend } from "react-icons/fi";
import axios from "axios";
const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errClient, setErrClient] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  const [succesMes, setSuccesMes] = useState("");

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClient(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClient(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!message) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && message) {
      axios.post("https://getform.io/f/6e9101cc-7a42-445a-824c-095b59a15585", {
        name: clientName,
        email: email,
        message: message,
      });
      setSuccesMes(
        `Hello ${clientName}, Your message has been send successfully . Thank you for your time`
      );
      setClientName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div>
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 flex justify-between gap-20 max-sm:block">
        <div className="w-1/2 max-sm:w-full">
          <p className="flex justify-between w-full  max-sm:text-xs text-lg text-[#ccc]  py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 max-sm:text-xs text-sm font-titleFont font-medium px-2 max-sm:px-1 rounded-md flex items-center justify-center">
              Address:
            </span>
            Oradea, Romania
          </p>
          <p className="flex justify-between w-full  max-sm:text-xs text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 max-sm:text-xs text-sm font-titleFont font-medium px-2 max-sm:px-1 rounded-md flex items-center justify-center">
              Phone:
            </span>
            0733025345
          </p>
        </div>
        <div className="w-1/2 max-sm:w-full">
          <p className="flex justify-between w-full  max-sm:text-xs text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 max-sm:text-xs text-sm font-titleFont font-medium px-2 max-sm:px-1  rounded-md flex items-center justify-center">
              Email:
            </span>
            gaborf703@gmail.com
          </p>
          <p className="flex justify-between w-full  max-sm:text-xs text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 max-sm:text-xs text-sm font-titleFont font-medium px-2 max-sm:px-1 rounded-md flex items-center justify-center">
              Work status:
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10 max-sm:mt-3">
        <Title title="Send" subTitle="Messages" />
        {succesMes ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {succesMes}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/6e9101cc-7a42-445a-824c-095b59a15585"
            method="POST"
            className="p-6 max-sm:p-1 flex flex-col gap-6"
          >
            <div className="w-full flex gap-10 justify-between max-sm:flex-col">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClient
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                }"w-full bg-transparent border-2 px-4 max-sm:px-1 py-2 text-base max-sm:text-sm  outline-none duration-300
            "`}
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                }"w-full bg-transparent border-2 px-4 max-sm:px-1 py-2 max-sm:text-sm text-base text-gray-200  outline-none duration-300
            "`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessage}
              value={message}
              className={`${
                errMessage
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              }"w-full bg-transparent border-2 px-4 py-2 max-sm:px-1 max-sm:text-sm text-base  outline-none duration-300 resize-none
          "`}
              placeholder="Your Message"
              cols="30"
              rows="4"
            ></textarea>
            <button
              onClick={handleSend}
              className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              Send Message{" "}
              <span className="mt-1 text-designColor">{<FiSend />}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
