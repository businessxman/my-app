const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require('../../../config/db.config');

// Load input validation
const validateLoginInput = require('../../../validation/login');
const validateRegisterInput = require('../../../validation/register');

// Load User model
const User = require('../../../models/user.model')(mongoose);

// @route Register

// @route POST api/user/register
// @desc Register user
// @access Public
router.post('/register', (req, res) =>{
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  User.findOne({email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        authority: req.body.authority,
        password: req.body.password
      });

      // hash password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        })
      });
    }
  })
  .catch(err => {
    console.log(err);
    return res.status(400).json({
      error: 'Server error'
    });
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email: email}).then(user => {
    if (!user) {
      return res.status(404).json({
        email: 'Email not found'
      });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
          authority: user.authority
        }

        // sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer" + token
            })
          }
        )
      } else {
        return res.status(400).json({
          password: 'Password incorrect'
        });
      }
    })
  })
});

router.get('/data', function(req, res, next) {
  User.find({
    authority:0
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;