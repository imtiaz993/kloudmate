import React from 'react';

export function AddIcon() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-dark-300 font-bold text-white md:h-8 md:w-8">
      <span className="-mt-1 text-base md:text-xl"> + </span>
    </div>
  );
}

export function MinusIcon() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold text-white md:h-8 md:w-8">
      <span className="-mt-1 text-base md:ml-[2px] md:text-xl"> – </span>
    </div>
  );
}
