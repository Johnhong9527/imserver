import userSchema from '../models/user.js';

export default {
  login: async (req, res) => {
    try {
      console.log(req);
      res.send('resData');
      // const userInfo = new userSchema({
      //   username: 'String',
      //   password: 'String',
      //   phone: 15267617473,
      // });
      // const resData = await userInfo.save();
      // userSchema.console.log(req, res);
      // res.send(resData);
    } catch (error) {
      res.send(error);
    }
  },
  find: async (req, res) => {
    try {
      const resData = await userSchema.find({ name: '洪海涛' });
      res.send(resData);
    } catch (error) {
      res.send(error);
    }
  },
};
