import React from 'react';

function Container({ children, sm, blur }) {
  return (
    <div
      className={`mx-auto w-[90%] max-w-7xl ${sm && 'md:w-[90%]'} ${
        blur && 'blur-md'
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
