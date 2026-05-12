require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  slug: String,
  subHeadline: String,
  category: String,
  author: String,
  date: { type: Date, default: Date.now },
  image: String,
  excerpt: String,
  content: String,
  status: String,
}, { strict: false });

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

const sampleArticles = [
  {
    title: "Global Markets Rally as Tech Stocks Surge",
    slug: "global-markets-rally-tech-stocks-" + Date.now(),
    subHeadline: "Major indices hit record highs following strong earnings reports.",
    category: "Business",
    author: "Jane Doe",
    image: "https://images.unsplash.com/photo-1590283603385-18ffb2a40c27?w=800&auto=format&fit=crop&q=60",
    excerpt: "Investors saw a significant boost in their portfolios today as the tech sector led a massive rally across all major global markets.",
    content: "<p>In an unexpected turn of events, global markets experienced a significant rally today. Technology stocks were the primary drivers of this upward trend, with several major companies reporting better-than-expected quarterly earnings.</p><p>Analysts believe this bullish sentiment will continue through the end of the quarter as consumer spending remains strong.</p>",
    status: "published"
  },
  {
    title: "New Breakthrough in Renewable Energy Tech",
    slug: "renewable-energy-breakthrough-" + Date.now(),
    subHeadline: "Scientists develop highly efficient solar panel material.",
    category: "Technology",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60",
    excerpt: "A team of international scientists has unveiled a new material that could increase solar panel efficiency by over 40%.",
    content: "<p>The future of clean energy looks brighter than ever. A new composite material developed by researchers at MIT promises to drastically improve the efficiency of commercial solar panels.</p><p>This development could accelerate the global transition away from fossil fuels, making renewable energy more accessible and affordable for everyone.</p>",
    status: "published"
  },
  {
    title: "City Council Approves New Public Transit Expansion",
    slug: "public-transit-expansion-" + Date.now(),
    subHeadline: "The multi-million dollar project aims to reduce urban congestion.",
    category: "Politics",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=60",
    excerpt: "Commuters can look forward to easier travel as the city council finally greenlights the long-debated public transit expansion project.",
    content: "<p>After months of heated debate, the city council has voted in favor of a comprehensive expansion of the local public transit system. The project will add three new train lines and dozens of bus routes to underserved neighborhoods.</p><p>Construction is set to begin next spring and is expected to create thousands of local jobs.</p>",
    status: "published"
  },
  {
    title: "Local Sports Team Wins Championship Title",
    slug: "local-sports-championship-" + Date.now(),
    subHeadline: "A historic victory after a 20-year drought.",
    category: "Sports",
    author: "Mike Thompson",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=60",
    excerpt: "The city erupted in celebration last night as the hometown heroes clinched the national championship title in a thrilling overtime finish.",
    content: "<p>It was a night to remember for sports fans across the city. In a nail-biting finish, our local team defeated their longtime rivals to claim the national championship, their first in over two decades.</p><p>A victory parade is scheduled for this weekend, with city officials expecting record-breaking attendance.</p>",
    status: "published"
  }
];

async function seed() {
  console.log('Connecting to DB...');
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Clearing old articles...');
  await Article.deleteMany({});
  console.log('Inserting seed data...');
  await Article.insertMany(sampleArticles);
  console.log('Seed complete!');
  process.exit(0);
}

seed().catch(console.error);
