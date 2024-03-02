import { Footer, FooterDivider } from "flowbite-react";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer
      container
      className="p-2 border border-t-8 border-teal-500 mt-2 flex flex-col"
    >
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white m-4"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 rounded-lg text-white">
          MERN
        </span>
        Blog
      </Link>
      <div className="flex flex-wrap justify-center items-center">
        <div className="p-4  w-full sm:w-2/5 ">
          <Footer.Title title="About us" />
          <p className="text-sm">
            This is a blog website built using the MERN stack. You can use this
            website to create an account, sign in, write posts, and comment on
            posts.
          </p>
        </div>
        <div className="p-4  flex-1">
          <Footer.Title title="Follow us" />
          <Footer.LinkGroup col>
            <Footer.Link
              href={"www.github.com"}
              target="_blank"
              rel="noopener noreferre"
            >
              Github
            </Footer.Link>
            <Footer.Link
              href={"www.linkedin.com"}
              target="_blank"
              rel="noopener noreferre"
            >
              LinedIn
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className="p-4  flex-1">
          <Footer.Title title="Legal" />
          <Footer.LinkGroup col>
            <Footer.Link
              href={"www.github.com"}
              target="_blank"
              rel="noopener noreferre"
            >
              Privacy Policy
            </Footer.Link>
            <Footer.Link
              href={"www.linkedin.com"}
              target="_blank"
              rel="noopener noreferre"
            >
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <Footer.Divider />
      <Footer.Copyright
        href="#"
        by="MERN Blog"
        year={new Date().getFullYear()}
      />
      <FooterDivider />
      {/* icons for social media */}
      <div className="flex justify-start gap-4 mb-8 opacity-90">
        <Link to={"www.github.com"} target="_blank">
          <FaGithub size={"25"} />
        </Link>
        <Link to={"www.linkedin.com"} target="_blank">
          <FaLinkedin size={"25"} />
        </Link>
        <Link to={"www.facebook.com"} target="_blank">
          <FaFacebook size={"25"} />
        </Link>
        <Link to={"www.instagram.com"} target="_blank">
          <FaInstagram size={"25"} />
        </Link>
      </div>
    </Footer>
  );
}
