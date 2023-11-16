import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/styles/AccountCreation.css';

const AccountCreationTab = ({ onUserCreated }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = `${formData.username.toLowerCase().replace(/\s/g, '_')}@example.com`;

    const newUser = {
      id: Date.now(),
      username: formData.username,
      email,
      phone: '', 
      creationDate: new Date().toISOString().slice(0, 10),
    };

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Account Creation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Create Account</button>
      </form>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="User Details Modal"
      >
        <h2>User Details</h2>
        <p>Username: {formData.username}</p>
        <p>Email: {`${formData.username.toLowerCase().replace(/\s/g, '_')}@example.com`}</p>
        <p>Creation Date: {new Date().toISOString().slice(0, 10)}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default AccountCreationTab;
