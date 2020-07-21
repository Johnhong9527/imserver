import User from '../../models/user.js';
import localStrategy from 'passport-local';

export default new localStrategy.Strategy(async (username, password, cb) => {
  try {
    const user = await User.find({ username, password });
    if (!user || !user.length || user.length > 1) {
      return cb(null, false);
    }
    if (user[0].password != password) {
      return cb(null, false);
    }
    return cb(null, user[0]);
  } catch (error) {
    cb(error);
  }
});
