import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const renderItem = (value, isHighlighted) => {
  return (
    <p
      className={`${
        isHighlighted && 'text-primary'
      } text-sm md:text-base lg:pl-4`}
    >
      {' '}
      {value === true && <AiFillCheckCircle className="text-primary" />}
      {typeof value === 'string' && value}
    </p>
  );
};

function CategoryPlans({ title, options }) {
  return (
    <>
      <div className="mt-4 rounded-xl bg-dark-200 px-2 py-4">
        <div className="grid grid-cols-6 gap-4 font-semibold text-[#929AB5]">
          <p className="col-span-2 ml-3 uppercase">{title}</p>
          <p className="pl-0 md:-ml-2 lg:pl-4">FREE</p>
          <p className="pl-0 md:-ml-2 lg:pl-4">STARTER</p>
          <p className="pl-0 md:-ml-2 lg:pl-4">PRO</p>
          <p className="pl-0 md:-ml-2 lg:pl-4">BUSINESS</p>
        </div>
      </div>
      {options.map(({ title, free, starter, pro, business, isHighlighted }) => (
        <div
          key={title}
          className="grid grid-cols-6 items-center gap-1 border-b border-white border-opacity-10 py-4"
        >
          <p className="col-span-2 ml-6 text-sm md:text-base">{title}</p>
          {renderItem(free, isHighlighted)}
          {renderItem(starter, isHighlighted)}
          {renderItem(pro, isHighlighted)}
          {renderItem(business, isHighlighted)}
        </div>
      ))}
    </>
  );
}

export default CategoryPlans;
