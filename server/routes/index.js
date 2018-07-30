const userController = require('../controllers/userController.js');
const productController = require('../controllers/productController.js');

const passport = require('passport');
/* GET home page. */
module.exports = function(app) {
  app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
  });
  app.get('/', userController.index);
  app.post('/', userController.register);
  app.post('/addNew', productController.addProduct);
  // app.post('/update', productController.updateProduct);

  app.post('/signup', function(req, res, next) {
    require('../controllers/passport.js')(passport)
    passport.authenticate('signup', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({ message: info.message});
      }
      return res.redirect('/');
      // return res.json({ username: req.user.username });

    })(req, res, next);
  });
  app.post('/signin', function(req, res, next) {
    require('../controllers/passport.js')(passport)
    passport.authenticate('login', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json({ message: info.message});
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.redirect('/');
      });
    })(req, res, next);
  });
}

