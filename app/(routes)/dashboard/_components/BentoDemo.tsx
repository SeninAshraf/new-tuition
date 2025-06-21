import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "PDF Notes",
    description: "All subjects notes available here.",
    href: "/dashboard/notes",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4",
    width: "w-full lg:w-[400px]",
  },
  {
    Icon: InputIcon,
    name: "Important Youtube Links",
    description: "We upload important videos here.",
    href: "/dashboard/notes",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3",
    width: "w-full lg:w-[350px]",
  },
  {
    Icon: GlobeIcon,
    name: "Study Plan",
    description: "Update the schedule and correct studyplans here",
    href: "/dashboard/schedule",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-3 lg:row-end-4",
    width: "w-full lg:w-[350px]",
  },
  {
    Icon: CalendarIcon,
    name: "Schedule",
    description: "Provide countdown and Exam TimeTable",
    href: "/dashboard/schedule",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2",
    width: "w-full lg:w-[300px]",
  },
  {
    Icon: BellIcon,
    name: "Trigger alert",
    description: "Get notified when exam have only small time to study.",
    href: "/dashboard",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-4",
    width: "w-full lg:w-[300px]",
  },
];

export function BentoDemo() {
  return (
    <div className="w-full flex justify-center px-4">
      <BentoGrid className="lg:grid-rows-3 gap-4 md:gap-6 max-w-7xl w-full justify-items-center">
        {features.map((feature) => (
          <BentoCard
            key={feature.name}
            {...feature}
            className={`${feature.className} ${feature.width} mx-auto`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}