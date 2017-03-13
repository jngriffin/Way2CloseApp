'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Task Schema
 */
var TaskSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Task name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  property: {
	  type: Schema.ObjectId,
	  ref: 'Property'
  },
  responsibility: {
	  type: String,
	  required: true
  },
  due: {
	  type: Date,
	  required: true
  },
  completed_on: {
	  type: Date
  },
  complete: {
	  type: Boolean,
	  default: false
  }
});

mongoose.model('Task', TaskSchema);