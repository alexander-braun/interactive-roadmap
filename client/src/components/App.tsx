import React from 'react';
import Map from './map/Index';
import '../styles/main.css';
import { Map as MapT } from './types/Map';
import { AppState } from '../reducers';
import { connect } from 'react-redux';
import SvgGenerator from './map/SvgGenerator';

interface AppProps {
  data: MapT[];
}

export type IDs = [string, string][];

function App({ data }: AppProps): JSX.Element {
  return (
    <div className='App'>
      <Map data={data} />
      <SvgGenerator data={data} />
    </div>
  );
}

interface StateProps {
  data: MapT[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  data: state.data,
});

export default connect(mapStateToProps)(App);
