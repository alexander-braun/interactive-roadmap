import React from 'react';
import { Category } from '../../roadmap-data/frontend';

interface Child {
  child: Category;
  subchildren?: boolean;
  center?: boolean;
}

function Children({ child, ...props }: Child): JSX.Element {
  const style = (child: Category): string[] => {
    const styles: string[] = [];
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

  return (
    <div className={`elem ${style(child).join(' ')}`} id={child.id}>
      <div className='indication-circle'>✓</div>
      <div className='inner-text'>{child.title}</div>
      {child.mainKnot ? null : <div className='due-date'>26.01.2022</div>}
      {child.mainKnot ? null : (
        <div className='comments-row'>
          <div>- Redo this</div>
          <div>+ Add</div>
        </div>
      )}
      {child.mainKnot ? null : (
        <div className='bottom-row'>
          <div>Importance: 10</div>
          {/*🔵🔴🟡 */}
          <div>🟢Done</div>
        </div>
      )}
    </div>
  );
}

export default Children;
