export interface MenuItemType {
  id: number;
  title: string;
  description?: string;
  pageData?: string | Sections[];
  href?: string;
  image?: string;
  children?: MenuItemType[];
}
export interface Sections {
  id: number;
  title?: string;
  subTitle?: string;
  description?: string;
  sectionChildren: Sections[];
}
export const menuData: MenuItemType[] = [
  {
    id: 1,
    title: "HOME",
    pageData: [],
    description: "",
    href: "/"
  },
  {
    id: 6,
    title: "SERVICES",
    pageData: "",
    description: "Our comprehensive range of technology services",
    image: "https://placehold.co/200x200.jpg",
    children: [
      {
        id: 7,
        title: "Software Development",
        pageData: "",
        description: "Custom software solutions built for your business",
        image: "/images/menu/software-dev.jpg",
        children: [
          {
            id: 8,
            title: "Web Development",
            pageData: "",
            description: "",
            href: "/services/web-development"
          },
          {
            id: 9,
            title: "Mobile Development",
            pageData: "",
            description: "",
            href: "/services/mobile-development"
          },
          {
            id: 10,
            title: "SaaS Platforms",
            pageData: "",
            description: "",
            href: "/services/saas-platforms"
          },
          {
            id: 101,
            title: "API Integration",
            pageData: "",
            description: "",
            href: "/services/api-integration"
          },
          {
            id: 102,
            title: "Web 3.0",
            pageData: "",
            description: "",
            href: "/services/web3"
          },
          {
            id: 103,
            title: "Salesforce Solutions",
            pageData: "",
            description: "",
            href: "/services/salesforce"
          },
          {
            id: 104,
            title: "CMS Platforms",
            pageData: "",
            description: "",
            href: "/services/cms"
          },
          {
            id: 105,
            title: "Progressive Web Apps",
            pageData: "",
            description: "",
            href: "/services/pwa"
          },
          {
            id: 106,
            title: "Game Development",
            pageData: "",
            description: "",
            href: "/services/game-development"
          }
        ]
      },
      {
        id: 11,
        title: "Data and Analytics",
        pageData: "",
        description: "Transform your data into actionable insights",
        image: "/images/menu/data-analytics.jpg",
        children: [
          {
            id: 120,
            title: "Data Visualization",
            pageData: "",
            description: "",
            href: "/services/data-visualization"
          },
          {
            id: 130,
            title: "Predictive Analytics",
            pageData: "",
            description: "",
            href: "/services/predictive-analytics"
          },
          {
            id: 140,
            title: "Big Data",
            pageData: "",
            description: "",
            href: "/services/big-data"
          },
          {
            id: 141,
            title: "Machine Learning",
            pageData: "",
            description: "",
            href: "/services/machine-learning"
          },
          {
            id: 142,
            title: "Computer Vision",
            pageData: "",
            description: "",
            href: "/services/computer-vision"
          },
          {
            id: 143,
            title: "Data Cleansing",
            pageData: "",
            description: "",
            href: "/services/data-cleansing"
          },
          {
            id: 144,
            title: "Data Engineering",
            pageData: "",
            description: "",
            href: "/services/data-engineering"
          },
          {
            id: 145,
            title: "Data Migration Services",
            pageData: "",
            description: "",
            href: "/services/data-migration"
          }
        ]
      },
      {
        id: 15,
        title: "Cloud and DevOps",
        pageData: "",
        description: "Scalable infrastructure and seamless deployment",
        image: "/images/menu/cloud-devops.jpg",
        children: [
          {
            id: 151,
            title: "Cloud Solutions",
            pageData: "",
            description: "",
            href: "/services/cloud-solutions"
          },
          {
            id: 152,
            title: "Automation Services",
            pageData: "",
            description: "",
            href: "/services/automation"
          },
          {
            id: 153,
            title: "CI/CD Pipelines",
            pageData: "",
            description: "",
            href: "/services/cicd"
          },
          {
            id: 154,
            title: "Kubernetes Management",
            pageData: "",
            description: "",
            href: "/services/kubernetes"
          },
          {
            id: 155,
            title: "Docker Containers",
            pageData: "",
            description: "",
            href: "/services/docker"
          },
          {
            id: 156,
            title: "Cost Optimization",
            pageData: "",
            description: "",
            href: "/services/cost-optimization"
          },
          {
            id: 157,
            title: "Disaster Recovery",
            pageData: "",
            description: "",
            href: "/services/disaster-recovery"
          },
          {
            id: 158,
            title: "Serverless Computing",
            pageData: "",
            description: "",
            href: "/services/serverless"
          }
        ]
      },
      {
        id: 16,
        title: "Emerging Technologies",
        pageData: "",
        description: "Cutting-edge solutions for tomorrow's challenges",
        image: "/images/menu/emerging-tech.jpg",
        children: [
          {
            id: 162,
            title: "Blockchain Solutions",
            pageData: "",
            description: "",
            href: "/services/blockchain"
          },
          {
            id: 163,
            title: "Voice Technology",
            pageData: "",
            description: "",
            href: "/services/voice-tech"
          },
          {
            id: 164,
            title: "IoT Integration",
            pageData: "",
            description: "",
            href: "/services/iot"
          },
          {
            id: 165,
            title: "AI Personalization",
            pageData: "",
            description: "",
            href: "/services/ai-personalization"
          },
          {
            id: 166,
            title: "AR/VR Applications",
            pageData: "",
            description: "",
            href: "/services/ar-vr"
          },
          {
            id: 167,
            title: "Quantum Computing",
            pageData: "",
            description: "",
            href: "/services/quantum"
          },
          {
            id: 168,
            title: "Workflow AI",
            pageData: "",
            description: "",
            href: "/services/workflow-ai"
          }
        ]
      },
      {
        id: 17,
        title: "Creative and Design",
        pageData: "",
        description: "Visually stunning and user-focused design",
        image: "/images/menu/creative-design.jpg",
        children: [
          {
            id: 172,
            title: "Graphic Design",
            pageData: "",
            description: "",
            href: "/services/graphic-design"
          },
          {
            id: 173,
            title: "UX/UI Design",
            pageData: "",
            description: "",
            href: "/services/ux-ui"
          },
          {
            id: 174,
            title: "3D Modeling",
            pageData: "",
            description: "",
            href: "/services/3d-modeling"
          },
          {
            id: 175,
            title: "Motion Graphics",
            pageData: "",
            description: "",
            href: "/services/motion-graphics"
          },
          {
            id: 176,
            title: "Branding Services",
            pageData: "",
            description: "",
            href: "/services/branding"
          },
          {
            id: 177,
            title: "Infographic Design",
            pageData: "",
            description: "",
            href: "/services/infographics"
          }
        ]
      },
      {
        id: 18,
        title: "Digital Marketing",
        pageData: "",
        description: "Data-driven strategies for growth",
        image: "/images/menu/digital-marketing.jpg",
        children: [
          {
            id: 182,
            title: "SEO Services",
            pageData: "",
            description: "",
            href: "/services/seo"
          },
          {
            id: 183,
            title: "Social Media",
            pageData: "",
            description: "",
            href: "/services/social-media"
          },
          {
            id: 184,
            title: "Content Marketing",
            pageData: "",
            description: "",
            href: "/services/content-marketing"
          },
          {
            id: 185,
            title: "Email Campaigns",
            pageData: "",
            description: "",
            href: "/services/email-marketing"
          },
          {
            id: 186,
            title: "PPC Advertising",
            pageData: "",
            description: "",
            href: "/services/ppc"
          },
          {
            id: 187,
            title: "Analytics & Reporting",
            pageData: "",
            description: "",
            href: "/services/marketing-analytics"
          }
        ]
      }
    ]
  },
  {
    id: 500,
    title: "INDUSTRIES",
    pageData: "",
    description: "Specialized solutions for diverse sectors",
    image: "https://placehold.co/200x200.jpg",
    children: [
      {
        id: 501,
        title: "Healthcare & Life Sciences",
        pageData: "",
        description: "Transforming patient care through technology",
        image: "/images/menu/healthcare.jpg",
        children: [
          {
            id: 5011,
            title: "Regulatory Compliance",
            pageData: "",
            href: "/industries/healthcare/regulatory-compliance"
          },
          {
            id: 5012,
            title: "Data-Driven Care",
            pageData: "",
            href: "/industries/healthcare/data-driven-care"
          },
          {
            id: 5013,
            title: "Telehealth & IoT",
            pageData: "",
            href: "/industries/healthcare/telehealth-iot"
          },
          {
            id: 5014,
            title: "Cloud & DevOps for Healthcare",
            pageData: "",
            href: "/industries/healthcare/cloud-devops"
          },
          {
            id: 5015,
            title: "Medical Software Development",
            pageData: "",
            href: "/industries/healthcare/medical-software"
          }
        ]
      },
      {
        id: 502,
        title: "Financial Services",
        pageData: "",
        description: "Secure and innovative fintech solutions",
        image: "/images/menu/finance.jpg",
        children: [
          {
            id: 5021,
            title: "Security & Compliance",
            pageData: "",
            href: "/industries/finance/security-compliance"
          },
          {
            id: 5022,
            title: "Fraud Detection",
            pageData: "",
            href: "/industries/finance/fraud-detection"
          },
          {
            id: 5023,
            title: "FinTech Innovation",
            pageData: "",
            href: "/industries/finance/fintech-innovation"
          },
          {
            id: 5024,
            title: "Scalable Infrastructure",
            pageData: "",
            href: "/industries/finance/scalable-infrastructure"
          },
          {
            id: 5025,
            title: "Blockchain for Finance",
            pageData: "",
            href: "/industries/finance/blockchain"
          }
        ]
      },
      {
        id: 503,
        title: "Retail & E-Commerce",
        pageData: "",
        description: "Elevating the digital shopping experience",
        image: "/images/menu/retail.jpg",
        children: [
          {
            id: 5031,
            title: "E-Commerce Platforms",
            pageData: "",
            href: "/industries/retail/e-commerce-platforms"
          },
          {
            id: 5032,
            title: "Omnichannel Solutions",
            pageData: "",
            href: "/industries/retail/omnichannel"
          },
          {
            id: 5033,
            title: "Customer Analytics",
            pageData: "",
            href: "/industries/retail/customer-analytics"
          },
          {
            id: 5034,
            title: "Inventory Management",
            pageData: "",
            href: "/industries/retail/inventory-management"
          },
          {
            id: 5035,
            title: "Personalized Marketing",
            pageData: "",
            href: "/industries/retail/personalized-marketing"
          }
        ]
      },
      {
        id: 504,
        title: "Manufacturing",
        pageData: "",
        description: "Optimizing production through digital transformation",
        image: "/images/menu/manufacturing.jpg",
        children: [
          {
            id: 5041,
            title: "IoT & Automation",
            pageData: "",
            href: "/industries/manufacturing/iot-automation"
          },
          {
            id: 5042,
            title: "Supply Chain Security",
            pageData: "",
            href: "/industries/manufacturing/supply-chain"
          },
          {
            id: 5043,
            title: "Predictive Maintenance",
            pageData: "",
            href: "/industries/manufacturing/predictive-maintenance"
          },
          {
            id: 5044,
            title: "Digital Twins",
            pageData: "",
            href: "/industries/manufacturing/digital-twins"
          },
          {
            id: 5045,
            title: "Smart Factory Solutions",
            pageData: "",
            href: "/industries/manufacturing/smart-factory"
          }
        ]
      },
      {
        id: 505,
        title: "Education & E-Learning",
        pageData: "",
        description: "Innovative platforms for knowledge sharing",
        image: "/images/menu/education.jpg",
        children: [
          {
            id: 5051,
            title: "LMS Development",
            pageData: "",
            href: "/industries/education/lms-development"
          },
          {
            id: 5052,
            title: "Student Analytics",
            pageData: "",
            href: "/industries/education/student-analytics"
          },
          {
            id: 5053,
            title: "Virtual Classrooms",
            pageData: "",
            href: "/industries/education/virtual-classrooms"
          },
          {
            id: 5054,
            title: "Educational Apps",
            pageData: "",
            href: "/industries/education/educational-apps"
          },
          {
            id: 5055,
            title: "Interactive Learning",
            pageData: "",
            href: "/industries/education/interactive-learning"
          }
        ]
      },
      {
        id: 506,
        title: "Technology & SaaS",
        pageData: "",
        description: "Building the platforms of tomorrow",
        image: "/images/menu/technology.jpg",
        children: [
          {
            id: 5061,
            title: "Platform Architecture",
            pageData: "",
            href: "/industries/technology/platform-architecture"
          },
          {
            id: 5062,
            title: "Scalability Solutions",
            pageData: "",
            href: "/industries/technology/scalability"
          },
          {
            id: 5063,
            title: "API Development",
            pageData: "",
            href: "/industries/technology/api-development"
          },
          {
            id: 5064,
            title: "Multi-tenant Systems",
            pageData: "",
            href: "/industries/technology/multi-tenant"
          },
          {
            id: 5065,
            title: "SaaS Optimization",
            pageData: "",
            href: "/industries/technology/saas-optimization"
          }
        ]
      }
    ]
  },
  {
    id: 9000,
    title: "TECHNOLOGIES",
    pageData: "",
    description: "Expertise across leading technology stacks",
    image: "https://placehold.co/200x200.jpg",
    children: [
      {
        id: 9100,
        title: "Web Technologies",
        pageData: "",
        description: "Modern frameworks for powerful web applications",
        image: "/images/menu/web-tech.jpg",
        children: [
          {
            id: 9101,
            title: "React.js",
            pageData: "",
            href: "/technologies/reactjs",
            description: "Building interactive UIs with React"
          },
          {
            id: 9102,
            title: "Angular",
            pageData: "",
            href: "/technologies/angular",
            description: "Enterprise-grade applications with Angular"
          },
          {
            id: 9103,
            title: "Vue.js",
            pageData: "",
            href: "/technologies/vuejs",
            description: "Progressive web frameworks with Vue"
          },
          {
            id: 9104,
            title: "Node.js",
            pageData: "",
            href: "/technologies/nodejs",
            description: "Server-side JavaScript solutions"
          },
          {
            id: 9105,
            title: "Next.js",
            pageData: "",
            href: "/technologies/nextjs",
            description: "React framework for production"
          },
          {
            id: 9106,
            title: "PHP/Laravel",
            pageData: "",
            href: "/technologies/php-laravel",
            description: "Elegant web applications with Laravel"
          }
        ]
      },
      {
        id: 9200,
        title: "Mobile Technologies",
        pageData: "",
        description: "Cross-platform and native mobile development",
        image: "/images/menu/mobile-tech.jpg",
        children: [
          {
            id: 9201,
            title: "React Native",
            pageData: "",
            href: "/technologies/react-native",
            description: "Cross-platform mobile apps with React Native"
          },
          {
            id: 9202,
            title: "Flutter",
            pageData: "",
            href: "/technologies/flutter",
            description: "Beautiful native apps with Flutter"
          },
          {
            id: 9203,
            title: "iOS/Swift",
            pageData: "",
            href: "/technologies/ios-swift",
            description: "Native iOS development with Swift"
          },
          {
            id: 9204,
            title: "Android/Kotlin",
            pageData: "",
            href: "/technologies/android-kotlin",
            description: "Modern Android apps with Kotlin"
          },
          {
            id: 9205,
            title: "Progressive Web Apps",
            pageData: "",
            href: "/technologies/pwa",
            description: "Web apps with native-like experience"
          },
          {
            id: 9206,
            title: "Xamarin",
            pageData: "",
            href: "/technologies/xamarin",
            description: ".NET-powered cross-platform development"
          }
        ]
      },
      {
        id: 9300,
        title: "Cloud Technologies",
        pageData: "",
        description: "Infrastructure and deployment solutions",
        image: "/images/menu/cloud-tech.jpg",
        children: [
          {
            id: 9301,
            title: "AWS",
            pageData: "",
            href: "/technologies/aws",
            description: "Amazon Web Services solutions"
          },
          {
            id: 9302,
            title: "Azure",
            pageData: "",
            href: "/technologies/azure",
            description: "Microsoft Azure cloud services"
          },
          {
            id: 9303,
            title: "Google Cloud",
            pageData: "",
            href: "/technologies/google-cloud",
            description: "Google Cloud Platform expertise"
          },
          {
            id: 9304,
            title: "Kubernetes",
            pageData: "",
            href: "/technologies/kubernetes",
            description: "Container orchestration at scale"
          },
          {
            id: 9305,
            title: "Docker",
            pageData: "",
            href: "/technologies/docker",
            description: "Containerization for modern apps"
          },
          {
            id: 9306,
            title: "Serverless",
            pageData: "",
            href: "/technologies/serverless",
            description: "Event-driven cloud computing"
          }
        ]
      },
      {
        id: 9400,
        title: "Data Technologies",
        pageData: "",
        description: "Storage, processing, and analysis solutions",
        image: "/images/menu/data-tech.jpg",
        children: [
          {
            id: 9401,
            title: "PostgreSQL",
            pageData: "",
            href: "/technologies/postgresql",
            description: "Advanced open-source database"
          },
          {
            id: 9402,
            title: "MongoDB",
            pageData: "",
            href: "/technologies/mongodb",
            description: "NoSQL database for modern applications"
          },
          {
            id: 9403,
            title: "Redis",
            pageData: "",
            href: "/technologies/redis",
            description: "In-memory data structure store"
          },
          {
            id: 9404,
            title: "Elasticsearch",
            pageData: "",
            href: "/technologies/elasticsearch",
            description: "Distributed search and analytics"
          },
          {
            id: 9405,
            title: "Apache Kafka",
            pageData: "",
            href: "/technologies/kafka",
            description: "Real-time data streaming platform"
          },
          {
            id: 9406,
            title: "GraphQL",
            pageData: "",
            href: "/technologies/graphql",
            description: "API query language for modern apps"
          }
        ]
      },
      {
        id: 9500,
        title: "AI & Machine Learning",
        pageData: "",
        description: "Intelligent solutions for complex problems",
        image: "/images/menu/ai-ml.jpg",
        children: [
          {
            id: 9501,
            title: "TensorFlow",
            pageData: "",
            href: "/technologies/tensorflow",
            description: "End-to-end machine learning platform"
          },
          {
            id: 9502,
            title: "PyTorch",
            pageData: "",
            href: "/technologies/pytorch",
            description: "Research-focused deep learning"
          },
          {
            id: 9503,
            title: "Computer Vision",
            pageData: "",
            href: "/technologies/computer-vision",
            description: "Image and video processing"
          },
          {
            id: 9504,
            title: "NLP",
            pageData: "",
            href: "/technologies/nlp",
            description: "Natural language understanding"
          },
          {
            id: 9505,
            title: "Predictive Models",
            pageData: "",
            href: "/technologies/predictive-models",
            description: "Future-focused business intelligence"
          },
          {
            id: 9506,
            title: "GenAI & LLMs",
            pageData: "",
            href: "/technologies/generative-ai",
            description: "Creative AI applications"
          }
        ]
      },
      {
        id: 9600,
        title: "DevOps Tools",
        pageData: "",
        description: "Streamline development and operations",
        image: "/images/menu/devops.jpg",
        children: [
          {
            id: 9601,
            title: "CI/CD Pipelines",
            pageData: "",
            href: "/technologies/cicd",
            description: "Automated testing and deployment"
          },
          {
            id: 9602,
            title: "Jenkins",
            pageData: "",
            href: "/technologies/jenkins",
            description: "Open-source automation server"
          },
          {
            id: 9603,
            title: "GitHub Actions",
            pageData: "",
            href: "/technologies/github-actions",
            description: "Workflow automation for GitHub"
          },
          {
            id: 9604,
            title: "Terraform",
            pageData: "",
            href: "/technologies/terraform",
            description: "Infrastructure as code"
          },
          {
            id: 9605,
            title: "Ansible",
            pageData: "",
            href: "/technologies/ansible",
            description: "Configuration management"
          },
          {
            id: 9606,
            title: "Monitoring Tools",
            pageData: "",
            href: "/technologies/monitoring",
            description: "System and application observability"
          }
        ]
      }
    ]
  },
  {
    id: 45,
    title: "BLOG",
    pageData: "",
    description: "",
    href: "/blog"
  },
  {
    id: 47,
    title: "CONTACT",
    pageData: "",
    description: "",
    href: "/contact"
  }
];

