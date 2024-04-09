'use strict';

function handleNotFound(req, res) {
  res.status(404).send('404: Invalid Route. Page not Found.');
}

module.exports = handleNotFound;