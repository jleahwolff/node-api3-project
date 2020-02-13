const express = require('express');
const helmet = require('helmet');

const server = express();
const userRouter = require('./users/userRouter');


// middleware
server.use(express.json()); //built in middleware
server.use(helmet());

server.use('/api/users', logger, userRouter)
server.get('/', logger, greeter, (req, res) => {
  res.send(`<h2>Let's write some ${req.cohort} middleware!</h2>`);
});


//custom middleware
// 🔆 LOGGER
function logger(req, res, next) {
  console.log(` ${req.method} Request on ${req.originalUrl}`)
  next();
}
// ⛔
// 🔆 GREETER
function greeter(req, res, next) {
  req.cohort = "Hello World";
  next();
}
// WORKING ✅
// 🔆 VALIDATE USER ID
function validateUserId(req, res, next) {
  const userId = req.params.id
}
// ⛔

module.exports = server;
