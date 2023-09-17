import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { RiLinkedinFill, RiSlackFill, RiTwitterFill } from 'react-icons/ri';
import NavbarLogo from '../../images/kloudmate-logo-full.svg';

function Footer() {
  return (
    <footer className="mx-auto w-[90%] max-w-7xl">
      <div className="flex flex-col flex-wrap justify-center py-16">
        <div className="mb-5 flex flex-col items-start justify-between md:flex-row md:space-x-9 xl:space-x-20">
          <div className="flex w-3/4 flex-col flex-wrap justify-around md:w-1/4 lg:w-1/6">
            <Link to="/" className="mb-8">
              <img
                className="h-8 w-auto"
                src={NavbarLogo}
                alt="Kloudmate logo"
              />
            </Link>
            <div className="mb-5 flex flex-row align-middle">
              <StaticImage
                width={140}
                className="mr-4"
                src="../../images/aws-select.png"
                alt="KloudMate is AWS Select partner"
              />
              <StaticImage
                width={140}
                src="../../images/soc-logo.png"
                alt="KloudMate is SOC Type 1 certified"
              />
            </div>
            <div className="mt-1 hidden gap-3 md:flex">
              <a
                className="flex h-8 w-8 cursor-pointer rounded-full bg-dark-300 text-white transition-colors duration-200 hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/kloudmate"
              >
                <RiLinkedinFill className="m-auto text-xl " />
              </a>

              <a
                className="flex h-8 w-8 cursor-pointer rounded-full bg-dark-300 text-white transition-colors duration-200 hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/kloudmate"
              >
                <RiTwitterFill className="m-auto text-xl " />
              </a>

              <a
                className="flex h-8 w-8 cursor-pointer rounded-full bg-dark-300 text-white transition-colors duration-200 hover:text-purple-400"
                target="_blank"
                rel="noreferrer"
                href="https://kloudmate.slack.com/join/shared_invite/zt-zvzq985i-Khwnq2jsm5uLTdBe87gCgw"
              >
                <RiSlackFill className="m-auto text-xl" />
              </a>
            </div>
          </div>
          <div className="flex w-full flex-wrap leading-8 md:w-[65%] lg:w-3/5">
            <section className="flex w-1/2 flex-col text-grey-400 md:w-1/3 md:space-y-1">
              <h1 className="font-semibold text-white ">Product</h1>
              <Link
                className="w-fit transition-colors duration-200 hover:text-white"
                to="/product"
              >
                Features
              </Link>
              <Link
                className="w-fit  transition-colors duration-200 hover:text-white"
                to="/pricing"
              >
                Pricing
              </Link>
              <a
                className="w-fit transition-colors duration-200 hover:text-white"
                href="https://docs.kloudmate.com/setting-up-kloudmate"
                target="_blank"
                rel="noreferrer"
              >
                Quick Start
              </a>
              <a
                className="w-fit transition-colors duration-200 hover:text-white"
                href="https://docs.kloudmate.com"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
              <a
                href="https://pages.kloudmate.com/video-resources"
                target="_blank"
                rel="noreferrer"
              >
                Video Tutorials
              </a>
            </section>
            <section className="flex w-1/2 flex-col text-grey-400 md:w-1/3 md:space-y-1">
              <h1 className="font-semibold text-white ">Company</h1>
              <Link
                className="w-fit transition-colors duration-200 hover:text-white"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="w-fit transition-colors duration-200 hover:text-white"
                to="/contact"
              >
                Contact
              </Link>
              <a
                href="https://kloudmate.springrecruit.com/"
                target="_blank"
                rel="noreferrer"
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                Careers
              </a>
              <a
                href="https://blog.kloudmate.com"
                target="_blank"
                rel="noreferrer"
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                Blog
              </a>
            </section>
            <section className="mt-6 flex w-1/2 flex-col text-grey-400 md:mt-0 md:w-1/3 md:space-y-1">
              <h1 className="font-semibold text-white ">Legal</h1>
              <a
                href="https://pages.kloudmate.com/security"
                target="_blank"
                rel="noreferrer"
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                Security
              </a>
              <a
                href="https://pages.kloudmate.com/terms-of-service"
                target="_blank"
                rel="noreferrer"
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                Terms of service
              </a>
              <a
                href="https://pages.kloudmate.com/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                Privacy policy
              </a>
              <a
                href="https://pages.kloudmate.com/cookie-policy"
                target="_blank"
                rel="noreferrer"
                className="w-fit transition-colors duration-200 hover:text-white"
              >
                Cookie policy
              </a>
            </section>
          </div>

          <div className="mx-auto mt-12 flex gap-8 md:hidden">
            <a
              className="flex h-8 w-8 cursor-pointer rounded-full bg-dark-300 text-white transition-colors duration-200 hover:text-blue-400"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/kloudmate"
            >
              <RiLinkedinFill className="m-auto text-xl" />
            </a>

            <a
              className="flex h-8 w-8 cursor-pointer rounded-full bg-dark-300 text-white transition-colors duration-200 hover:text-blue-400"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/kloudmate"
            >
              <RiTwitterFill className="m-auto text-xl" />
            </a>

            <a
              className="flex h-8 w-8 cursor-pointer rounded-full bg-dark-300 text-white transition-colors duration-200 hover:text-purple-400"
              target="_blank"
              rel="noreferrer"
              href="https://kloudmate.slack.com/join/shared_invite/zt-zvzq985i-Khwnq2jsm5uLTdBe87gCgw"
            >
              <RiSlackFill className="m-auto text-xl" />
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center md:mt-10 md:justify-between">
          <p className="text-sm text-grey-400">
            © 2023 KloudMate Technologies Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
