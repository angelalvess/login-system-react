import { CustomInput } from './styles';
import propTypes from 'prop-types';

const Input = ({ name, placeholder, onChange, type }) => {
  return (
    <CustomInput
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;

Input.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
};
