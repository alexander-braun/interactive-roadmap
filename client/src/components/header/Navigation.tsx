import React from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../../reducers';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authenticate';

export type IDs = [string, string][];

interface Navigation {
  isAuthenticated: boolean | null;
}

function Navigation({ isAuthenticated }: Navigation): JSX.Element {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className='menue-bar__spaceholder'></div>
      <div className='menue-bar'>
        <Link to='/' className='menue-bar__title'>
          Interactive Roadmap
        </Link>
        <div className='menue-bar__links'>
          <button className='menue-bar__link'>Save</button>
          <Link
            to={`${isAuthenticated ? '/load' : '/login'}`}
            className='menue-bar__link'
          >
            Load
          </Link>

          {!isAuthenticated ? (
            <>
              <Link to='/login' className='menue-bar__link'>
                Login
              </Link>
              <Link to='/register' className='menue-bar__link'>
                Register
                <span className='menue-bar__free-indicator'>(free)</span>
              </Link>
            </>
          ) : (
            <button className='menue-bar__link' onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}

interface StateProps {
  isAuthenticated: boolean | null;
}

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navigation);
