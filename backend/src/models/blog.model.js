// blog-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
require('mongoose');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const article = new mongooseClient.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      start: {
        type: String,
        required: true
      },
      full: {
        type: String,
        required: false
      }
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });
  return mongooseClient.model('article', article);
};
