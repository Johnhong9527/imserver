import morgan from "morgan";
import bodyParser from "body-parser";
import expressSession from "express-session";
export default (app, passport) => {
  //allow custom header and CORS
  app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );

    if (req.method == "OPTIONS") {
      res.send(200);
      /让options请求快速返回/;
    } else {
      next();
    }
  });
  app.use(morgan("combined"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    expressSession({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
