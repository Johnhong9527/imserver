import local from './passport/local.js';
import User from '../models/user.js';
export default (passport) => {
  // serialize sessions
  passport.serializeUser((user, cb) => {
    console.log(user);
    return cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    console.log(id, 9999);
    return User.findOne({ criteria: { _id: id } }, cb);
  });
  passport.use(local);
};
