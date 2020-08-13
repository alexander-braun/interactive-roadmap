import React, { useState, useEffect } from 'react';
import RecoverPasswordModalSvg from './RecoverPasswordModalSvg';
import History from '../helper/history';
import { setNewPassword } from '../../actions/authenticate';
import { useDispatch } from 'react-redux';
import Alert from '../alert/index';

const ResetPasswordModal = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const [token, updateToken] = useState<string>();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (token) {
      e.preventDefault();
      const { password } = formData;
      dispatch(setNewPassword(password, token));
    }
  };

  useEffect(() => {
    updateToken(History.location.pathname.split('/')[2]);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (
      target.classList.contains('modal') ||
      target.classList.contains('modal__close')
    ) {
      History.push('/');
    }
  };

  const [formData, updateFormdata] = useState({
    password: '',
  });

  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal__body modal__body--sm'>
        <div className='modal__close' onClick={handleClick}>
          🞪
        </div>
        <RecoverPasswordModalSvg />
        <Alert />
        <h1>New password</h1>
        <form name='form' className='modal__form'>
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
              Submit
            </button>
            <button
              className='modal__btn'
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

export default ResetPasswordModal;
