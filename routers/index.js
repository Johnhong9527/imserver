import users from "../controllers/userControllers.js";
import express from "../config/express.js";

export default (app, passport) => {
  const pauth = passport.authenticate.bind(passport);
  // express 基础配置
  express(app, passport);
  // 路由配置
  app.get("/", function (req, res) {
    res.send("hello world");
  });
  // app.post('/login', function (req, res) {
  //   console.log(10101001);
  //   res.send('POST request to the homepage');
  // });
  app.get("/login", users.login);
  app.post("/logintest", (req, res) => {
    console.log(req);
    res.send({
      code: -1,
      msg: "该用户不存在"
    });
  }),
    app.post(
      "/login",
      pauth("local", {
        failureRedirect: "/login_error"
      }),
      (req, res) => {
        console.log(req.route);
        res.send("登陆成功");
      }
    );
  app.get("/login_error", (req, res) => {
    console.log(req.route);
    res.send({
      code: -1,
      msg: "该用户不存在"
    });
  });

  app.get("/find", users.find);
};
