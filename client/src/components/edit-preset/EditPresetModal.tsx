import React, { useState, useEffect } from 'react';
import History from '../helper/history';
import { Preset } from '../../actions/constants';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import EditPresetModalSvg from './EditPresetModalSvg';

interface EditPresetModal {
  presets: Preset[];
}

const EditPresetModal = ({ presets }: EditPresetModal) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('load-presets-modal')) {
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

  useEffect(() => {
    const id = History.location.pathname.split('/')[2];
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

  return (
    <div className='load-presets-modal' onClick={handleClick}>
      <div className='load-presets-modal__body'>
        <EditPresetModalSvg />
        <div className='load-presets-modal__add-new'>
          <form name='form' className='load-presets-modal__form'>
            <h1 className='load-presets-modal__create-heading'>Edit Preset</h1>
            <div className='load-presets-modal__form-group'>
              <label htmlFor='name'>Preset Name</label>
              <input
                type='name'
                className='load-presets-modal__form-control'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='load-presets-modal__form-group'>
              <label htmlFor='description'>Preset Description</label>
              <input
                type='description'
                className='load-presets-modal__form-control'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

interface StateProps {
  presets: Preset[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  presets: state.presets,
});

export default connect(mapStateToProps)(EditPresetModal);
