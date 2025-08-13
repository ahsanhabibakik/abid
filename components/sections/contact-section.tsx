"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mir.abid.hasan@example.com",
      href: "mailto:mir.abid.hasan@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1234 567890",
      href: "tel:+8801234567890"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/mirabidhasan",
      color: "hover:text-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mirabidhasan",
      color: "hover:text-blue-700"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/mirabidhasan",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/mirabidhasan",
      color: "hover:text-pink-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mirabidhasan",
      color: "hover:text-gray-600"
    }
  ];

  const businessFacebook = {
    name: "Mir Abid Hasan Business",
    description: "Follow my business journey and insights",
    href: "https://facebook.com/mirabidhasanbusiness"
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you want to discuss business opportunities, share travel stories, 
            talk about fitness goals, or collaborate on creative projects, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-foreground hover:text-brand-leaf transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Social Media
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-lg border border-brand-200 hover:border-brand-leaf transition-colors ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-brand-200">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Business Facebook Page
              </h4>
              <p className="text-muted-foreground mb-4">
                {businessFacebook.description}
              </p>
              <Button variant="outline" asChild>
                <a
                  href={businessFacebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Follow Business Page
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-brand-200"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-brand-300 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-brand-300 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-brand-300 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell me about your project, idea, or just say hello!"
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}