import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const styles = {
  title: {
    color: '#000000',
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  subtitle: {
    color: '#000000',
    marginBottom: 20,
    textAlign: 'center',
  },
};

export default function Contacts() {
  return (
    <>
      <h1 style={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 style={styles.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
