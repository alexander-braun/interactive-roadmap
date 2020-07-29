import React from 'react';
import Map from './map/Index';
import '../styles/main.css';
import { Map as MapT } from './types/Map';
import { AppState } from '../reducers';
import { InviewElements } from '../actions/constants';
import { connect } from 'react-redux';

interface AppProps {
  data: MapT[];
}

function App({ data }: AppProps): JSX.Element {
  return (
    <div className='App'>
      <Map data={data} />
    </div>
  );
}

interface StateProps {
  data: MapT[];
  inView: InviewElements;
}

const mapStateToProps = (state: AppState): StateProps => ({
  data: state.data,
  inView: state.inView,
});

export default connect(mapStateToProps)(App);
