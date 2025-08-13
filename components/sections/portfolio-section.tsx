"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "design", label: "Design" },
    { id: "business", label: "Business" },
    { id: "artwork", label: "Artwork" }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity including logo, colors, and typography for a tech startup.",
      image: "/placeholder-portfolio.jpg",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "business",
      description: "Built and launched a successful e-commerce platform serving thousands of customers.",
      image: "/placeholder-portfolio.jpg",
      tags: ["E-commerce", "Business Strategy", "Growth"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Digital Art Collection",
      category: "artwork",
      description: "A series of digital artworks exploring themes of travel and cultural diversity.",
      image: "/placeholder-portfolio.jpg",
      tags: ["Digital Art", "Cultural Themes", "Travel"],
      link: "#",
      github: null
    },
    {
      id: 4,
      title: "Mobile App UI/UX",
      category: "design",
      description: "User interface and experience design for a fitness tracking mobile application.",
      image: "/placeholder-portfolio.jpg",
      tags: ["UI/UX", "Mobile Design", "Fitness"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Consulting Agency",
      category: "business",
      description: "Founded and scaled a business consulting agency specializing in digital transformation.",
      image: "/placeholder-portfolio.jpg",
      tags: ["Consulting", "Digital Transformation", "Scaling"],
      link: "#",
      github: null
    },
    {
      id: 6,
      title: "Abstract Photography",
      category: "artwork",
      description: "Photography series capturing abstract moments from marathon running and swimming.",
      image: "/placeholder-portfolio.jpg",
      tags: ["Photography", "Sports", "Abstract"],
      link: "#",
      github: null
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-brand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of my work spanning business ventures, design projects, and creative artwork. 
            Each project represents my passion for excellence and innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="px-6"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-brand-200 hover:shadow-lg hover:border-brand-300 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-brand-mint/40 to-brand-meadow/40 flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-brand-deep/60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-brand-mint/60 text-brand-deep text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                  {item.github && (
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <Button size="lg" className="px-8">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}