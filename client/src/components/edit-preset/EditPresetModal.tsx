import React, { useState, useEffect, useCallback } from 'react';
import History from '../helper/history';
import { Preset, ID } from '../../actions/constants';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import EditPresetModalSvg from './EditPresetModalSvg';
import { useDispatch } from 'react-redux';
import { updatePreset, loadPresets } from '../../actions/presets';

interface EditPresetModal {
  presets: Preset[];
  isAuthenticated: boolean | null;
}

const EditPresetModal = ({ presets, isAuthenticated }: EditPresetModal) => {
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('modal')) {
      History.push('/');
    }
  };

  const [formData, updateFormdata] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const [id, updateId] = useState<ID>();

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

  useEffect(() => {
    updateForm();
  }, [presets, updateForm]);

  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal__body'>
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
