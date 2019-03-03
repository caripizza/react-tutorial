import React from 'react';
import './Heading.css';

const Heading = () => {
  return (
    < >
    {/* forked from: https://codepen.io/seanmccaffery/pen/xBpbG */}
    <section className="html">
      <div className="svg-wrapper">
        <br/>
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="320" />
        </svg>
        <div className="text">hover</div>
      </div>
    </section>
    </>
  );
}

export default Heading;
