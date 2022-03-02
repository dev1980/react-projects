import React from 'react';

const AddContact = () => {
  return (
    <div>
      <h2>Add Contact</h2>
      <form>
        <label for="name">Name</label> <br />
        <input type="text" id="name" name="name" placeholder="name" /> <br />
        <label for="email">Email</label> <br />
        <input type="text" id="email" name="email" placeholder="email" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddContact;
