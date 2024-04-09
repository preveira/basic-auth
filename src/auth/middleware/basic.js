'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { User } = require('../models');


let signUp = async(req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await User.create(req.body);
    if(record) {
      next();
    } else {
      next('Unable to signup');
    }
  } catch (e) { res.status(403).send('Error Creating User'); }

};



let signIn = async(req, res, next) => {

console.log(req.headers); 
  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'am9objpmb28=']
  let encodedString = basicHeaderParts.pop();  // am9objpmb28=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password


  try {
    const user = await User.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      next();
    }
    else {
      next('Invalid User');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }


};

module.exports = {
  signUp,
  signIn,
};
