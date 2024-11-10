"use client";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // Icons for contact details
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className=" bg-[#0C7EA5] py-10 text-white dark:bg-[#181C31]">
      <div className="mx-30 mb-20 flex flex-col items-center justify-between space-y-8 md:flex-row md:items-start md:space-y-0 md:px-0">
        {/* Left section with logo and description */}
        <div className=" text-center md:text-left">
          <Image
            src={"/camcyber/CamCyber_Logo_white.png"}
            alt="CamCyber Logo"
            width={150}
            height={50}
            className="mx-auto md:mx-0"
          />
          <div className="text-text mt-4 text-lg md:w-3/4">
            {
              "ផលិតផលនិងសេវាទំនើបឌីជីថលកម្ពុជា សម្រាប់កុំព្យូទ័រ ឧបករណ៍ និងអនាគត"
            }
          </div>
        </div>

        {/* Right section with contact details */}
        <div className=" text-center md:text-left">
          <h4 className="mb-4 text-2xl font-bold">{"ទំនាក់ទំនង"}</h4>
          <div className="mb-4 w-full border-t-[1px] border-white"></div>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center justify-center md:justify-start">
              <FiMail className="text-text mr-2" /> {"info@camcyberdigital.com"}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FiPhone className="text-text mr-2" /> {"+855 87 955 888"}
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FiMapPin className="text-text mr-2" /> {"Phnom Penh"}
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t-[1px] border-white"></div>

      {/* Bottom section with copyright and social media icons */}
      <div className="mx-30 mt-8 flex flex-col items-center justify-between px-4 md:flex-row md:px-0">
        <p className="text-center text-lg md:text-left">
          © {"2024 CamCyber Digital Tech Team"}
        </p>
        <div className="mt-4 flex space-x-4 md:mt-0">
          <a
            target="_blank"
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            target="_blank"
            href="#"
            aria-label="Telegram"
            className="text-white hover:text-gray-300"
          >
            <FaTelegram size={24} />
          </a>
          <a
            target="_blank"
            href="#"
            aria-label="YouTube"
            className="text-white hover:text-gray-300"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
