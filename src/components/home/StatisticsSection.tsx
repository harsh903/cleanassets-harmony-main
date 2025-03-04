import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

const AnimatedNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCurrentValue(value);
        clearInterval(timer);
      } else {
        setCurrentValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {typeof value === 'number' && value % 1 !== 0
        ? currentValue.toFixed(1)
        : Math.round(currentValue)}
      {suffix}
    </span>
  );
};

const StatisticsSection = () => {
  const statistics = [
    { 
      label: "Waste Collection Coverage", 
      value: 98.5,
      suffix: "%",
      description: "Of total households"
    },
    { 
      label: "Daily Waste Generation", 
      value: 226.87,
      suffix: " TPD",
      description: "Tons per day"
    },
    { 
      label: "Waste Processing", 
      value: 197.47,
      suffix: " TPD",
      description: "Processed daily"
    },
    { 
      label: "Door-to-Door Collection", 
      value: 92.3,
      suffix: "%",
      description: "Coverage achieved"
    },
    { 
      label: "Waste Segregation", 
      value: 85.7,
      suffix: "%",
      description: "At source"
    },
    { 
      label: "Active Assets", 
      value: 205,
      suffix: "+",
      description: "Managed through platform"
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Impact Metrics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics showcasing Goa's progress in waste management and asset utilization
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <Card key={stat.label} className="p-6 text-center hover:bg-primary/5 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;