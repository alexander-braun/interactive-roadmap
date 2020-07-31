import React, { useCallback, useEffect, useState } from 'react';
import Map from './map/Index';
import '../styles/main.css';
import { Map as MapT } from './types/Map';
import { AppState } from '../reducers';
import { connect } from 'react-redux';
import SvgGenerator from './map/SvgGenerator';
import ResizeObserver from 'react-resize-observer';

interface AppProps {
  data: MapT[];
}

export type IDs = [string, string][];

function App({ data }: AppProps): JSX.Element {
  const generateSvgParentsAndChildrenIds = useCallback((): IDs => {
    const pairs: IDs = [];
    let currentCategoryId = '';
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const parentId = node.id;
      if (currentCategoryId.length) {
        pairs.push([currentCategoryId, parentId]);
      }
      currentCategoryId = parentId;
      for (const child of node.children) {
        const childId = child.id;
        pairs.push([parentId, childId]);
        if (child.children) {
          for (const subchild of child.children) {
            pairs.push([childId, subchild.id]);
          }
        }
      }
    }
    return pairs;
  }, [data]);

  const [ids, setSvgs] = useState<IDs>([]);

  useEffect(() => {
    setSvgs(generateSvgParentsAndChildrenIds());
  }, [generateSvgParentsAndChildrenIds]);

  return (
    <div className='App'>
      <Map data={data} />
      <ResizeObserver
        onReflow={(rect) => {
          setSvgs(generateSvgParentsAndChildrenIds());
        }}
      />
      <SvgGenerator ids={ids} data={data} />
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
