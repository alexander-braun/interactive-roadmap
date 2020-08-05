import React from 'react';
import Map from './map/Map';
import '../styles/main.css';
import { Nodes } from './types/Map-Data';
import { AppState } from '../reducers';
import { connect } from 'react-redux';
import SvgGenerator from './map/SvgGenerator';
import CalendarModal from './map/CalendarModal';

interface AppProps {
  data: Nodes;
}

export type IDs = [string, string][];

function App({ data }: AppProps): JSX.Element {
  return (
    <div className='App'>
      <Map data={data} />
      <SvgGenerator />
      <CalendarModal />
    </div>
  );
}

interface StateProps {
  data: Nodes;
}

const mapStateToProps = (state: AppState): StateProps => ({
  data: state.data,
});

export default connect(mapStateToProps)(App);
