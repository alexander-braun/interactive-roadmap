import React from 'react';
import { connect } from 'react-redux';
import { Alert as AlertT } from '../../actions';
import { AppState } from '../../reducers';

interface AlertProps {
  alerts: AlertT[];
}

const Alert = ({ alerts }: AlertProps) => {
  return (
    <>
      {alerts.map((alert: AlertT) => (
        <div key={alert.id} className={`alert alert--${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </>
  );
};

interface StateProps {
  alerts: AlertT[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
