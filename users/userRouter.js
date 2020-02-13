// Express
const express = require('express');

// Importing DB's
const User = require('./userDb.js');
const Post = require('../posts/postDb.js');

const router = express.Router();

// 🏠 POST/
router.post('/', validateUser, (req, res) => {
  // do your magic!
  res.status(200).json(req.user);
});
// NOT WORKING ⛔

// 🏠 POST/ :id/posts
router.post('/:id/posts', (req, res) => {
  // do your magic!
});
// NOT WORKING ⛔

// 🏠 GET/
router.get('/', (req, res) => {
  // do your magic!
  console.log(req.body);

  User.get()
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
// WORKING ✅

// 🏠 GET/ :id
router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  res.status(200).json(req.user);
});
// WORKING ✅

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

// 🏠 DELETE/ :id
router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  User.remove(req.params.id)
  .then(post => {
    res.status(200).json({message: "Deleted user"})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({errorMessage: "Unable to delete user"
    });
  });
});
// WORKING ✅

// 🏠 PUT/ :id
router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  // console.log(req.params); //id number
  const { id } = req.params;
  // console.log(req.body); //empty object
  const change = req.body;
  if (!change.name) {
    res.status(400).json({errorMessage: "Unable to update"})
  } else {
    User.update(id, change)
      .then(update => {
        res.status(200).json(update);
      })
      .catch(err => {
        res.status(500).json({errorMessage: "No changes made"})
      })
  }
});
// WORKING ✅

// 🔆 Custom middleware

// 🏠 VALIDATE USER ID
function validateUserId(req, res, next) {
  // do your magic!
  const { id } = req.params;
  console.log(id);
  User.getById(id)
  .then(user => {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(400).json({
        errorMessage: "Unable to locate User by ID number"
      })
    }
  })
  .catch(err => {
    console.log(err, "Error ValidateUserId")
    res.status(500).json({ errorMessage: "Error in VUID"})
  })
};
// WORKING ✅

// 🏠 VALIDATE USER
function validateUser(req, res, next) {
  // do your magic!
  const user = req.body;
  User.insert(user)
  .then(users => {
    if(!users) {
      res.status(400).json({errorMessage: "No user found"})
    } else if (!user.name) {
      res.status(400).json({errorMessage: "Not correct username"})
    } else {
      req.users = users;
      next();
    }
  });
};
// NOT WORKING ⛔

// 🏠 VALIDATE POST
function validatePost(req, res, next) {
  // do your magic!
  const { id } = req.params;
  const user = 

}

module.exports = router;
