const express = require('express');

const router = express.Router();
const UserData = require('./userDb.js');
const PostData = require('../posts/postDb.js');

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  console.log(req.body);

  UserData.find(req.query)
  .then(ud => {
    res.status(200).json(ud)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      errorMessage:"Unable to collect user data", ud
    })
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
