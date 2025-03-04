import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Map from "@/components/Map";
import { LineChart, BarChart2, Zap, Heart, Shield, Leaf, Target } from 'lucide-react';

const WhyImplementSection = () => {
  const benefits = [
    {
      title: "Real-Time Monitoring",
      description: "Track waste collection, processing, and asset utilization in real-time across all facilities",
      icon: LineChart,
    },
    {
      title: "Performance Analytics",
      description: "Data-driven insights to optimize resource allocation and improve operational efficiency",
      icon: BarChart2,
    },
    {
      title: "Quick Response",
      description: "Rapid response system for maintenance requests and emergency situations",
      icon: Zap,
    },
    {
      title: "Community Impact",
      description: "Improved waste management services leading to cleaner, healthier communities",
      icon: Heart,
    },
    {
      title: "Compliance Management",
      description: "Ensure adherence to environmental regulations and waste management standards",
      icon: Shield,
    },
    {
      title: "Sustainability Goals",
      description: "Track and achieve environmental sustainability targets effectively",
      icon: Leaf,
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Target className="w-4 h-4" />
              <span>Why Choose Our Platform?</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Smart Solutions for Efficient Waste Management</h2>
              <p className="text-muted-foreground">
                Our integrated platform offers comprehensive tools for managing Goa's waste management infrastructure,
                helping authorities make data-driven decisions and optimize resource utilization.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="group transition-all hover:shadow-md border-primary/10">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:sticky lg:top-24">
            <div className="space-y-4 mb-6">
              <h2 className="text-3xl font-bold">Asset Distribution</h2>
              <p className="text-muted-foreground">
                Interactive map showing waste management facilities and assets across Goa
              </p>
            </div>
            <Card className="overflow-hidden transition-all hover:shadow-xl border-primary/10">
              <CardContent className="p-0">
                <div className="h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
                  <Map />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImplementSection;