import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Factory, GraduationCap, Heart, Building2, Server, Users, Shield, Cpu, Landmark, Sprout, ArrowRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const industries = [
  { icon: ShoppingBag, name: 'Retail', color: 'from-blue-500 to-blue-600', desc: 'POS, inventory management, accounting, CRM and e-commerce solutions for retail businesses.', solutions: ['POS System', 'Inventory', 'Accounting', 'CRM', 'E-Commerce', 'Loyalty Programs'] },
  { icon: Truck, name: 'Wholesale & Distribution', color: 'from-green-500 to-green-600', desc: 'Sales, distribution, inventory and dealer management for wholesale operations.', solutions: ['Sales Management', 'Distribution', 'Inventory', 'Dealer Management', 'Pricing', 'Reporting'] },
  { icon: Factory, name: 'Manufacturing', color: 'from-orange-500 to-orange-600', desc: 'Production planning, BOM, MRP, inventory control and quality management.', solutions: ['Production Planning', 'BOM Management', 'MRP', 'Quality Control', 'Inventory', 'Costing'] },
  { icon: GraduationCap, name: 'Education', color: 'from-purple-500 to-purple-600', desc: 'Student management, admission, attendance, exams, fees and learning management.', solutions: ['Student Info', 'Admission', 'Attendance', 'Exam System', 'Fee Management', 'LMS'] },
  { icon: Heart, name: 'Healthcare', color: 'from-red-500 to-red-600', desc: 'Patient records, appointments, billing, pharmacy, lab and insurance management.', solutions: ['Patient Records', 'Appointments', 'Billing', 'Pharmacy', 'Lab Management', 'Insurance'] },
  { icon: Building2, name: 'Hospitality', color: 'from-pink-500 to-pink-600', desc: 'Hotel management, restaurant POS, reservations, housekeeping and guest services.', solutions: ['Room Management', 'Restaurant POS', 'Reservations', 'Housekeeping', 'Guest Services', 'Revenue Mgmt'] },
  { icon: Truck, name: 'Logistics', color: 'from-cyan-500 to-cyan-600', desc: 'Shipment tracking, delivery management, fleet operations and route optimization.', solutions: ['Shipment Tracking', 'Delivery Mgmt', 'Fleet Operations', 'Route Planning', 'Billing', 'Analytics'] },
  { icon: Server, name: 'Construction', color: 'from-amber-500 to-amber-600', desc: 'Project management, procurement, inventory, subcontractor and cost tracking.', solutions: ['Project Mgmt', 'Procurement', 'Inventory', 'Cost Tracking', 'Subcontractors', 'Safety'] },
  { icon: Users, name: 'Cooperatives', color: 'from-indigo-500 to-indigo-600', desc: 'Member management, savings, loans, accounting and regulatory compliance.', solutions: ['Member Mgmt', 'Savings', 'Loans', 'Accounting', 'Reports', 'Compliance'] },
  { icon: Shield, name: 'NGO/INGO', color: 'from-teal-500 to-teal-600', desc: 'Project management, donor tracking, finance management and impact reporting.', solutions: ['Project Mgmt', 'Donor Tracking', 'Finance', 'Impact Reports', 'Grants', 'Compliance'] },
  { icon: Landmark, name: 'Government', color: 'from-yellow-500 to-yellow-600', desc: 'Citizen services, workflow automation, records management and public complaints.', solutions: ['Citizen Services', 'Workflow', 'Records', 'Complaints', 'Transparency', 'Digital ID'] },
  { icon: Sprout, name: 'Agriculture', color: 'from-lime-500 to-lime-600', desc: 'Farm management, production tracking, inventory, sales and supply chain.', solutions: ['Farm Mgmt', 'Production', 'Inventory', 'Sales', 'Supply Chain', 'Weather'] },
];

export default function IndustriesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              Industries We Serve
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Industry-Specific <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              We understand the unique challenges of each industry. Our solutions are tailored to meet sector-specific requirements and compliance standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{industry.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {industry.solutions.map((sol) => (
                    <span key={sol} className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded border border-white/5">
                      {sol}
                    </span>
                  ))}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Don't See Your Industry?</h2>
            <p className="text-gray-400 mb-8">We work with businesses across all sectors. Contact us to discuss your specific needs.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25">
              Discuss Your Requirements <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
