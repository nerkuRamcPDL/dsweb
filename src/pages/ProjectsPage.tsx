import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const categories = ['All', 'ERP', 'Web', 'Mobile', 'AI', 'E-Commerce', 'Education', 'Healthcare', 'Government', 'Logistics'];

const projects = [
  { title: 'Pokhara Trading ERP', industry: 'ERP', tech: 'Odoo, Python, PostgreSQL', desc: 'Complete ERP implementation for a leading trading company with multi-warehouse inventory, accounting and sales management.', color: 'from-blue-500 to-blue-600' },
  { title: 'Himalayan School Portal', industry: 'Education', tech: 'React, Node.js, MongoDB', desc: 'Comprehensive school management system with admission, attendance, exam, fee collection and parent communication.', color: 'from-purple-500 to-purple-600' },
  { title: 'MediCare Hospital System', industry: 'Healthcare', tech: 'Django, React, PostgreSQL', desc: 'Hospital management system with patient records, appointments, billing, pharmacy and lab integration.', color: 'from-red-500 to-red-600' },
  { title: 'NepalMart E-Commerce', industry: 'E-Commerce', tech: 'Next.js, Stripe, AWS', desc: 'Multi-vendor e-commerce marketplace with payment gateway integration, delivery tracking and analytics.', color: 'from-pink-500 to-pink-600' },
  { title: 'LogiTrack Delivery App', industry: 'Logistics', tech: 'Flutter, Firebase, Maps API', desc: 'Cross-platform delivery tracking app with real-time GPS, route optimization and proof of delivery.', color: 'from-cyan-500 to-cyan-600' },
  { title: 'SmartGov Citizen Portal', industry: 'Government', tech: 'React, Django, PostgreSQL', desc: 'Digital citizen service portal with application tracking, document management and complaint system.', color: 'from-yellow-500 to-yellow-600' },
  { title: 'AI Customer Support Bot', industry: 'AI', tech: 'Python, OpenAI, React', desc: 'Intelligent chatbot handling customer queries 24/7 with natural language understanding and learning.', color: 'from-violet-500 to-violet-600' },
  { title: 'Gurkha Fitness App', industry: 'Mobile', tech: 'React Native, Node.js', desc: 'Fitness and wellness mobile app with workout tracking, nutrition plans and community features.', color: 'from-green-500 to-green-600' },
  { title: 'Annapurna Hotel CMS', industry: 'Web', tech: 'Next.js, Sanity, Tailwind', desc: 'Luxury hotel website with booking engine, room management, gallery and multi-language support.', color: 'from-orange-500 to-orange-600' },
  { title: 'Cooperative Management', industry: 'ERP', tech: 'PHP, MySQL, Bootstrap', desc: 'Complete cooperative society management with member accounts, savings, loans and dividend calculation.', color: 'from-indigo-500 to-indigo-600' },
  { title: 'FarmTech Agriculture', industry: 'ERP', tech: 'React, Django, PostgreSQL', desc: 'Agriculture management platform with crop tracking, inventory, sales and supply chain management.', color: 'from-lime-500 to-lime-600' },
  { title: 'AI Document Processor', industry: 'AI', tech: 'Python, TensorFlow, React', desc: 'Automated document processing system for invoices, contracts and forms with OCR and data extraction.', color: 'from-teal-500 to-teal-600' },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.industry === activeFilter);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              Our Projects
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Projects That <span className="gradient-text">Deliver Results</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Explore our portfolio of successful projects across industries. Each project represents a unique challenge solved with innovative technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all overflow-hidden"
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="p-6 -mt-10 relative">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full mb-3">
                    {project.industry}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{project.desc}</p>
                  <p className="text-xs text-gray-500 mb-4">Tech: {project.tech}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    View Case Study <ExternalLink size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Want to Be Our Next Success Story?</h2>
            <p className="text-gray-400 mb-8">Let's discuss your project and create something amazing together.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
