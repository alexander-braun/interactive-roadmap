import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

//Helper
import History from '../helper/history';
import { closeModalOnWrapperClick } from '../helper/closeModalOnWrapperClick';

//Global State
import { AppState } from '../../reducers';

//Components
import EditPresetModalSvg from './EditPresetModalSvg';

//Actions
import { updatePreset, loadPresets, Preset, ID } from '../../actions';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 *  Edit Preset Modal lets the user change
 *  the name and the description of a preset
 */

interface EditPresetModal {
  presets: Preset[];
  isAuthenticated: boolean | null;
}

const EditPresetModal = ({ presets, isAuthenticated }: EditPresetModal) => {
  const dispatch = useDispatch();

  const [formData, updateFormdata] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Holds the id from the url
   */
  const [id, updateId] = useState<ID>();

  /**
   * Saves the current preset to db and then reloads all presets from db
   */
  const handleSave = () => {
    if (!isAuthenticated) History.push('/login');
    const preset = {
      ...formData,
    };
    if (id) {
      dispatch(updatePreset(id, preset));
      dispatch(loadPresets());
      History.push('/load');
    }
  };

  /**
   * The url holds the preset id so this gets the id from the pathname and
   * searches for the belonging preset to prefill the name and description
   * fields with the current values.
   */
  const updateForm = useCallback(() => {
    const id: ID = History.location.pathname.split('/')[2];
    updateId(id);
    for (const preset of presets) {
      if (preset._id === id) {
        const description = preset.description || '';
        updateFormdata({
          name: preset.name,
          description,
        });
      }
    }
  }, [presets]);

  /**
   * Prefill form
   */
  useEffect(() => {
    updateForm();
  }, [presets, updateForm]);

  return (
    <div className='modal' onClick={closeModalOnWrapperClick}>
      <div className='modal__body'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={() => History.push('/')}
        />
        <EditPresetModalSvg />
        <div className='modal__add-new'>
          <form name='form' className='modal__form'>
            <h1 className='modal__create-heading'>Edit Preset</h1>
            <div className='modal__form-group'>
              <label htmlFor='name'>Preset Name</label>
              <input
                type='name'
                className='modal__form-control'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='modal__form-group'>
              <label htmlFor='description'>Preset Description</label>
              <input
                type='description'
                className='modal__form-control'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button className='modal__btn-load modal__btn' onClick={handleSave}>
              Save
            </button>
            <button
              className='modal__btn-back modal__btn'
              onClick={() => History.push('/load')}
            >
              Go Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface StateProps {
  presets: Preset[];
  isAuthenticated: boolean | null;
}

const mapStateToProps = (state: AppState): StateProps => ({
  presets: state.presets,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(EditPresetModal);
