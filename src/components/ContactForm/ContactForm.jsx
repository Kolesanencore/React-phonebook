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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      reset();
      return toast.success(`Contact ${name} was added`);
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
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
