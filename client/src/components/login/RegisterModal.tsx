import React, { useState, useEffect } from 'react';
import RegisterSvg from './RegisterSvg';
import History from '../helper/history';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import { register } from '../../actions/authenticate';
import { RegisterUser } from '../../actions/constants';
import Alert from '../alert/index';
import { deleteAllComments } from '../../actions/deleteAllComments';
import { deleteAllDates } from '../../actions/deleteAllDates';
import { deleteAllHeadings } from '../../actions/deleteAllHeadings';
import { deleteAllNodes } from '../../actions/deleteAllNodes';
import { deleteAllRecommendations } from '../../actions/deleteAllRecommendations';
import { deleteAllStatuses } from '../../actions/deleteAllStatuses';
import { setCurrentPreset } from '../../actions/setCurrentPreset';

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
    if (target.classList.contains('modal')) {
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
      dispatch(deleteAllComments());
      dispatch(deleteAllDates());
      dispatch(deleteAllHeadings());
      dispatch(deleteAllNodes());
      dispatch(deleteAllRecommendations());
      dispatch(deleteAllStatuses());
      dispatch(setCurrentPreset(''));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal__body modal__body--sm'>
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
