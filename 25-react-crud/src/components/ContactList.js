import React from 'react';
import ContactCard from './ContactCard';
const ContactList = ({ contacts }) => {
  const renderList = contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });
  return <div>{renderList}</div>;
};

export default ContactList;
