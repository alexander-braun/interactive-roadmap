import React, { memo } from 'react';
import { Category } from '../../roadmap-data/frontend';
import Comments from './Comments';

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
    if (
      child.recommended === 'not-recommended' ||
      child.recommended === 'not-recommended-none'
    ) {
      styles.push('notRecommended');
    }
    if (child.recommended === 'option') {
      styles.push('option');
    }
    if (child.recommended === 'not-strict') {
      styles.push('not-strict');
    }
    if (child.recommended === 'not-recommended-option') {
      styles.push('not-recommended-option');
    }
    return styles;
  };

  return (
    <div className={`elem ${style(child).join(' ')}`} id={child.id}>
      {!child.mainKnot &&
        child.recommended !== 'none' &&
        child.recommended !== 'not-recommended-none' && (
          <div className='indication-circle'>✓</div>
        )}
      {!props.subchildren && <div className='add-circle'>+</div>}
      {child.mainKnot && <div className='inner-text'>{child.title}</div>}

      {child.mainKnot ? null : (
        <div className='heading'>
          <div className='inner-text'>{child.title}</div>
          <div className='due-date'>26.05.2022</div>
        </div>
      )}
      <Comments child={child} />
      {child.mainKnot ? null : (
        <div className='bottom-row'>
          <div className='status'>
            {child.finished ? (
              <>
                <div className='green-dot'></div>
                <div className='status-text'>Done</div>
              </>
            ) : (
              <>
                <div className='red-dot'></div>
                <div className='status-text'>Pending</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Children);
