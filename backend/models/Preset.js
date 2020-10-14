const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PresetSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  description: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
  saved: {
    type: String,
    default: new Date(Date.now()),
  },
  comments: {
    type: Object,
    default: {},
  },
  nodes: {
    type: Object,
    default: {
      '74050a71-967b-42d3-ae83-66907a1ac017': {
        mainKnot: true,
        children: [],
      },
      '74050a71-947b-42d3-ae83-66907a1ac017': {
        mainKnot: true,
        children: [],
      },
    },
  },
  goalDates: {
    type: Object,
    default: {},
  },
  headings: {
    type: Object,
    default: {
      '74050a71-967b-42d3-ae83-66907a1ac017': 'Edit me!',
    },
    required: true,
  },
  recommendations: {
    type: Object,
    default: {},
  },
  statuses: {
    type: Object,
    default: {},
  },
});

const Preset = mongoose.model('preset', PresetSchema);

module.exports = Preset;
