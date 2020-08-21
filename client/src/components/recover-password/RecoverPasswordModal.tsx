import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//Components
import RecoverPasswordModalSvg from './RecoverPasswordModalSvg';

//Helper
import History from '../helper/history';
import { closeModalOnWrapperClick } from '../helper/closeModalOnWrapperClick';

//Actions
import { requestPasswordLink } from '../../actions/authenticate';

import Alert from '../alert/index';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RecoverPasswordModal = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Request Password reset mail
   */
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { email } = formData;
    dispatch(requestPasswordLink(email));
  };

  const [formData, updateFormdata] = useState({
    email: '',
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
        <h1>Recover Password</h1>
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
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPasswordModal;
