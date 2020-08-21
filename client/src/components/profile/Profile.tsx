import React, { useState } from 'react';
import History from '../helper/history';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import ProfileSvg from './ProfileSvg';
import { PayloadUser } from '../../actions/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { deleteUser, changePassword } from '../../actions/authenticate';
import Alert from '../alert/index';

interface LoginModal {
  user: PayloadUser | null;
}

const Profile = ({ user }: LoginModal) => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (
      target.classList.contains('modal') ||
      target.classList.contains('modal__close')
    ) {
      History.push('/');
    }
  };

  const handleClose = () => {
    History.push('/');
  };

  const handleDeleteProfile = () => {
    if (user) {
      dispatch(deleteUser(user._id));
      History.push('/');
    }
  };

  const handleChangePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (user) {
      dispatch(changePassword(user._id, password));
    }
  };

  const [password, updatePassword] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePassword(e.currentTarget.value);
  };

  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal__body'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={handleClose}
        />
        <ProfileSvg />
        <Alert />
        <div className='modal__presets'>
          <h1>Delete Profile</h1>
          <button
            className='modal__btn modal__btn--active'
            onClick={handleDeleteProfile}
          >
            Delete my Profile!
          </button>
        </div>
        <div className='modal__add-new'>
          <form name='form' className='modal__form'>
            <h1 className='modal__create-heading'>Change Password</h1>
            <div className='modal__form-group'>
              <label htmlFor='name'>New Password</label>
              <input
                type='password'
                className='modal__form-control'
                name='name'
                value={password}
                onChange={handleChange}
              />
            </div>
            <button
              className='modal__btn modal__btn--active'
              onClick={handleChangePassword}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface StateProps {
  user: PayloadUser | null;
}

const mapStateToProps = (state: AppState): StateProps => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
