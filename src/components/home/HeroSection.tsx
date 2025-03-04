import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Building2, Factory, BarChart2, Settings } from "lucide-react";

const HeroSection = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Building2,
      text: "Asset Management"
    },
    {
      icon: Factory,
      text: "Infrastructure Monitoring"
    },
    {
      icon: BarChart2,
      text: "Performance Analytics"
    },
    {
      icon: Settings,
      text: "Maintenance Control"
    }
  ];

  return (
    <section className="pt-24 lg:pt-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-green-50 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent" />
      
      <div className="container px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium">
              <Building2 className="w-4 h-4" />
              <span>Centralized Asset Management</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-green-600 leading-tight">
              Streamlined Waste Infrastructure Asset Management Platform
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-gray-600">
              Empowering Goa's Waste Management Through Strategic Asset Control
            </p>
            
            <p className="text-gray-500 max-w-3xl mx-auto text-lg">
              A comprehensive platform for tracking, managing, and optimizing waste management infrastructure, 
              facilities, and equipment across Goa's municipalities and panchayats.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 py-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm border border-green-100"
                >
                  <feature.icon className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-lg h-12 px-8"
                asChild
              >
                <Link to={user ? "/dashboard" : "/login"}>
                  {user ? "View Dashboard" : "Access Asset Portal"}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};

export default HeroSection;