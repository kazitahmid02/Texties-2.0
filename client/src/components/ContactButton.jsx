// ContactButton.jsx
import React from 'react';

const ContactButton = () => {
  const handleOpenGmail = () => {
    window.open('mailto:kazitahmid02@gmail.com');
  };

  return (
    <button
      className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleOpenGmail}
    >
      Send Us A Message!
    </button>
  );
};

export default ContactButton;
