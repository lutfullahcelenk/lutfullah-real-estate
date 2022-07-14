import React from "react";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <a className="flex items-center justify-center mb-12" href="/">
          <FaHome size="50" className="text-gray-400" />
          <span className="ml-6 text-2xl font-semibold text-gray-400">
            Lutfullah Properties
          </span>
        </a>
      </div>

      <div className="divide-y ">
        <div className="grid grid-cols-2 pb-6 gap-x-3 gap-y-8 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wider text-green-500 uppercase">Product</h3>
            <ul className="space-y-1 font-semibold">
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Integrations</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wider text-green-500 uppercase">Company</h3>
            <ul className="space-y-1 font-semibold">
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wider text-green-500 uppercase">
              Developers
            </h3>
            <ul className="space-y-1 font-semibold">
              <li>
                <a href="/">Public API</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
              <li>
                <a href="/">Guides</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wider text-green-500 uppercase">
              Social Media
            </h3>
            <div className="flex items-center justify-start">
              <a
                href="https://github.com/lutfullahcelenk"
                target="_blank"
                rel="noreferrer"
                className="pr-4"
              >
                <FaGithub size="30" />
              </a>
              <a
                href="https://www.linkedin.com/in/lutfullah-celenk/"
                target="_blank"
                rel="noreferrer"
                className="px-4"
              >
                <FaLinkedin size="30" />
              </a>
            </div>
          </div>
        </div>

        <div className="py-8 text-sm text-center text-green-500 sm:text-lg">
          &copy; 2022 Lutfullah Company All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
