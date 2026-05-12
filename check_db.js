require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  status: String,
  date: Date
}, { strict: false });

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

async function check() {
  console.log('Connecting to', process.env.MONGODB_URI);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected.');
  const count = await Article.countDocuments();
  console.log('Total articles:', count);
  const publishedCount = await Article.countDocuments({ status: 'published' });
  console.log('Published articles:', publishedCount);
  const articles = await Article.find().select('title status date').lean();
  console.log('Articles:', articles);
  process.exit(0);
}

check().catch(console.error);
