import { useDispatch } from 'react-redux';

import { Input } from '../ContactList/ContactList.styled';
import { updateFilterValue } from 'Redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(updateFilterValue(value));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search contacts"
      onChange={handleChange}
    />
  );
};

export default Filter;
