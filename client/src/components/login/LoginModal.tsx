import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

//Components
import LoginSvg from './LoginSvg';
import Alert from '../alert/index';

//Helper
import History from '../helper/history';
import { closeModalOnWrapperClick } from '../helper/closeModalOnWrapperClick';

//Actions
import { login } from '../../actions';

//Global State
import { AppState } from '../../reducers';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Login Modal has links to register and recover password.
 * Handels user login.
 */

interface LoginModal {
  isAuthenticated: boolean | null;
}

const LoginModal = ({ isAuthenticated }: LoginModal) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Login User
   */
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(login({ email, password }));
  };

  const [formData, updateFormdata] = useState({
    email: '',
    password: '',
  });

  /**
   * If the user is authenticated the login modal closes.
   */
  useEffect(() => {
    if (isAuthenticated) {
      History.push('/');
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div className='modal' onClick={closeModalOnWrapperClick}>
      <div className='modal__body modal__body--sm'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={() => History.push('/')}
        />
        <LoginSvg />
        <h1>Login</h1>
        <Alert />
        <form name='form' className='modal__form'>
          <div className='modal__form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='modal__form-control'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='modal__form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='modal__form-control'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='modal__form-group'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='modal__btn modal__btn--active'
            >
              Login
            </button>
            <button
              className='modal__btn'
              onClick={() => History.push('/register')}
            >
              Register
            </button>
            <button
              className='modal__btn modal__btn--secondary'
              onClick={() => History.push('/forgotpassword')}
            >
              Recover Password
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
