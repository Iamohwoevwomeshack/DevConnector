import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '70px',
        margin: 'auto',
        display: 'block',
        paddingTop: '5rem',
      }}
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner;
