// components/cardContent.ts

// Types definition
export interface ServiceCard {
  id: string;
  title: string;
  icon: string;
  frontContent: string;
  backContent: string[];
  link: string;
  backgroundImage: string;
}

export interface IndustryCard {
  id: string;
  title: string;
  icon: string;
  items: string[];
  link: string;
  backgroundImage: string;
}

export interface TechnologyCard {
  id: string;
  title: string;
  icon: string;
  frontContent: string;
  backContent: string[];
  link: string;
  backgroundImage: string;
}

// Services data
export const services: ServiceCard[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    icon: "Lightbulb",
    frontContent: "Modernize your business operations with strategic digital initiatives",
    backContent: ["Legacy System Modernization", "Process Automation", "Cloud Migration", "Data-Driven Decision Making"],
    link: "/services/digital-transformation",
    backgroundImage:
      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    icon: "Cloud",
    frontContent: "Scalable, secure, and optimized cloud infrastructure and services",
    backContent: ["Multi-Cloud Strategy", "Cloud Security", "Serverless Architecture", "Cost Optimization"],
    link: "/services/cloud-solutions",
    backgroundImage:
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "Shield",
    frontContent: "Comprehensive security solutions to protect your digital assets",
    backContent: ["Risk Assessment", "Security Architecture", "Compliance Management", "Incident Response"],
    link: "/services/cybersecurity",
    backgroundImage:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Industries data
export const industries: IndustryCard[] = [
  {
    id: "healthcare-finance",
    title: "Healthcare & Finance Solutions",
    icon: "HeartPulse",
    items: ["Secure Patient Data Management", "Financial Compliance Solutions", "Healthcare Analytics", "Payment Processing Systems"],
    link: "/industries/healthcare-finance",
    backgroundImage: "/images/healthcare-bg.jpg"
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce Tech",
    icon: "ShoppingCart",
    items: ["Omnichannel Experience", "Inventory Management", "Customer Analytics", "Secure Payment Gateways"],
    link: "/industries/retail-ecommerce",
    backgroundImage: "/images/retail-bg.jpg"
  },
  {
    id: "manufacturing-logistics",
    title: "Manufacturing & Logistics Optimization",
    icon: "Factory",
    items: ["Supply Chain Visibility", "Predictive Maintenance", "Warehouse Automation", "Route Optimization"],
    link: "/industries/manufacturing-logistics",
    backgroundImage: "/images/manufacturing-bg.jpg"
  }
];

