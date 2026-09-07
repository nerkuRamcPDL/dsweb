import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Globe, Smartphone, Database, Palette, Cloud, Shield, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const services = [
  {
    icon: Code, title: 'Software Development', color: 'from-blue-500 to-blue-600',
    desc: 'Custom software solutions designed and built from concept to deployment, tailored to your unique business requirements.',
    features: ['Custom Applications', 'Business Management Systems', 'Workflow Automation', 'API Development', 'System Integration', 'Legacy Modernization'],
  },
  {
    icon: Globe, title: 'Website Development', color: 'from-cyan-500 to-cyan-600',
    desc: 'Modern, responsive websites and web applications that engage users and drive business growth.',
    features: ['Corporate Websites', 'CMS Development', 'E-Commerce Platforms', 'Web Applications', 'Progressive Web Apps', 'SEO Optimization'],
  },
  {
    icon: Smartphone, title: 'Mobile App Development', color: 'from-green-500 to-green-600',
    desc: 'Native and cross-platform mobile applications for Android and iOS with modern frameworks.',
    features: ['Android Apps', 'iOS Apps', 'Flutter Development', 'React Native', 'Business Apps', 'Delivery & Service Apps'],
  },
  {
    icon: Database, title: 'ERP Implementation', color: 'from-purple-500 to-purple-600',
    desc: 'Complete ERP consulting, customization, data migration, integration, training and ongoing support.',
    features: ['Odoo Implementation', 'Custom Modules', 'Data Migration', 'System Integration', 'User Training', 'Ongoing Support'],
  },
  {
    icon: Settings, title: 'Odoo Services', color: 'from-orange-500 to-orange-600',
    desc: 'Expert Odoo ERP services from implementation to customization, integration and long-term support.',
    features: ['Odoo Setup & Config', 'Custom Module Dev', 'Third-party Integration', 'Version Migration', 'Performance Tuning', 'Admin Training'],
  },
  {
    icon: Palette, title: 'UI/UX Design', color: 'from-pink-500 to-pink-600',
    desc: 'User-centered design that creates intuitive, beautiful digital experiences across all platforms.',
    features: ['Product Design', 'Web Design', 'Dashboard Design', 'Mobile UX', 'Design Systems', 'Prototyping'],
  },
  {
    icon: Cloud, title: 'Cloud & DevOps', color: 'from-indigo-500 to-indigo-600',
    desc: 'Cloud infrastructure setup, deployment automation, monitoring and optimization for maximum reliability.',
    features: ['Cloud Deployment', 'VPS Management', 'Docker & Containers', 'CI/CD Pipelines', 'Backup & Recovery', 'Monitoring & Alerts'],
  },
  {
    icon: Shield, title: 'Cybersecurity', color: 'from-red-500 to-red-600',
    desc: 'Comprehensive security solutions to protect your business data and digital assets from threats.',
    features: ['Security Audits', 'Secure Development', 'Access Management', 'Data Encryption', 'Backup Solutions', 'Threat Monitoring'],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              End-to-End Technology <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              From custom software development to cloud infrastructure and cybersecurity, we provide comprehensive technology services to help your business thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                      <span className="text-xs text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Development <span className="gradient-text">Process</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A structured approach that ensures quality delivery at every stage.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business, goals and requirements.' },
              { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and architecture.' },
              { step: '03', title: 'Development', desc: 'Agile development with regular updates and demos.' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, training and ongoing support.' },
            ].map((item, i) => (
              <motion.div key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 text-center">
                <div className="text-3xl font-bold gradient-text mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-gray-400 mb-8">Tell us about your project and we'll provide a free consultation and quote.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
