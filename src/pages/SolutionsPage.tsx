import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Users, Monitor, Calculator, GraduationCap, Heart, Truck, ShoppingBag, Brain, Code, ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const solutions = [
  { id: 'erp', icon: Database, title: 'ERP Software', color: 'from-blue-500 to-blue-600', desc: 'Complete enterprise resource planning with accounting, sales, inventory, HR, manufacturing and more.', modules: ['Accounting', 'Sales & CRM', 'Purchase', 'Inventory', 'Manufacturing', 'HR & Payroll', 'POS', 'E-Commerce'] },
  { id: 'crm', icon: Users, title: 'CRM Software', color: 'from-purple-500 to-purple-600', desc: 'Manage customer relationships, sales pipeline, marketing campaigns and support tickets.', modules: ['Lead Management', 'Sales Pipeline', 'Customer 360', 'Email Marketing', 'Support Tickets', 'Reporting'] },
  { id: 'pos', icon: Monitor, title: 'POS System', color: 'from-green-500 to-green-600', desc: 'Fast, reliable point-of-sale system for retail, restaurants and service businesses.', modules: ['Sales Terminal', 'Inventory Sync', 'Multi-Store', 'Barcode Scanning', 'Receipt Printing', 'Reports'] },
  { id: 'accounting', icon: Calculator, title: 'Accounting Software', color: 'from-orange-500 to-orange-600', desc: 'Comprehensive accounting with invoicing, expenses, tax compliance and financial reporting.', modules: ['Invoicing', 'Expenses', 'Bank Reconciliation', 'Tax Reports', 'Financial Statements', 'Budgeting'] },
  { id: 'school', icon: GraduationCap, title: 'School Management', color: 'from-cyan-500 to-cyan-600', desc: 'Complete school ERP with admission, attendance, exams, fees, LMS and parent portal.', modules: ['Admission', 'Attendance', 'Exam Management', 'Fee Collection', 'LMS', 'Parent Portal'] },
  { id: 'hospital', icon: Heart, title: 'Hospital Management', color: 'from-red-500 to-red-600', desc: 'Integrated hospital information system with patient records, appointments, billing and pharmacy.', modules: ['Patient Records', 'Appointments', 'Billing', 'Pharmacy', 'Lab Reports', 'Insurance'] },
  { id: 'logistics', icon: Truck, title: 'Logistics Management', color: 'from-indigo-500 to-indigo-600', desc: 'End-to-end logistics with shipment tracking, delivery management, fleet and billing.', modules: ['Shipment Tracking', 'Delivery Management', 'Fleet Management', 'Route Planning', 'Billing', 'Analytics'] },
  { id: 'ecommerce', icon: ShoppingBag, title: 'E-Commerce Platform', color: 'from-pink-500 to-pink-600', desc: 'Full-featured online store with product management, payments, shipping and analytics.', modules: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management', 'Shipping', 'Analytics'] },
  { id: 'ai', icon: Brain, title: 'AI Solutions', color: 'from-violet-500 to-violet-600', desc: 'AI-powered solutions including chatbots, document processing, content generation and automation.', modules: ['AI Chatbot', 'Document AI', 'Content Generation', 'Business Assistant', 'AI Agents', 'Automation'] },
  { id: 'custom', icon: Code, title: 'Custom Software', color: 'from-teal-500 to-teal-600', desc: 'Bespoke software solutions designed and built specifically for your business requirements.', modules: ['Business Systems', 'Workflow Apps', 'Government Systems', 'API Development', 'Integration', 'Consulting'] },
];

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              Our Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Technology Solutions for <span className="gradient-text">Every Need</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              From ERP and business management to AI and custom software — discover solutions designed to transform how your organization operates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-5`}>
                  <solution.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{solution.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {solution.modules.map((mod) => (
                    <span key={mod} className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-white/5 text-gray-400 rounded-md border border-white/5">
                      <CheckCircle2 size={10} className="text-blue-400" />
                      {mod}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Request Demo <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Deep Dive */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">ERP Implementation <span className="gradient-text">Process</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our proven 11-step methodology ensures successful ERP deployment.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Discovery', 'Business Analysis', 'Solution Design', 'Configuration',
              'Customization', 'Data Migration', 'Integration', 'Testing',
              'Training', 'Go-Live', 'Support'
            ].map((step, i) => (
              <motion.div key={step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
                <div className="text-2xl font-bold gradient-text mb-2">{String(i + 1).padStart(2, '0')}</div>
                <span className="text-sm text-gray-300 font-medium">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Not Sure Which Solution You Need?</h2>
            <p className="text-gray-400 mb-8">Our experts will analyze your business and recommend the perfect solution.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
