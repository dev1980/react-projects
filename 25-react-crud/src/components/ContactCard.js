import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{contact.name}</div>
        <div className="email">{contact.email}</div>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default ContactCard;
