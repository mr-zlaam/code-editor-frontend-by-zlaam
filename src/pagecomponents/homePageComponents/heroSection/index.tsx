import Banner from "./banner";

function HeroSection() {
  return (
    <>
      <section>
        <Banner banner={banners} />
      </section>
    </>
  );
}

export default HeroSection;

const banners = [
  {
    title: "PLS Services - Creative and Design",
    subtitle: "Innovative design solutions tailored to your business needs. Elevate your brand with stunning visuals and seamless user experiences.",
    buttonText: "Learn More",
    image:
      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "PLS Services - Data and Analytics",
    subtitle:
      "Transform raw data into actionable insights with our advanced analytics. Make smarter decisions with AI-powered reporting and visualization.",
    buttonText: "Our Mission",
    image:
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "PLS Services - Cyber Security",
    subtitle:
      "Protect your digital assets with cutting-edge security solutions. We safeguard businesses from cyber threats, ensuring compliance and resilience.",
    buttonText: "Find Out More",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "PLS Services - Cloud & DevOps",
    subtitle:
      "Accelerate innovation with scalable cloud solutions and automated DevOps workflows. Deploy, manage, and optimize infrastructure effortlessly.",
    buttonText: "Learn More",
    image:
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

