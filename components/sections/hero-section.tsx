"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-foreground"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mir Abid Hasan
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Entrepreneur, Adventurer, Designer & Athlete
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Based in Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Available for new opportunities</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Passionate about building businesses, exploring the world, staying healthy through marathons and swimming, 
              and creating beautiful designs. I believe in living life to the fullest while making a positive impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="text-lg px-8 py-6"
              >
                Learn More About Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="text-lg px-8 py-6"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/60 to-primary/60 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-xl bg-card flex items-center justify-center border-2 border-border">
                  <span className="text-6xl">👨‍💼</span>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              >
                <ArrowDown className="h-8 w-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}