const userController = require('../controllers/userController.js');

/* GET home page. */
module.exports = function(app) {
  app.get('/', userController.index);
}

