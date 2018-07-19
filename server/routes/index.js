const userController = require('../controllers/userController.js');
const passport = require('passport');
/* GET home page. */
module.exports = function(app) {
  app.get('/', userController.index);
  app.post('/', userController.register);
  app.get('/signup',userController.signup);

  app.post('/signup', function(req, res, next) {
    passport.authenticate('signup', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.render('index', { message: info.message });
      }
      return res.redirect('/');
    })(req, res, next);
  });
  app.post('/signin', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.render('login', { message: info.message });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.redirect('/task');
      });
    })(req, res, next);
  });
}

