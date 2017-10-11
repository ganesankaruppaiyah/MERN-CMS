const user = require('./user/user.service.js');
const article = require('./blog/blog.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(user);
  app.configure(article);
};
