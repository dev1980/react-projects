import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
function App() {
  const contacts = [
    { id: '1', name: 'Brham', email: 'brham@gmail.com' },
    { id: '2', name: 'Mahesh', email: 'Mahesh@gmail.com' },
    { id: '3', name: 'Dipesh', email: 'dipesh@gmail.com' },
  ];
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
