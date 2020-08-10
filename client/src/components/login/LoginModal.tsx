import React, { useState, useEffect } from 'react';
import LoginSvg from './LoginSvg';
import History from '../helper/history';
import { connect } from 'react-redux';
import { login } from '../../actions/authenticate';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import Alert from '../alert/index';

interface LoginModal {
  isAuthenticated: boolean | null;
}

const LoginModal = ({ isAuthenticated }: LoginModal) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(login({ email, password }));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('login-modal')) {
      History.push('/');
    }
  };

  const [formData, updateFormdata] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      History.push('/');
    }
  }, [isAuthenticated]);

  return (
    <div className='login-modal' onClick={handleClick}>
      <div className='login-modal__body'>
        <LoginSvg />
        <h1>Login</h1>
        <Alert />
        <form name='form' className='login-modal__form'>
          <div className='login-modal__form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='login-modal__form-control'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='login-modal__form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='login-modal__form-control'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='login-modal__form-group'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='login-modal__btn login-modal__btn--active'
            >
              Login
            </button>
            <button
              className='login-modal__btn'
              onClick={() => History.push('/register')}
            >
              Register
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

export default connect(mapStateToProps)(LoginModal);
