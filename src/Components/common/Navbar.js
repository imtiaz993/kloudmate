import React, { useEffect } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import cx from 'classnames';
import { navData } from '../../shared-data/navData';
import { useState } from 'react';
import { Link } from 'gatsby';
import NavbarLogo from '../../images/kloudmate-logo-full.svg';
import Drawer from './Drawer';
import { useLocation } from '@reach/router';

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex h-24 w-full items-center bg-transparent">
        <div className=" mx-4 flex w-full justify-between md:mx-10 xl:mx-auto xl:w-[90%] xl:max-w-7xl">
          <div className="flex items-center space-x-4 text-base font-normal text-gray-300 md:text-sm lg:w-3/5 lg:text-base">
            <Link to="/">
              <img
                className="h-auto w-[155px]"
                src={NavbarLogo}
                alt="Kloudmate logo"
              />
            </Link>
            <div className="hidden w-1/2 items-center justify-around lg:flex">
              {navData.map(({ link, title }, idx) => {
                const isActive =
                  location.pathname === link ||
                  location.pathname === link + '/';
                return (
                  <Link
                    key={`${title + '-' + idx}`}
                    to={link}
                    className={cx(
                      'hidden transition-colors duration-200 hover:text-white xl:block',
                      {
                        ['font-semibold text-white']: isActive,
                        ['text-gray-400']: !isActive,
                      }
                    )}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex w-full items-center justify-end gap-4 sm:gap-6 md:w-3/4 md:gap-8 xl:w-1/4 xl:justify-between xl:gap-0">
            <div className=" flex">
              <a
                data-event-name="View Demo"
                href="https://demo.kloudmate.com/"
                target="_blank"
                className="rounded-full border border-gray-400/30 py-2 px-6 font-medium text-white transition-colors duration-200 hover:border-primary-light sm:py-3 sm:px-8"
              >
                View Demo
              </a>
            </div>
            <a
              href="https://app.kloudmate.com"
              className="hidden rounded-full bg-grey-700 px-6 py-2 font-medium text-yellow-50 transition-colors duration-200 hover:bg-primary sm:block md:px-10 md:py-3"
            >
              Login
            </a>
            <button
              id="drawer-btn"
              className="block xl:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((open) => !open);
              }}
            >
              {!isOpen ? (
                <IoMdMenu color="white" size={'2em'} />
              ) : (
                <IoMdClose color="white" size={'2rem'} />
              )}
            </button>
          </div>
        </div>
      </div>
      <Drawer isOpen={isOpen} setOpen={setOpen} navData={navData} />
      <div
        className={`pointer-events-none fixed top-0 left-0 z-40 h-full w-full bg-black/50 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}

export default Navbar;
