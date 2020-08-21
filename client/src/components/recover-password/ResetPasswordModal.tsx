import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Helper
import History from '../helper/history';
import { closeModalOnWrapperClick } from '../helper/closeModalOnWrapperClick';

//Actions
import { setNewPassword } from '../../actions';

//Components
import Alert from '../alert/index';
import RecoverPasswordModalSvg from './RecoverPasswordModalSvg';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * After clicking the email link
 */
const ResetPasswordModal = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const [token, updateToken] = useState<string>();

  /**
   * Dispatch new password
   */
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (token) {
      e.preventDefault();
      const { password } = formData;
      dispatch(setNewPassword(password, token));
    }
  };

  /**
   * Get token from url
   */
  useEffect(() => {
    updateToken(History.location.pathname.split('/')[2]);
  }, []);

  const [formData, updateFormdata] = useState({
    password: '',
  });

  return (
    <div className='modal' onClick={closeModalOnWrapperClick}>
      <div className='modal__body modal__body--sm'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={() => History.push('/')}
        />
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
