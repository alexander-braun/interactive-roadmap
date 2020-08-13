import React, { useState } from 'react';
import RecoverPasswordModalSvg from './RecoverPasswordModalSvg';
import History from '../helper/history';
import { requestPasswordLink } from '../../actions/authenticate';
import { useDispatch } from 'react-redux';
import Alert from '../alert/index';

const RecoverPasswordModal = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { email } = formData;
    dispatch(requestPasswordLink(email));
  };

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
    email: '',
  });

  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal__body modal__body--sm'>
        <div className='modal__close' onClick={handleClick}>
          🞪
        </div>
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
