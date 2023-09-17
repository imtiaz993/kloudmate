import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';
import { useLocation } from '@reach/router';

function Drawer(props) {
  const { isOpen, navData, setOpen } = props;
  const location = useLocation();
  const drawerRef = useRef(null);

  useEffect(() => {
    const drawerBtn = document.getElementById('drawer-btn');
    const handleClick = (e) => {
      if (e.target !== drawerRef.current && e.currentTarget !== drawerBtn) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleClick);

    return () => window.addEventListener('click', handleClick);
  }, [setOpen]);

  return (
    <div
      // role="button"
      onClick={(e) => e.stopPropagation()}
      ref={drawerRef}
      className={`fixed top-0 left-0 z-50 flex h-screen w-[50%] min-w-[200px] max-w-[300px] flex-col overflow-x-auto bg-black transition-all duration-300 ease-linear ${
        isOpen ? 'translate-0' : '-translate-x-full'
      }`}
    >
      <div className="mb-5 py-10 pl-[20%]">
        <Link to="/" tabIndex={isOpen ? 0 : -1}>
          <StaticImage
            class=" w-32 md:w-36 xl:w-40"
            src="../../images/kloudmate_logo.png"
            alt="Kloudmate logo"
          />
        </Link>
      </div>
      {navData.map(({ link, title }) => {
        const isActive =
          location.pathname === link || location.pathname === link + '/';
        return (
          <div className="mb-4" key={title}>
            <Link
              tabIndex={isOpen ? 0 : -1}
              to={link}
              className={`block py-2 pl-[20%] text-lg font-bold hover:opacity-80 ${
                isActive ? 'text-white' : 'text-gray-400'
              }`}
            >
              {title}
            </Link>
          </div>
        );
      })}

      <button className="mx-auto mt-10 mb-8 w-3/4 rounded-full bg-[#323849] px-6 py-2 font-bold text-yellow-50 transition-colors duration-200 hover:bg-primary sm:hidden md:px-10 md:py-3">
        Login
      </button>
    </div>
  );
}

export default Drawer;
