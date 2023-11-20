import React from "react";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { bsfillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30} />
                </>

            ),
            href: "https://www.linkedin.com/in/anahat-basnet-7a34bb263/",
            style: "rounder-tr-md",
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30} />
                </>

            ),
            href: "https://github.com/",
           
        },
        {
            id:3,
            child:(
                <>
                LinkedIn <FaLinkedin size={30} />
                </>

            ),
            href: "https://linkedin.com",
            style: "rounder-tr-md",
        },
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30} />
                </>

            ),
            href: "https://linkedin.com",
            style: "rounder-tr-md",
        },
    ]
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40  h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]">
          <a href="" className="flex justify-between items-center w-full text-white">
            <>
              
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
