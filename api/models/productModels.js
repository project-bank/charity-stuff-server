'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {
        type: String,
        required: 'enter the name',
    },
    Created_date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: [{
          type: String,
          enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
      }
});

module.exports = mongoose.model('Products', ProductSchema);