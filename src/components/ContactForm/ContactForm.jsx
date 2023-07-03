import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Input, Button, FormWrapper } from './ContactForm.styled';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'Redux/contacts/contactsAction';
import { getContacts } from 'Redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const createNewContact = async () => {
    const newContact = { name, number };
    const isAlreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (isAlreadyInContacts) {
      toast.error(`${newContact.name} is already in contacts`);
      return;
    }
    try {
      dispatch(addContact(newContact));
      toast.success(`Contact ${newContact.name} was added`);
      reset();
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createNewContact();
  };

  return (
    <FormWrapper>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />

        <Input
          placeholder="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
