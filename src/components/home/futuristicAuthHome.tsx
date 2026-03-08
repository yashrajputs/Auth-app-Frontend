import { motion } from "framer-motion"
import { ShieldCheck, Lock, Fingerprint, Rocket, ArrowRight, CheckCircle2, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { NavLink } from "react-router"


function futuristicAuthHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-black dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
          
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Secure Your Future
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Modern authentication solution with enterprise-grade security.
              Fast, reliable, and built for scale.
            </p>
            <div className="flex gap-4 justify-center">
              
              <Button size="lg" className="rounded-xl">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            
              <Button size="lg" variant="outline" className="rounded-xl">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide cutting-edge authentication solutions that keep your
              platform and users safe.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Lightning Fast",
                desc: "Authenticate users in milliseconds with our optimized infrastructure.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8" />,
                title: "Bank-Level Security",
                desc: "Industry-leading encryption and security protocols protect your data.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "User Friendly",
                desc: "Seamless login experience that keeps your users happy and secure.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/60 border-slate-800 rounded-2xl p-6 h-full">
                  <div className="text-indigo-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="px-6 py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h3>
            <p className="text-gray-400 mb-6">
              We use end-to-end encryption, JWT-based authentication, and
              multi-factor verification to ensure your data stays protected at
              all times.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <ShieldCheck className="text-indigo-500" /> 256-bit Encryption
              </li>
              <li className="flex items-center gap-3">
                <Lock className="text-indigo-500" /> Secure Token System
              </li>
<li className="flex items-center gap-3">
                <Fingerprint className="text-indigo-600 dark:text-indigo-500" />
                Biometric Login
              </li>
            </ul>
          </div>
<Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Join the Future</h4>

            <div className="space-y-4">
              <Input placeholder="Enter your email" className="rounded-xl" />

              <Button className="w-full rounded-xl">
                Request Early Access
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-4xl font-bold mb-6">
            Ready to Secure Your Platform?
          </h3>
          <p className="text-gray-400 mb-8">
            Start building with our modern authentication system today.
          </p>
          <Button size="lg" className="rounded-2xl px-10">
            Launch Now <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
<footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-slate-500 dark:text-gray-500 text-sm">
        © {new Date().getFullYear()} AuthSecure. All rights reserved.
      </footer>
    </div>
  )
}
const features = [
  {
    title: "Multi-Factor Authentication",
    description:
      "Add an extra layer of security with OTP, biometrics, and device verification.",
    icon: ShieldCheck,
  },
  {
    title: "JWT & OAuth Ready",
    description:
      "Seamless integration with modern backend systems using JWT and OAuth 2.0.",
    icon: Lock,
  },
  {
    title: "Lightning Fast APIs",
    description:
      "Optimized authentication APIs ensuring minimal latency and high reliability.",
    icon: Rocket,
  },
]

export default futuristicAuthHome

