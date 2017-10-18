// blog-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
	const mongooseClient = app.get('mongooseClient');
	const article = new mongooseClient.Schema({
		title: {},
		content: {},
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
