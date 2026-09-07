import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Globe, Lightbulb, ArrowRight } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Building Digital Solutions for a <span className="gradient-text">Smarter Future</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Dynamics SofTech Computer Solution Pvt Ltd is a technology and software development company based in Pokhara, Nepal, delivering innovative software, ERP, AI, web, mobile, automation and digital transformation solutions for businesses, institutions and organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20">
              <Target size={32} className="text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses and organizations with cutting-edge technology solutions that drive efficiency, growth, and digital transformation. We are committed to delivering innovative, reliable, and scalable software that meets the unique needs of every client.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 to-purple-500/10 border border-purple-500/20">
              <Eye size={32} className="text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become Nepal's leading technology company and a trusted global partner for digital transformation, recognized for innovation, quality, and impact. We envision a future where every organization has access to world-class technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Core <span className="gradient-text">Values</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Excellence', desc: 'We strive for the highest quality in everything we deliver.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new technologies and creative solutions.' },
              { icon: Users, title: 'Collaboration', desc: 'We work closely with clients as true technology partners.' },
              { icon: Globe, title: 'Impact', desc: 'We build solutions that create lasting positive change.' },
            ].map((value, i) => (
              <motion.div key={value.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 text-center">
                <value.icon size={32} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '10+', label: 'Years Experience' },
              { value: '15+', label: 'Products Built' },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-400 mb-8">Let's discuss how we can help transform your business with technology.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
