import { useDispatch } from 'react-redux';

import { FormWrapper, Input } from '../ContactForm/ContactForm.styled';
import { updateFilterValue } from 'Redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(updateFilterValue(value));
  };

  return (
    <FormWrapper>
      <Input
        type="text"
        name="filter"
        placeholder="Search contacts"
        onChange={handleChange}
      />
    </FormWrapper>
  );
};

export default Filter;
