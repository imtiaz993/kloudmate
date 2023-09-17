import React from 'react';

function InfoCard({ title, content, imgUrl, index, handleAccordion, isOpen }) {
  const toggleContent = () => {
    handleAccordion(index);
  };

  return (
    <button
      className="group relative mt-0 w-full space-y-4 border-b-2 border-[#313136] pb-5 text-left last:border-0"
      onClick={toggleContent}
    >
      <div
        className={`delay absolute -top-4 -left-4 h-full w-1 rounded-sm bg-white transition-all ease-linear ${
          !isOpen ? 'opacity-0' : 'hidden-100'
        }`}
      />
      <h2 className="text-base font-bold xl:text-2xl">{title}</h2>
      <p
        className={`accordion-content font-normal text-grey-400`}
        aria-expanded={!isOpen}
      >
        {content}
      </p>
      <div className="flex items-center justify-center md:hidden">
        <img src={imgUrl} alt="" />
      </div>
    </button>
  );
}

export default InfoCard;
