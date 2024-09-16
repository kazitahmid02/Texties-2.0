import React from 'react';

const Section = ({ children, crosses }) => {
  return (
    <section className={`py-16 px-8 ${crosses ? 'bg-gray-100' : ''}`}>
      {children}
    </section>
  );
};

export default Section;
