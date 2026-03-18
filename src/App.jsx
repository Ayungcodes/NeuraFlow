// eslint-disable-next-line
import { motion } from "framer-motion";
import { useState } from "react";

import AIDemo from "./components/AIDemo";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logos = [
    "/images/Notion_Logo_1.png",
    "/images/shopify_logo_white.png",
    "/images/icons8-slack-96.png",
    "/images/Airbnb_Logo_1.png",
    "/images/idYTUpGPhj_1773693311577.png",
  ];

  const features = [
    {
      title: "AI Automation",
      desc: "Automate repetitive workflows and tasks using powerful AI tools.",
    },
    {
      title: "Real-Time Analytics",
      desc: "Track performance and insights instantly with dynamic dashboards.",
    },
    {
      title: "API Integrations",
      desc: "Connect your tools seamlessly with powerful API integrations.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      image: "/images/Micheal Smith.jpg",
      name: "Micheal Smith",
      position: "CTO at NexaTech",
      text: "Working with this platform has completely streamlined our workflow. The insights we’ve gained have been invaluable for scaling our operations.",
    },
    {
      id: 2,
      image: "/images/Jessica Lawrence.jpg",
      name: "Jessica Lawrence",
      position: "Head of Marketing at LuminaCorp",
      text: "The user experience is phenomenal. It’s made onboarding new team members effortless and improved our productivity across the board.",
    },
    {
      id: 3,
      image: "/images/Ashley Stephens.jpg",
      name: "Ashley Stephens",
      position: "Product Manager at Horizon Solutions",
      text: "I’ve never seen a tool that’s this intuitive and effective. It’s helped our team hit targets faster and with more precision.",
    },
  ];

  return (
    <>
      {/* navbar */}
      <nav className="w-full fixed top-0 left-0 bg-black/70 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* logo */}
          <a
            href="#"
            className="text-xl font-bold text-white cursor-pointer duration-300 transition-opacity hover:opacity-70"
          >
            Neura<span className="text-purple-500">Flow</span>
          </a>

          {/* desktop nav links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>

          {/* CTA btn */}
          <button className="hidden md:block bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-lg cursor-pointer">
            Get Started
          </button>

          {/* hamburger btn */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`
    group relative block md:hidden
    w-10 h-10
    cursor-pointer
    z-999999
    rounded-full
    transition-transform duration-300 shadow-md
    ${menuOpen ? "hover:rotate-[90deg]" : ""}
  `}
          >
            <span
              className={`
      absolute left-1/2 top-1/2
      h-[1.5px] md:h-[2px] w-7 md:w-10 rounded-full
      transition-all duration-300 ease-in-out
      -translate-x-1/2 -translate-y-1/2 bg-white
      ${menuOpen ? "rotate-45" : "-translate-y-[5px] md:-translate-y-[6.5px] duration-300 group-hover:bg-stone-100"}
    `}
            />

            <span
              className={`
      absolute left-1/2 top-1/2
      h-[1.5px] md:h-[2px] w-7 md:w-10 rounded-full
      transition-all duration-300 ease-in-out
      -translate-x-1/2 -translate-y-1/2 bg-white
      ${menuOpen ? "-rotate-45" : "translate-y-[5px] bg md:translate-y-[6.5px] duration-300 group-hover:bg-stone-100"}
    `}
            />
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-black border-t border-gray-800 px-6 pb-6 pt-3"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col gap-4 text-gray-300"
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="hover:text-white"
              >
                Features
              </motion.li>

              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="hover:text-white"
              >
                Pricing
              </motion.li>

              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="hover:text-white"
              >
                Testimonials
              </motion.li>

              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="hover:text-white"
              >
                FAQ
              </motion.li>

              <motion.button
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-lg mt-2 cursor-pointer"
              >
                Get Started
              </motion.button>
            </motion.ul>
          </motion.div>
        )}
      </nav>

      {/* hero section */}
      <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden py-36">
        {/* glow bg */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full top-[-200px]" />

        {/* heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Automate Your Workflow <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            With AI
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          NeuraFlow helps teams automate tasks, analyze data and unlock
          productivity using powerful AI tools.
        </p>

        {/* CTA btn */}
        <div className="mt-8 flex gap-4">
          <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500 cursor-pointer">
            Get Started
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 cursor-pointer">
            Live Demo
          </button>
        </div>

        {/* dashboard */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-20 w-full max-w-4xl"
        >
          <img
            src="/images/dashboard2.webp"
            alt="dashboard"
            className="rounded-xl shadow-2xl border border-gray-800"
          />
        </motion.div>
      </section>

      {/* trusted by section */}
      <section className="py-14 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm uppercase tracking-widest"
          >
            Trusted by teams worldwide
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-10 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="company logo"
                className="h-6 mx-auto opacity-60 hover:opacity-100 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 0.6, y: 0 },
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* features section */}
      <section className="py-28 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Powerful Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto"
          >
            Everything you need to automate workflows, analyze data, and scale
            your productivity with AI.
          </motion.p>

          {/* Feature Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-purple-500 transition"
              >
                <div className="text-purple-400 text-3xl mb-4">⚡</div>

                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* demo section */}
      <AIDemo />

      {/* product preview section */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Powerful Dashboard <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                Built for Insight
              </span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-md">
              Visualize your data, track performance, and make smarter decisions
              with our beautifully designed analytics dashboard.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Real-time analytics</li>
              <li>✔ AI-powered insights</li>
              <li>✔ Clean, intuitive UI</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Dashboard />

            <div className="absolute inset-0 bg-purple-600/10 blur-2xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* pricing section */}
      <Pricing />

      {/* testimonials section */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
          {testimonials.map((testimonial) => (
            <div
              className="flex flex-col items-center justify-between bg-gray-900 border border-gray-800 p-8 rounded-xl max-w-sm mx-auto text-center"
              key={testimonial.id}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full h-24 w-24 object-cover border-2 border-gray-700"
              />
              <p className="mt-4 text-gray-300 text-base leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="mt-4 text-sm font-semibold text-gray-200">
                {testimonial.name}
              </p>
              <p className="text-xs text-gray-400">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <FAQ />

      {/* CTA */}
      <section className="relative py-32 bg-black text-white text-center overflow-hidden">
        {/* glow bg */}
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] top-0 left-1/2 -translate-x-1/2" />

        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Start Automating Your Workflow Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4"
          >
            Join thousands of teams using NeuraFlow to boost productivity and
            unlock smarter insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 cursor-pointer">
              Get Started
            </button>

            <button className="px-8 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 cursor-pointer">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-black text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-white text-xl font-bold">
              Neura<span className="text-purple-500">Flow</span>
            </h2>
            <p className="mt-4 text-sm">
              AI-powered workflow automation and analytics for modern teams.
            </p>
          </div>

          {/* product */}
          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* newsletter */}
          <div>
            <h3 className="text-white mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Get product updates and AI insights.</p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-900 border border-gray-800 rounded-l-lg focus:outline-none"
              />
              <button className="px-4 bg-purple-600 rounded-r-lg hover:bg-purple-500 text-white cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-gray-800 text-center py-6 text-sm">
          © {new Date().getFullYear()} NeuraFlow. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
