import React from 'react';
import { Category } from '../../roadmap-data/frontend';
import { v4 as uuidv4 } from 'uuid';

interface Children {
  children: Category[] | Category;
  subchildren?: boolean;
  center?: boolean;
}

function Children({ children, ...props }: Children) {
  const style = (child: Category) => {
    const styles = [];
    if (child.mainKnot) {
      styles.push('center');
    } else if (!child.mainKnot) {
      styles.push('element');
    }
    if (child.recommended === 'not-recommended') {
      styles.push('notRecommended');
    }
    return styles;
  };
  const generateChildElements = (): JSX.Element | null => {
    if (Array.isArray(children) && children.length > 0) {
      return (
        <div className='section__side-elements'>
          {children.map(
            (child): JSX.Element => {
              return (
                <div
                  key={uuidv4()}
                  className={`elem ${style(child).join(' ')}`}
                  id={child.id}
                >
                  {child.title}
                </div>
              );
            }
          )}
        </div>
      );
    } else if (!Array.isArray(children) && children.title) {
      return (
        <div className='section__side-elements'>
          <div
            key={uuidv4()}
            className={`elem ${children.mainKnot ? 'center' : 'element'}`}
            id={children.id}
          >
            {children.title}
          </div>
        </div>
      );
    } else return null;
  };

  return generateChildElements();
}

export default Children;
