import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

//Components
import RegisterSvg from './RegisterSvg';
import Alert from '../alert/index';

//Helper
import History from '../helper/history';
import { closeModalOnWrapperClick } from '../helper/closeModalOnWrapperClick';

//Global state type
import { AppState } from '../../reducers';

//Actions
import { register, RegisterUser } from '../../actions';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

  /**
   * Dispatch register
   */
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { email, password, name } = formData;
    dispatch(register({ email, password, name }));
  };

  /**
   * If is authenticated after register go to /
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
        <RegisterSvg />
        <h1>Register</h1>
        <Alert />
        <form name='form' className='modal__form'>
          <div className='modal__form-group'>
            <label htmlFor='name'>Username</label>
            <input
              type='text'
              className='modal__form-control'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
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
              className='modal__btn modal__btn--active'
              onClick={handleSubmit}
            >
              Register
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

interface StateProps {
  isAuthenticated: boolean | null;
}

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RegisterModal);
