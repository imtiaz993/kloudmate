import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';

function TeamInfoCard({ avatar, name, role, linkedInLink, twitterLink }) {
  return (
    <div className="group flex w-full flex-col items-center space-y-2 pb-5 text-center text-white">
      <GatsbyImage
        objectFit="contain"
        className="h-[88px] w-[88px] rounded-full md:h-[100px] md:w-[100px]"
        image={getImage(avatar)}
        alt={name}
      />
      <h2 className="text-lg font-bold sm:text-xl">{name}</h2>
      <p className="text-base font-normal text-grey-400 md:group-focus:block">
        {role}
      </p>
      <div className="flex flex-row items-center space-x-5">
        <a
          className="flex h-12 w-12 cursor-pointer rounded-full bg-dark-300 text-white transition-colors duration-200 hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
          href={linkedInLink}
        >
          <RiLinkedinFill className="m-auto text-2xl " />
        </a>

        <a
          className="flex h-12 w-12 cursor-pointer rounded-full bg-dark-300 text-white transition-colors duration-200 hover:text-blue-400"
          target="_blank"
          rel="noreferrer"
          href={twitterLink}
        >
          <RiTwitterFill className="m-auto text-2xl " />
        </a>
      </div>
    </div>
  );
}

export default TeamInfoCard;
