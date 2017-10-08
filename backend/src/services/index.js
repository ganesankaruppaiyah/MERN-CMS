const contact = require('./contact/contact.service.js');
const article = require('./blog/blog.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(contact);
  app.configure(article);
};
