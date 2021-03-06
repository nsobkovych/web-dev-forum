'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const ROLE_ADMIN = require('../config/constants').ROLE_ADMIN;
const ROLE_USER = require('../config/constants').ROLE_USER;

//======================================
// User Schema
//======================================

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hash: String,
  salt: String,
  role: {
    type: String,
    enum: [ROLE_USER, ROLE_ADMIN],
    default: ROLE_USER
  },
  banned: {
    type: Boolean,
    default: false
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }
},
{
  timestamps: true
});

/**
 * Creates the encrypted hash from the password and the salt
 * with saving to the database
 * @param {String} password
 * @returns void
 */
userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('base64');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha256').toString('base64');
};

/**
 * Validates the hash from the given password and the hash from the database.
 * @param {String} password
 * @returns {Boolean}
 */
userSchema.methods.validPassword = function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha256').toString('base64');
  return this.hash === hash;
};

/**
 * Generates JWT.
 * @returns {String}
 */
userSchema.methods.generateJwt = function() {
  let expiry = new Date();
  
  expiry.setDate(expiry.getDate() + 7);
  
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      surname: this.surname,
      role: this.role,
      exp: parseInt(expiry.getTime() / 1000)
    },
    process.env.JWT_SECRET
  );
  
};

module.exports = mongoose.model('User', userSchema);
