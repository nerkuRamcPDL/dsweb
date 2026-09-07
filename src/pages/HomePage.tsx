import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Code, Globe, Smartphone, Database, Brain, Zap,
  Shield, BarChart3, Users, Building2, GraduationCap, Heart,
  Truck, Factory, ShoppingBag, Server, Cloud, Cpu, Layers,
  CheckCircle2, Star, ChevronRight, Monitor, Workflow
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center animated-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Zap size={14} />
                Technology That Drives Business Forward
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">We Build Technology That</span>{' '}
                <span className="gradient-text">Moves Your Business Forward.</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl">
                From ERP and business software to AI, websites, mobile applications and enterprise automation — Dynamics of Tech helps organizations transform ideas into scalable digital solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
                >
                  Start Your Project <ArrowRight size={18} />
                </Link>
                <Link
                  to="/solutions"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Explore Solutions <ChevronRight size={18} />
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> No commitment</span>
                <span className="mx-2">•</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> Free consultation</span>
                <span className="mx-2">•</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> Quick response</span>
              </div>
            </motion.div>

            {/* Hero Visual - Interactive Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
                <div className="relative glass rounded-3xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-xs text-gray-500 ml-2">Dynamics Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Database, label: 'ERP', color: 'from-blue-500 to-blue-600' },
                      { icon: Brain, label: 'AI', color: 'from-purple-500 to-purple-600' },
                      { icon: Cloud, label: 'Cloud', color: 'from-cyan-500 to-cyan-600' },
                      { icon: Smartphone, label: 'Mobile', color: 'from-green-500 to-green-600' },
                      { icon: BarChart3, label: 'Analytics', color: 'from-orange-500 to-orange-600' },
                      { icon: Workflow, label: 'Automation', color: 'from-pink-500 to-pink-600' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/20 transition-all"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-2`}>
                          <item.icon size={18} className="text-white" />
                        </div>
                        <p className="text-sm text-white font-medium">{item.label}</p>
                        <p className="text-xs text-gray-500">Active</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">System Performance</span>
                      <span className="text-xs text-green-400">98.5%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '98.5%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Code, label: 'Software Development' },
              { icon: Database, label: 'ERP Solutions' },
              { icon: Brain, label: 'AI & Automation' },
              { icon: Globe, label: 'Web Development' },
              { icon: Smartphone, label: 'Mobile Apps' },
              { icon: Zap, label: 'Digital Transformation' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2">
                <item.icon size={24} className="text-blue-400" />
                <span className="text-xs text-gray-400 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-10 border-t border-gray-800 grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: '100+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '10+', label: 'Years Experience' },
              { value: '15+', label: 'Products Built' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Problems Section */}
      <section className="py-24 bg-dark relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technology Should Simplify Your Business —{' '}
              <span className="gradient-text">Not Complicate It.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We understand the challenges businesses face. Our solutions are designed to solve real problems.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Manual Processes', desc: 'Replace spreadsheets and paperwork with automated workflows.', icon: '📋' },
              { title: 'Scattered Data', desc: 'Bring all business information into one unified platform.', icon: '📊' },
              { title: 'Poor Visibility', desc: 'Get real-time dashboards and analytics for better decisions.', icon: '👁️' },
              { title: 'Repetitive Work', desc: 'Automate routine operations and save valuable time.', icon: '⚙️' },
              { title: 'Outdated Software', desc: 'Modernize legacy systems with cutting-edge technology.', icon: '🔄' },
              { title: 'Digital Growth', desc: 'Build scalable technology infrastructure for the future.', icon: '🚀' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform every aspect of your business.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database, title: 'ERP & Business Management', color: 'from-blue-500 to-blue-600',
                desc: 'Complete business management with accounting, sales, CRM, inventory, HR, manufacturing and more.',
                items: ['Odoo ERP', 'Accounting', 'CRM', 'Inventory', 'HR & Payroll', 'POS']
              },
              {
                icon: Brain, title: 'AI Solutions', color: 'from-purple-500 to-purple-600',
                desc: 'Intelligent automation with AI chatbots, document processing, content generation and business assistants.',
                items: ['AI Chatbots', 'AI Agents', 'Document AI', 'Content Studio', 'Business AI', 'Automation']
              },
              {
                icon: Code, title: 'Custom Software', color: 'from-green-500 to-green-600',
                desc: 'Tailored software solutions built from concept to deployment for your unique business needs.',
                items: ['Business Systems', 'Workflow Apps', 'Government Systems', 'Institution Management', 'Logistics', 'Custom APIs']
              },
              {
                icon: Globe, title: 'Web Development', color: 'from-cyan-500 to-cyan-600',
                desc: 'Modern websites, web applications, e-commerce platforms and progressive web apps.',
                items: ['Corporate Sites', 'E-Commerce', 'Marketplace', 'SaaS', 'Web Apps', 'PWA']
              },
              {
                icon: Smartphone, title: 'Mobile Applications', color: 'from-orange-500 to-orange-600',
                desc: 'Native and cross-platform mobile apps for Android and iOS with modern frameworks.',
                items: ['Android', 'iOS', 'Flutter', 'React Native', 'Business Apps', 'Delivery Apps']
              },
              {
                icon: Zap, title: 'Digital Transformation', color: 'from-pink-500 to-pink-600',
                desc: 'End-to-end digital transformation including cloud migration, API integration and system modernization.',
                items: ['Process Automation', 'Cloud Migration', 'API Integration', 'Data Migration', 'Modernization', 'Analytics']
              },
            ].map((solution, i) => (
              <motion.div
                key={solution.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4`}>
                  <solution.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{solution.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 text-xs bg-white/5 text-gray-400 rounded-md border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/solutions" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all">
              View All Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ERP Feature Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Database size={14} />
                ERP Solution
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                One Platform.{' '}
                <span className="gradient-text">Your Entire Business.</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Manage every aspect of your business from a single, integrated platform. Our ERP solution connects accounting, sales, inventory, HR, manufacturing, and more — giving you complete visibility and control.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {['Accounting', 'Sales', 'CRM', 'Purchase', 'Inventory', 'Manufacturing', 'POS', 'E-Commerce', 'HR', 'Payroll', 'Projects', 'Expenses'].map((mod) => (
                  <div key={mod} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5">
                    <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{mod}</span>
                  </div>
                ))}
              </div>
              <Link to="/solutions" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Learn more about our ERP <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="space-y-4">
                  {[
                    { module: 'Accounting', progress: 95, color: 'bg-blue-500' },
                    { module: 'Sales Pipeline', progress: 82, color: 'bg-purple-500' },
                    { module: 'Inventory', progress: 90, color: 'bg-green-500' },
                    { module: 'HR & Payroll', progress: 88, color: 'bg-orange-500' },
                  ].map((item) => (
                    <div key={item.module}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300">{item.module}</span>
                        <span className="text-gray-500">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full transition-all`} style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Revenue', value: 'Rs. 2.4M', change: '+12%' },
                    { label: 'Orders', value: '1,245', change: '+8%' },
                    { label: 'Clients', value: '342', change: '+15%' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500">{stat.label}</p>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-green-400">{stat.change}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI & Automation */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Brain size={14} />
              AI & Automation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Future is <span className="gradient-text">Intelligent</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Harness the power of artificial intelligence and automation to transform your business operations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI Chatbot', desc: 'Intelligent customer support that works 24/7, handling queries and providing instant responses.' },
              { icon: '🧠', title: 'AI Business Assistant', desc: 'Your business data meets AI — get insights, predictions and recommendations.' },
              { icon: '📄', title: 'Document Intelligence', desc: 'Automatically process invoices, PDFs, forms, contracts and reports.' },
              { icon: '✍️', title: 'AI Content Studio', desc: 'Generate social posts, blogs, product descriptions and marketing content.' },
              { icon: '🎯', title: 'AI Agents', desc: 'Industry-specific autonomous agents that handle complex workflows.' },
              { icon: '⚡', title: 'Workflow Automation', desc: 'Connect your website, CRM, ERP, email, SMS, WhatsApp and accounting.' },
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
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/ai-automation" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all">
              Explore AI Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Solutions for <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We deliver industry-specific solutions tailored to the unique needs of each sector.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: ShoppingBag, name: 'Retail', color: 'from-blue-500 to-blue-600' },
              { icon: Truck, name: 'Distribution', color: 'from-green-500 to-green-600' },
              { icon: Factory, name: 'Manufacturing', color: 'from-orange-500 to-orange-600' },
              { icon: GraduationCap, name: 'Education', color: 'from-purple-500 to-purple-600' },
              { icon: Heart, name: 'Healthcare', color: 'from-red-500 to-red-600' },
              { icon: Building2, name: 'Hospitality', color: 'from-pink-500 to-pink-600' },
              { icon: Truck, name: 'Logistics', color: 'from-cyan-500 to-cyan-600' },
              { icon: Users, name: 'Cooperatives', color: 'from-indigo-500 to-indigo-600' },
              { icon: Shield, name: 'Government', color: 'from-yellow-500 to-yellow-600' },
              { icon: Heart, name: 'NGO/INGO', color: 'from-teal-500 to-teal-600' },
              { icon: Server, name: 'Construction', color: 'from-amber-500 to-amber-600' },
              { icon: Cpu, name: 'Agriculture', color: 'from-lime-500 to-lime-600' },
            ].map((industry, i) => (
              <motion.div
                key={industry.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group p-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all cursor-pointer text-center"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <industry.icon size={20} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{industry.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/industries" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              View All Industries <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready-to-deploy software products built for businesses like yours.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'ERP Pro', desc: 'Complete business management', icon: Database, color: 'from-blue-500 to-blue-600' },
              { name: 'CRM Plus', desc: 'Customer relationship management', icon: Users, color: 'from-purple-500 to-purple-600' },
              { name: 'Smart POS', desc: 'Point of sale system', icon: Monitor, color: 'from-green-500 to-green-600' },
              { name: 'EduManager', desc: 'School management system', icon: GraduationCap, color: 'from-orange-500 to-orange-600' },
              { name: 'MediCare', desc: 'Hospital management', icon: Heart, color: 'from-red-500 to-red-600' },
              { name: 'LogiTrack', desc: 'Logistics management', icon: Truck, color: 'from-cyan-500 to-cyan-600' },
              { name: 'ShopOnline', desc: 'E-commerce platform', icon: ShoppingBag, color: 'from-pink-500 to-pink-600' },
              { name: 'AI Suite', desc: 'AI-powered tools', icon: Brain, color: 'from-indigo-500 to-indigo-600' },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group p-5 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                  <product.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{product.desc}</p>
                <Link to="/products" className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors">
                  Learn More <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dynamics of Tech */}
      <section className="py-24 bg-dark relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why <span className="gradient-text">Dynamics of Tech</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine local expertise with global technology standards to deliver exceptional results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Result-Oriented', desc: 'Every solution is designed to deliver measurable business outcomes.' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'Agile methodology ensures rapid development and deployment.' },
              { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security and 99.9% uptime guarantee.' },
              { icon: '🤝', title: 'Dedicated Support', desc: '24/7 support with dedicated account managers.' },
              { icon: '💡', title: 'Innovation First', desc: 'We leverage the latest technologies including AI and cloud.' },
              { icon: '🌐', title: 'Scalable Solutions', desc: 'Built to grow with your business from startup to enterprise.' },
              { icon: '💰', title: 'Cost Effective', desc: 'Premium quality solutions at competitive prices.' },
              { icon: '🏆', title: 'Proven Track Record', desc: '100+ successful projects across multiple industries.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl bg-gray-900/30 border border-gray-800/50 text-center"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven process ensures every project is delivered on time, on budget, and beyond expectations.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { step: '01', label: 'Discover' },
              { step: '02', label: 'Analyze' },
              { step: '03', label: 'Design' },
              { step: '04', label: 'Develop' },
              { step: '05', label: 'Test' },
              { step: '06', label: 'Deploy' },
              { step: '07', label: 'Support' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold gradient-text">{item.step}</span>
                </div>
                <span className="text-sm font-medium text-gray-300">{item.label}</span>
                {i < 6 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Rajesh Sharma', company: 'Sharma Trading Pvt Ltd', text: 'Dynamics of Tech transformed our entire business operations with their ERP solution. The team is professional and delivers on time.' },
              { name: 'Sita Gurung', company: 'Pokhara Education Center', text: 'The school management system has made our administration so much easier. Parents love the transparency it provides.' },
              { name: 'Bikash Thapa', company: 'Himalayan Logistics', text: 'Their logistics tracking system has improved our delivery efficiency by 40%. Excellent support and ongoing maintenance.' },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technologies We <span className="gradient-text">Use</span>
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Node.js', 'Python', 'Django', 'PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Flutter', 'React Native', 'TypeScript', 'Tailwind CSS', 'Odoo', 'TensorFlow', 'OpenAI'].map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              From a simple business website to a complete enterprise platform, Dynamics of Tech designs, develops and delivers technology that helps organizations work smarter, grow faster and compete in a digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                Start Your Digital Transformation <ArrowRight size={18} />
              </Link>
              <a
                href="tel:9856071715"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Talk to an Expert <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
