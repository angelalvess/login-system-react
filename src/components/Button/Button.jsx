import { CustomButton } from './styles';
import propTypes from 'prop-types';

const Button = ({ type, text, onClick, disabled }) => {
  return (
    <CustomButton type={type} text={text} onClick={onClick} disabled={disabled}>
      {text}
    </CustomButton>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  disabled: propTypes.bool,
};
