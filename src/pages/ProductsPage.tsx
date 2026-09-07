import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Users, Monitor, GraduationCap, Heart, Truck, ShoppingBag, Brain, Calculator, Layers, ArrowRight, Star } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const products = [
  { name: 'DynamicsERP', category: 'ERP', icon: Database, color: 'from-blue-500 to-blue-600', desc: 'Complete enterprise resource planning for businesses of all sizes.', features: ['Multi-Company', 'Multi-Currency', '16+ Modules', 'Cloud/On-Premise'], rating: 4.9 },
  { name: 'DynamicsCRM', category: 'CRM', icon: Users, color: 'from-purple-500 to-purple-600', desc: 'Customer relationship management with sales, marketing and support.', features: ['Lead Tracking', 'Pipeline Mgmt', 'Email Integration', 'Analytics'], rating: 4.8 },
  { name: 'SmartPOS', category: 'POS', icon: Monitor, color: 'from-green-500 to-green-600', desc: 'Fast and reliable point-of-sale for retail and hospitality.', features: ['Touch Interface', 'Barcode Scan', 'Multi-Store', 'Offline Mode'], rating: 4.9 },
  { name: 'EduManager', category: 'Education', icon: GraduationCap, color: 'from-cyan-500 to-cyan-600', desc: 'Complete school and college management system.', features: ['Admission', 'Exam System', 'Fee Mgmt', 'Parent Portal'], rating: 4.7 },
  { name: 'MediCare HMS', category: 'Healthcare', icon: Heart, color: 'from-red-500 to-red-600', desc: 'Hospital management with EMR, billing and pharmacy.', features: ['Patient Records', 'Appointments', 'Pharmacy', 'Lab Integration'], rating: 4.8 },
  { name: 'LogiTrack', category: 'Logistics', icon: Truck, color: 'from-indigo-500 to-indigo-600', desc: 'End-to-end logistics and delivery management.', features: ['GPS Tracking', 'Route Planning', 'Fleet Mgmt', 'Proof of Delivery'], rating: 4.7 },
  { name: 'ShopOnline', category: 'E-Commerce', icon: ShoppingBag, color: 'from-pink-500 to-pink-600', desc: 'Full-featured e-commerce and multi-vendor marketplace.', features: ['Product Catalog', 'Payment Gateway', 'Multi-Vendor', 'Analytics'], rating: 4.8 },
  { name: 'AI Suite', category: 'AI', icon: Brain, color: 'from-violet-500 to-violet-600', desc: 'AI-powered tools for business automation and intelligence.', features: ['Chatbot', 'Document AI', 'Content Gen', 'Predictions'], rating: 4.9 },
  { name: 'AccuBooks', category: 'Accounting', icon: Calculator, color: 'from-orange-500 to-orange-600', desc: 'Professional accounting with invoicing and tax compliance.', features: ['Invoicing', 'Expenses', 'Tax Reports', 'Bank Sync'], rating: 4.7 },
  { name: 'HR Plus', category: 'HR', icon: Layers, color: 'from-teal-500 to-teal-600', desc: 'Human resource management with payroll and attendance.', features: ['Employee Mgmt', 'Payroll', 'Attendance', 'Leave Mgmt'], rating: 4.6 },
];

export default function ProductsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Our Products
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready-to-Deploy <span className="gradient-text">Software Products</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Pre-built, customizable software products designed for businesses like yours. Get started quickly with proven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                    <product.icon size={24} className="text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-400">{product.rating}</span>
                  </div>
                </div>
                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">{product.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{product.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((f) => (
                    <span key={f} className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded border border-white/5">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/contact" className="flex-1 text-center px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600/30 transition-colors">
                    Request Demo
                  </Link>
                  <Link to="/contact" className="flex-1 text-center px-4 py-2 bg-white/5 text-gray-300 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
                    Get Quote
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Need a Custom Product?</h2>
            <p className="text-gray-400 mb-8">We can customize any of our products or build something entirely new for your business.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25">
              Start a Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
