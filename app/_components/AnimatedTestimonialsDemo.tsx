import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The ceo and founder of this organization.",
      name: "Shahin Hamza",
      designation: "CEO",
      src: "shahin.jpg",
    },
    {
      quote:
        "plans the forms and function of various structures or systems",
      name: "Senin Ashraf",
      designation: "Designer",
      src: "senin.jpg",
    },
    {
      quote:
        "The overall managing and supervising of a business or organization.",
      name: "Mishal Muhammed",
      designation: "Manager",
      src: "mishal.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Nazmal Nizar",
      designation: "Marketing Manager",
      src: "nazmal.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Sreelesh C",
      designation: "Educational Consultant",
      src: "sreelesh.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
