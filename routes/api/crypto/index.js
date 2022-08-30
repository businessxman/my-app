const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const validateRegisterInput = require('../../../validation/crypto_register');

const Cryto_User = require('../../../models/crypto_user.model')(mongoose);

// @route POST api/crypto/register
// @desc Register crypto user
// @access Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Cryto_User.findOne({user_id: req.body.user_id, email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const newUser = new Cryto_User({
        user_id: req.body.user_id,
        name: req.body.name,
        app_name: req.body.app_name,
        email: req.body.email,
        phone: req.body.phone
      });

      newUser.save()
        .then(user => res.json({
          success: true,
          data: res
        }))
        .catch(err => console.log(err));
    }
  })
  .catch(err => {
    console.log(err);
    return res.status(400).json({
      error: 'Server error'
    });
  });
});

module.exports = router;