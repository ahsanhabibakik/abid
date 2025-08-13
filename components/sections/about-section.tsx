"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Plane, Heart, Trophy, Waves, Palette } from "lucide-react";

export function AboutSection() {
  const interests = [
    {
      icon: Building2,
      title: "Business & Entrepreneurship",
      description: "Building innovative solutions and leading successful ventures with a focus on sustainable growth and positive impact."
    },
    {
      icon: Plane,
      title: "Travel & Adventure",
      description: "Exploring diverse cultures and landscapes around the world, always seeking new experiences and perspectives."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Committed to maintaining physical and mental well-being through balanced nutrition and regular exercise."
    },
    {
      icon: Trophy,
      title: "Marathon Running",
      description: "Passionate long-distance runner who finds meditation in motion and loves the challenge of pushing limits."
    },
    {
      icon: Waves,
      title: "Swimming",
      description: "Finding peace and strength in the water, swimming is both my workout and my way to connect with nature."
    },
    {
      icon: Palette,
      title: "Design & Creativity",
      description: "Creating visually appealing designs and artwork that tell stories and connect with people emotionally."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I&apos;m a multi-passionate individual who believes in living life fully. 
            My journey spans across business, adventure, fitness, and creativity, 
            each aspect enriching the others and helping me grow as a person.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-brand-leaf/10 rounded-lg mr-4">
                  <interest.icon className="h-6 w-6 text-brand-leaf" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {interest.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              My Philosophy
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I believe that life is meant to be lived with purpose, passion, and balance. 
              Whether I&apos;m developing a business strategy, training for a marathon, exploring a new country, 
              or creating a design, I approach everything with dedication and enthusiasm. 
              My diverse interests complement each other—the discipline from athletics enhances my business focus, 
              travel broadens my creative perspective, and health consciousness keeps me energized for all my pursuits.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}