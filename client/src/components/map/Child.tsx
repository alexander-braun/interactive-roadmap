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
      {child.mainKnot && <div className='inner-text'>{child.title}</div>}

      {child.mainKnot ? null : (
        <div className='heading'>
          <div className='inner-text'>{child.title}</div>
          <>
            <svg
              aria-hidden='true'
              className='octicon'
              height='16px'
              role='img'
              viewBox='0 0 14 16'
              width='14px'
              style={{
                display: 'inlineBlock',
                fill: 'black',
                userSelect: 'none',
                verticalAlign: 'textBottom',
                marginLeft: 'auto',
              }}
            >
              <path
                fill-rule='evenodd'
                d='M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z'
              ></path>
            </svg>
          </>
        </div>
      )}

      {child.mainKnot ? null : (
        <div className='comments-row'>
          <div>- Redo this</div>
          <div>+ Add</div>
        </div>
      )}
      {child.mainKnot ? null : (
        <div className='bottom-row'>
          <div className='importance'>i:10</div>
          {/*🔵🔴🟡 */}
          <div className='status'>🟢Done</div>
        </div>
      )}
    </div>
  );
}

export default Children;
