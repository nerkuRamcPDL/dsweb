import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, ArrowRight, Search } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const categories = ['All', 'Technology', 'AI', 'ERP', 'Web Development', 'Business', 'Nepal Tech', 'Tutorials'];

const articles = [
  { title: 'How AI is Transforming Business Operations in Nepal', category: 'AI', author: 'Dynamics Team', date: 'Jan 15, 2025', readTime: '5 min', excerpt: 'Explore how artificial intelligence solutions are helping Nepali businesses automate processes, reduce costs, and improve customer experiences.', featured: true },
  { title: 'Why Every Business Needs an ERP System in 2025', category: 'ERP', author: 'Dynamics Team', date: 'Jan 10, 2025', readTime: '7 min', excerpt: 'Enterprise Resource Planning systems are no longer just for large corporations. Discover why SMEs in Nepal are adopting ERP solutions.' },
  { title: 'Building Scalable Web Applications with Next.js', category: 'Web Development', author: 'Dynamics Team', date: 'Jan 5, 2025', readTime: '8 min', excerpt: 'A comprehensive guide to building modern, performant web applications using Next.js, React, and server-side rendering.' },
  { title: 'Digital Transformation Trends in Nepal', category: 'Nepal Tech', author: 'Dynamics Team', date: 'Dec 28, 2024', readTime: '6 min', excerpt: 'The technology landscape in Nepal is evolving rapidly. Here are the key trends shaping digital transformation across industries.' },
  { title: 'Odoo vs Custom ERP: Which is Right for You?', category: 'ERP', author: 'Dynamics Team', date: 'Dec 20, 2024', readTime: '9 min', excerpt: 'A detailed comparison of Odoo ERP and custom-built solutions to help you make the right choice for your business.' },
  { title: 'Introduction to AI Chatbots for Customer Support', category: 'AI', author: 'Dynamics Team', date: 'Dec 15, 2024', readTime: '6 min', excerpt: 'Learn how AI chatbots can revolutionize your customer support, reduce response times, and improve satisfaction scores.' },
  { title: 'Mobile App Development: Flutter vs React Native', category: 'Technology', author: 'Dynamics Team', date: 'Dec 10, 2024', readTime: '7 min', excerpt: 'Choosing the right cross-platform framework for your mobile app project. We compare Flutter and React Native in detail.' },
  { title: '5 Automation Tools Every Business Should Use', category: 'Business', author: 'Dynamics Team', date: 'Dec 5, 2024', readTime: '5 min', excerpt: 'From workflow automation to marketing automation, discover the essential tools that can save your team hours every week.' },
  { title: 'Getting Started with Cloud Migration', category: 'Tutorials', author: 'Dynamics Team', date: 'Nov 28, 2024', readTime: '10 min', excerpt: 'A step-by-step guide to migrating your business applications and data to the cloud safely and efficiently.' },
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Insights & Blog
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Technology <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Expert articles, tutorials, and insights on software development, AI, ERP, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, i) => (
              <motion.article
                key={article.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className={`group rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all overflow-hidden ${
                  article.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`h-48 bg-gradient-to-br ${article.featured ? 'from-blue-600/20 to-purple-600/20' : 'from-gray-800 to-gray-900'} flex items-center justify-center`}>
                  <Tag size={article.featured ? 48 : 32} className="text-blue-400/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-gray-500" />
                      <span className="text-xs text-gray-500">{article.author}</span>
                      <span className="text-xs text-gray-600">•</span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <span className="text-sm text-blue-400 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
