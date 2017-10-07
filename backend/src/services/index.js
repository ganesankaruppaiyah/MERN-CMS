const contact = require('./contact/contact.service.js');
const blogPost = require('./blog/blog.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(contact);
  app.configure(blogPost);
};
