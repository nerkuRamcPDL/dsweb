import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, MessageCircle, FileText, PenTool, Bot, Workflow, ArrowRight, Zap, Globe, Mail, Phone, MessageSquare } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function AIPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Brain size={14} />
              AI & Automation
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Intelligent Automation for the <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Harness the power of artificial intelligence and workflow automation to eliminate repetitive tasks, gain insights, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2">
                Explore AI Solutions <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">AI <span className="gradient-text">Solutions</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Purpose-built AI solutions for every business need.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: 'AI Chatbot', desc: 'Intelligent customer support chatbot that handles queries 24/7, learns from interactions, and provides instant, accurate responses across web and mobile.', features: ['24/7 Availability', 'Multi-language', 'Learning AI', 'CRM Integration'] },
              { icon: Brain, title: 'AI Business Assistant', desc: 'Your business data meets artificial intelligence. Get real-time insights, predictions, and actionable recommendations.', features: ['Data Analysis', 'Predictions', 'Recommendations', 'Custom Reports'] },
              { icon: FileText, title: 'Document Intelligence', desc: 'Automatically process and extract data from invoices, PDFs, forms, contracts, and reports with high accuracy.', features: ['OCR Processing', 'Data Extraction', 'Auto-Classification', 'Validation'] },
              { icon: PenTool, title: 'AI Content Studio', desc: 'Generate high-quality social media posts, blog articles, product descriptions, and marketing content instantly.', features: ['Blog Writing', 'Social Posts', 'Product Descriptions', 'SEO Content'] },
              { icon: Bot, title: 'AI Agents', desc: 'Industry-specific autonomous agents that handle complex workflows, make decisions, and execute tasks independently.', features: ['Task Automation', 'Decision Making', 'Multi-Step Workflows', 'Self-Learning'] },
              { icon: Workflow, title: 'Workflow Automation', desc: 'Connect all your business systems and automate processes across website, CRM, ERP, email, SMS, and WhatsApp.', features: ['System Integration', 'Auto-Triggers', 'Multi-Channel', 'Analytics'] },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/10 hover:border-purple-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((f) => (
                    <span key={f} className="px-2 py-0.5 text-xs bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Flow */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Workflow <span className="gradient-text">Automation</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Connect all your systems and automate your entire business workflow.</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              {[
                { icon: Globe, label: 'Website', desc: 'Customer visits your website' },
                { icon: MessageSquare, label: 'CRM', desc: 'Lead captured automatically' },
                { icon: Brain, label: 'ERP', desc: 'Order processed in system' },
                { icon: Mail, label: 'Email', desc: 'Confirmation sent to customer' },
                { icon: Phone, label: 'SMS/WhatsApp', desc: 'Delivery notification sent' },
                { icon: FileText, label: 'Accounting', desc: 'Invoice generated automatically' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="w-full"
                >
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <span className="text-white font-medium">{item.label}</span>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                    <Zap size={16} className="text-blue-400 ml-auto" />
                  </div>
                  {i < 5 && (
                    <div className="flex justify-center py-2">
                      <div className="w-px h-6 bg-gradient-to-b from-purple-500/50 to-transparent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
            <p className="text-gray-400 mb-8">Let our AI experts design the perfect automation solution for your business.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/25">
              Get AI Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
