import React from 'react';

const FeaturesCard = ({ title, content, imgUrl }) => {
  return (
    <section className="sticky top-4 flex flex-col-reverse bg-dark-100 px-[10%] md:flex-row md:items-center md:space-x-10 md:px-16 lg:top-8 lg:py-4 xl:space-x-12 xl:px-28">
      <img
        className="md:block md:h-[428px] md:w-[344px] xl:h-[526px] xl:w-[592px]"
        src={imgUrl}
        alt=""
      />
      <div className="relative cursor-pointer space-y-8 px-4 py-5">
        <h2 className="text-2xl font-bold  lg:text-3xl xl:text-5xl">{title}</h2>
        <p className="font-normal text-grey-400 lg:text-lg">{content}</p>
      </div>
    </section>
  );
};

export default FeaturesCard;
