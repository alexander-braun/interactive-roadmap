import React, { memo, useState, useEffect, useCallback, useRef } from 'react';
import { AppState } from '../../reducers';
import { EditCardModalOpen } from '../../actions/constants';
import { connect } from 'react-redux';
import { Map } from '../types/Map';
import { setCardHeading } from '../../actions/setCardHeading';
import { useDispatch } from 'react-redux';
import { toggleEditCardModal } from '../../actions/toggleEditCardModal';
import { setStatus } from '../../actions/setStatus';
import { Status } from '../../actions/constants';

interface EditCardModal {
  editCardModal: EditCardModalOpen;
  data: Map[];
}

function EditCardModal({
  editCardModal,
  data,
}: EditCardModal): JSX.Element | null {
  const dispatch = useDispatch();
  const [text, updateText] = useState<string>();
  const [focus, toggleFocus] = useState<boolean>(false);
  const [card, updateCard] = useState<Map>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getCard = useCallback(() => {
    const id = editCardModal[0];
    if (!id.length) return;
    for (const category of data) {
      if (category.id === id) {
        updateCard(category);
        return;
      } else if (category.children) {
        for (const element of category.children) {
          if (element.id === id) {
            updateCard(element);
            return;
          } else if (element.children) {
            for (const child of element.children) {
              if (child.id === id) {
                updateCard(child);
                return;
              }
            }
          }
        }
      }
    }
    return;
  }, [data, editCardModal]);

  const handleFocus = () => {
    toggleFocus(!focus);
  };

  const handleSubmit = () => {
    if (!card || !text || !text.length || text === card!.title) return;
    dispatch(setCardHeading(card.id, text));
  };

  // const handleKeyPress = (e: React.KeyboardEvent) => {
  //   if (e.key === 'Enter') {
  //     handleSubmit();
  //   }
  // };

  const handleOffClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof Element) {
      if (e.target.classList.contains('edit-card-modal')) {
        dispatch(toggleEditCardModal(''));
      }
    }
  };

  const handleStatusChange = (status: Status) => {
    if (card) {
      dispatch(setStatus(status, card.id));
    }
  };

  const autoresize = (evt: HTMLTextAreaElement) => {
    let el = evt;
    el.style.height = '';
    let computed = window.getComputedStyle(el);
    let height =
      el.scrollHeight -
      (parseInt(computed.getPropertyValue('padding-top')) +
        parseInt(computed.getPropertyValue('padding-bottom')));
    el.style.height = height + 'px';
  };

  const resizeEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    autoresize(e.target);
  };

  const resizeRef = (ref: React.RefObject<HTMLTextAreaElement>) => {
    if (ref.current) {
      autoresize(ref.current);
    }
  };

  useEffect(() => {
    getCard();
  }, [getCard]);

  useEffect(() => {
    if (card) {
      updateText(card.title);
    }
  }, [card]);

  useEffect(() => {
    resizeRef(textareaRef);
  });

  useEffect(() => {
    if (card) {
      updateStatus(card.status);
    }
  }, [card]);

  const handleStatusUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (val === 'Pending' || val === 'In-Work' || val === 'Done') {
      updateStatus(val);
    }
  };

  const handleSave = () => {
    handleSubmit();
    if (status) {
      handleStatusChange(status);
    }
    dispatch(toggleEditCardModal(''));
  };

  const [status, updateStatus] = useState<Status>();

  if (!editCardModal[1]) return null;
  return (
    <div className='edit-card-modal' onClick={(e) => handleOffClick(e)}>
      <div className='edit-card-modal__wrapper'>
        <div className='edit-card-modal__edit-title-wrapper'>
          <h2 className='edit-card-modal__heading'>Edit Title</h2>
          <textarea
            ref={textareaRef}
            onChange={(e) => {
              updateText(e.target.value);
              resizeEvent(e);
            }}
            maxLength={100}
            value={text}
            onFocus={handleFocus}
            onBlur={(e) => {
              handleFocus();
            }}
            className='edit-card-modal__inner-text'
          ></textarea>
        </div>

        {card && !card.mainKnot && (
          <div className='edit-card-modal__edit-title-wrapper'>
            <h2 className='edit-card-modal__heading'>Edit Status</h2>
            <div className='edit-card-modal__choice'>
              <form>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      value='Pending'
                      checked={status === 'Pending' ? true : false}
                      onChange={handleStatusUpdate}
                    />
                    Pending
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      value='In-Work'
                      onChange={handleStatusUpdate}
                      checked={status === 'In-Work' ? true : false}
                    />
                    In Progress
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      value='Done'
                      onChange={handleStatusUpdate}
                      checked={status === 'Done' ? true : false}
                    />
                    Done
                  </label>
                </div>
              </form>
            </div>
          </div>
        )}
        <button
          className='edit-card-modal__close-button'
          onClick={() => dispatch(toggleEditCardModal(''))}
        >
          CLOSE
        </button>
        <button className='edit-card-modal__save-button' onClick={handleSave}>
          SAVE
        </button>
      </div>
    </div>
  );
}

interface StateProps {
  editCardModal: EditCardModalOpen;
  data: Map[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  editCardModal: state.editCardModal,
  data: state.data,
});

export default memo(connect(mapStateToProps)(EditCardModal));
