import mongoose, { Schema, model, models } from 'mongoose';

const authorSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  bio: String,
  role: { type: String, default: 'Journalist' },
  image: String,
  socialLinks: {
    twitter: String,
    facebook: String,
    linkedin: String,
    instagram: String,
  },
  expertise: [String],
  verified: { type: Boolean, default: false },
}, { timestamps: true });

const Author = models.Author || model('Author', authorSchema);

export default Author;
