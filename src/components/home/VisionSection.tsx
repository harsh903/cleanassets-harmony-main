import React from 'react';
import { Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionSection = () => {
  const objectives = [
    "Achieve 100% waste segregation at source across all municipalities and panchayats",
    "Optimize resource allocation through real-time asset tracking and monitoring",
    "Reduce environmental impact through efficient waste management practices",
    "Enhance transparency and accountability in waste management operations",
    "Foster collaboration between government bodies and local authorities"
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Target className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            <h2 className="text-3xl font-bold">Building a Cleaner, Greener Goa</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're committed to revolutionizing Goa's waste management infrastructure through 
              cutting-edge technology and sustainable practices. Our platform serves as a 
              centralized hub for tracking, monitoring, and optimizing waste management assets 
              across the state.
            </p>
            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1" />
                      <p className="text-muted-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary/10 absolute -top-8 -right-8 w-64 h-64 blur-3xl" />
            <div className="aspect-square rounded-full bg-secondary/20 absolute -bottom-8 -left-8 w-64 h-64 blur-3xl" />
            <img 
              src="/api/placeholder/600/600"
              alt="Waste Management Vision"
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;