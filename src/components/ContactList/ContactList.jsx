import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts, deleteContact } from 'Redux/contacts/contactsAction';

import { RiDeleteBinLine } from 'react-icons/ri';
import { getContacts, getFilter } from 'Redux/contacts/selectors';
import { Button, List, Item } from './ContactList.styled';
import { FormWrapper } from 'components/ContactForm/ContactForm.styled';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const existingContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    try {
      dispatch(deleteContact(id));
      toast.success('Contact successfully deleted');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <FormWrapper>
      <List>
        {existingContacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name} : {number}
            <Button onClick={() => handleDeleteContact(id)}>
              <RiDeleteBinLine />
            </Button>
          </Item>
        ))}
      </List>
    </FormWrapper>
  );
};

export default ContactList;
