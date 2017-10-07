// blog-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const blogPost = new Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      snippet: {
        type: String,
        required: true
      },
      bulk: {
        type: String
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
  return mongooseClient.model('blogPost', blogPost);
};
