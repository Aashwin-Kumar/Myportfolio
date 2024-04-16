import Image from "next/image";
import profile from "../assets/img/blink.gif";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaKaggle } from "@react-icons/all-files/fa/FaKaggle";

const Card = () => {
  return (
    <>
      <div className="w-full pb-20">
        <div className="flex flex-col justify-center max-w-sm	mx-auto shadow-2xl shadow-sky-200 rounded-t-full p-5">
          <div>
            <Image
              className="shadow-md shadow-red-45 rounded-full drop-shadow-sm"
              src={profile}
              alt="profile-photo"
            />
          </div>

          <div className="text-center mt-6">
            <p className="text-xl sm:text-2xl text-black-600 font-semibold lg:font-cursive">
              ASHWIN KUMAR{" "}
            </p>
            <p className="text-base sm:text-lg pt-4 pb-5 px-5 font-semibold w-auto inline-block border-b-2 ">
              Engineer | Marketer | Analyst
            </p>
            <div className=" flex align-center justify-center mt-4">
              <a
                className="text-xl mr-4 m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-100 rounded-full"
                href="https://twitter.com/Ashw1nKumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
                <span className="sr-only">FaTwitter</span>
              </a>

              <a
                className="text-xl mr-4 m-1 p-1 sm:m-2 sm:p-2 text-black-700 hover:bg-blue-100 rounded-full"
                href="https://github.com/Aashwin-Kumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-blue-700" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                className="text-xl m-1 mr-4 p-1 sm:m-2 sm:p-2 text-blue-700	 hover:bg-blue-100 rounded-full"
                href="https://www.linkedin.com/in/ashwin-kumar-data-analyst"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span className="sr-only">FaLinkedin</span>
              </a>
              <a
                className="text-xl mr-4 m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-100 rounded-full"
                href="https://www.kaggle.com/aashwinkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaKaggle />
                <span className="sr-only">Kaggle</span>
              </a>

              <a
                className="text-xl m-1 mr-4 p-1 sm:m-2 sm:p-2 text-inherit hover:bg-blue-100 rounded-full"
                href="https://www.instagram.com/im_aescwine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-blue-700" />
                <span className="sr-only">FaInstagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
