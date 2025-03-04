import React from 'react';
import { Building2, Truck, Factory, Recycle, Scale, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AssetManagementSection = () => {
  const { user } = useAuth();
  
  const assetCategories = [
    {
      title: "Treatment Plants",
      description: "Solid Waste Processing Units, Material Recovery Facilities (MRF), and Composting Centers",
      icon: Factory,
      stats: "12 Facilities",
    },
    {
      title: "Collection Centers",
      description: "Waste Segregation Points, Transfer Stations, and Storage Facilities",
      icon: Building2,
      stats: "45+ Centers",
    },
    {
      title: "Vehicle Fleet",
      description: "Garbage Trucks, Waste Collection Vehicles, and Street Sweeping Machines",
      icon: Truck,
      stats: "120+ Vehicles",
    },
    {
      title: "Composting Units",
      description: "Community Composting Centers and Bio-methanation Plants",
      icon: Recycle,
      stats: "25 Units",
    },
    {
      title: "Weighbridges",
      description: "Electronic Weighing Stations for Waste Quantification",
      icon: Scale,
      stats: "15 Bridges",
    },
    {
      title: "Green Zones",
      description: "Landfill Sites, Buffer Zones, and Environmental Protection Areas",
      icon: Trees,
      stats: "8 Zones",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Integrated Asset Management</h2>
          <p className="text-muted-foreground">
            A comprehensive system to monitor and manage Goa's waste management infrastructure,
            ensuring efficient operations and sustainable waste handling
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assetCategories.map((category) => (
            <Card key={category.title} className="group transition-all hover:shadow-lg border-primary/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="flex items-center justify-between">
                  {category.title}
                  <span className="text-sm font-normal text-muted-foreground">
                    {category.stats}
                  </span>
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="secondary" 
                  className="w-full group-hover:bg-primary/10 transition-colors"
                  asChild
                >
                  <Link to={user ? "/dashboard/assets" : "/login"}>
                    {user ? "View Details" : "Sign in to Access"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetManagementSection;