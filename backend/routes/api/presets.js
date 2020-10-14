const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Preset = require('../../models/Preset');

// @route       POST api/presets
// @description Create a preset
// @access      Private

router.post(
  '/',
  [auth, [check('name', 'Preset name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (req.body.name === 'Frontend Developer') {
      try {
        const preset = await Preset.find({
          name: 'Frontend Developer',
          user: req.user.id,
        }).then((name) => name);
        if (preset.length) {
          return res.status(400).json({ msg: 'Preset already exists' });
        }
      } catch (error) {
        console.error(error);
      }
    }
    try {
      let today = new Date();
      const statuses = req.body.statuses || {};
      const newPreset = new Preset({
        statuses: statuses,
        user: req.user.id,
        description: req.body.description,
        name: req.body.name,
        date:
          today.getFullYear() +
          '-' +
          (today.getMonth() + 1) +
          '-' +
          today.getDate(),
        comments: req.body.comments,
        nodes: req.body.nodes,
        goalDates: req.body.goalDates,
        headings: req.body.headings,
        recommendations: req.body.recommendations
      });
      const preset = await newPreset.save();
      res.json(preset);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route       GET api/presets
// @description Get all presets of user
// @access      Private

router.get('/', auth, async (req, res) => {
  try {
    const presets = await Preset.find({ user: req.user.id });
    if (!presets) {
      return res.status(404).json({ msg: 'No presets found' });
    }
    res.json(presets);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/presets/:id
// @description Get a preset
// @access      Private

router.get('/:id', auth, async (req, res) => {
  try {
    const preset = await Preset.findById(req.params.id);
    if (!preset) {
      return res.status(404).json({ msg: 'No preset found' });
    }
    res.json(preset);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route       PUT api/presets/:id
// @description Update Preset by id
// @access      Private

router.put('/:id', auth, async (req, res) => {
  try {
    const preset = await Preset.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!preset) {
      return res.status(404).json({ msg: 'No preset found' });
    }
    res.json(preset);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/presets/:id
// @description Delete a preset
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const preset = await Preset.findById(req.params.id);
    if (!preset) {
      return res.status(404).json({ msg: 'Preset not found' });
    }
    if (preset.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await preset.remove();
    res.json({ msg: 'Preset removed' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Preset not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
