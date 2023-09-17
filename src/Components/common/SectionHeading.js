import React from 'react';
import cx from 'classnames';

function SectionHeading({ heading, center = true, className }) {
  return (
    <h3
      className={cx(
        'text-sm font-bold uppercase tracking-wider text-primary',
        className,
        {
          ['text-center']: center,
        }
      )}
    >
      {heading}
    </h3>
  );
}

export default SectionHeading;
