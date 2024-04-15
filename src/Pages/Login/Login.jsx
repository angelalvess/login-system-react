import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Container, Form } from './styles';
import { validateEmail, validatePassword } from '../../Utils/validators';

const Login = () => {
  const [loading, setLoading] = useState();
  const [form, setForm] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log('Login');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const validatorInput = () => {
    return validateEmail(form.email) && validatePassword(form.password);
  };

  return (
    <Container>
      <Form>
        <h1>Login</h1>
        <Input
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          type="password"
        />
        <Button
          type="submit"
          text="Login"
          onClick={handleSubmit}
          disabled={loading === true || !validatorInput()}
        />
        <div>
          <p>Dont have an account?</p>
          <a>Register</a>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
