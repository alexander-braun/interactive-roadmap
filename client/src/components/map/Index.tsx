import React, { useEffect, useState, useCallback } from 'react';
import '../App.css';
import { frontend, Category } from '../../roadmap-data/frontend';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import SvgGenerator from './SvgGenerator';
import ResizeObserver from 'react-resize-observer';
import { AppState } from '../../reducers';
import { Map as MapT } from '../types/Map';
import { connect } from 'react-redux';

export interface Sections {
  [key: string]: [Category, Category[], Category[]];
}

export interface MapType {
  data: MapT[];
}

export type IDs = [string, string][];

function Map({ data }: MapType) {
  const generateSections = (): Sections => {
    const sections: Sections = {};
    for (const section of data) {
      const center: Category = section;
      const children: Category[] = [];
      const subchildren: Category[] = [];
      for (const child of section.children) {
        if (child.children) {
          subchildren.push(...child.children);
        }
        children.push(child);
      }
      sections[section.title] = [center, children, subchildren];
    }
    return sections;
  };

  const generateSvgParentsAndChildrenIds = (): IDs => {
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
  };

  const [ids, setSvgs] = useState<IDs>([]);

  return (
    <div className='map'>
      {Object.keys(generateSections()).map((section) => {
        return (
          <Section key={uuidv4()} sections={generateSections()[section]} />
        );
      })}
      <ResizeObserver
        onResize={() => {
          setSvgs(generateSvgParentsAndChildrenIds());
        }}
      />
      <SvgGenerator ids={ids} />;
    </div>
  );
}

interface StateProps {
  data: MapT[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  data: state.data,
});

export default React.memo(connect(mapStateToProps)(Map));
