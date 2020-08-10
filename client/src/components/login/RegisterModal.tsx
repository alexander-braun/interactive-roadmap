import React, { useState, useEffect } from 'react';
import RegisterSvg from './RegisterSvg';
import History from '../helper/history';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import { register } from '../../actions/authenticate';
import { RegisterUser } from '../../actions/constants';
import Alert from '../alert/index';

interface RegisterModal {
  isAuthenticated: boolean | null;
}

const RegisterModal = ({ isAuthenticated }: RegisterModal) => {
  const dispatch = useDispatch();

  const [formData, updateFormdata] = useState<RegisterUser>({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('register-modal')) {
      History.push('/');
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { email, password, name } = formData;
    dispatch(register({ email, password, name }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      History.push('/');
    }
  }, [isAuthenticated]);

  return (
    <div className='register-modal' onClick={handleClick}>
      <div className='register-modal__body'>
        <RegisterSvg />
        <h1>Register</h1>
        <Alert />
        <form name='form' className='register-modal__form'>
          <div className='register-modal__form-group'>
            <label htmlFor='name'>Username</label>
            <input
              type='text'
              className='register-modal__form-control'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='register-modal__form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='register-modal__form-control'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='register-modal__form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='register-modal__form-control'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='register-modal__form-group'>
            <button
              className='register-modal__btn register-modal__btn--active'
              onClick={handleSubmit}
            >
              Register
            </button>
            <button
              className='register-modal__btn'
              onClick={() => History.push('/login')}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface StateProps {
  isAuthenticated: boolean | null;
}

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RegisterModal);
