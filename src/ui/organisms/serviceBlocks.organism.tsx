import ServiceCard from "../molecules/serviceCard.molecule";

const ServiceBlocks = ({ className }: { className?: string }) => {
  const serviceInfo = [
    {
      bgImage: "/services/design-and-planning.webp",
      text: "Design and Planning Services",
      content: "Our expert design and planning services ensure meticulous execution.",
      href: "#",
    },
    {
      bgImage: "/services/construction-and-building.webp",
      text: "Construction and Building",
      content: "From groundbreaking to finishing touches, we bring your vision to life with precision.",
      href: "#",
    },
    {
      bgImage: "/services/renovation-and-remodeling.webp",
      text: "Renovation and Remodeling",
      content: "Enhance existing spaces or rejuvenate structures with tailored solutions.",
      href: "#",
    },
  ];

  return (
    <div className={`grid gap-6 ${className} px-4 md:px-8 md:gap-8 2xl:px-0 xl:gap-4 xl:h-[25rem] xl:grid-cols-3`}>
      {serviceInfo.map((info, index) => (
        <ServiceCard key={index} {...info} />
      ))}
    </div>
  );
};

export default ServiceBlocks;
