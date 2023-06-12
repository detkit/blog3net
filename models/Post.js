import { Schema, model, models } from 'mongoose';

const postSchema = new Schema(
	{
		title: {
			type: String,
			unique: true,
			required: true,
		},
		description: {
			type: String,
			unique: true,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Post = models.Post || model('Post', postSchema);

export default Post;
