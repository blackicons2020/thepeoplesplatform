import mongoose, { Schema, model, models } from 'mongoose';

const articleSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  subHeadline: { type: String, default: '' },
  category: { type: String, required: true },
  author: { type: String, default: 'Staff Reporter' },
  authorId: { type: Schema.Types.ObjectId, ref: 'Author' },
  date: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  image: String,
  excerpt: String,
  content: String,
  views: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'published', 'rejected'], default: 'pending' },
  isBreaking: { type: Boolean, default: false },
  // SEO Fields
  metaTitle: String,
  metaDescription: String,
  keywords: [String],
  canonicalUrl: String,
}, { timestamps: true });

// Add index for fast searching and sitemap generation
articleSchema.index({ status: 1, date: -1 });
articleSchema.index({ slug: 1, status: 1 });
articleSchema.index({ category: 1, status: 1, date: -1 });

const Article = models.Article || model('Article', articleSchema);

export default Article;
