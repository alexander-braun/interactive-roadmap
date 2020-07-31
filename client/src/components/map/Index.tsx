import React, { useState, useEffect, useCallback, memo } from 'react';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import SvgGenerator from './SvgGenerator';
import ResizeObserver from 'react-resize-observer';
import { Map as MapT } from '../types/Map';

export interface Sections {
  [key: string]: [MapT, MapT[]];
}

export interface MapType {
  data: MapT[];
}

export type IDs = [string, string][];

function Map({ data }: MapType): JSX.Element {
  const [ids, setSvgs] = useState<IDs>([]);
  const [sections, updateSections] = useState<Sections>({});

  const generateSections = useCallback((): Sections => {
    const sections: Sections = {};
    for (const section of data) {
      const center: MapT = section;
      const children: MapT[] = [...section.children];
      sections[section.title] = [center, children];
    }
    return sections;
  }, [data]);

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

  const [width, updateWidth] = useState<number>();

  useEffect(() => {
    updateSections(generateSections());
  }, [generateSections]);

  useEffect(() => {
    setSvgs(generateSvgParentsAndChildrenIds());
  }, [data, generateSvgParentsAndChildrenIds]);

  return (
    <div className='map'>
      {Object.keys(sections).map((section, index) => {
        return (
          <Section index={index} key={uuidv4()} sections={sections[section]} />
        );
      })}

      <ResizeObserver
        onResize={(rect) => {
          updateWidth(rect.width);
        }}
        onPosition={(rect) => {
          updateWidth(rect.width);
        }}
      />

      <SvgGenerator ids={ids} width={width} />
    </div>
  );
}

export default memo(Map);
