import {
  Droplets,
  Heart,
  Layers,
  LayoutGrid,
  MapPin,
  Scissors,
  Shirt,
  Thermometer,
  Wind,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/data/content";

// Maps the string icon names stored in content.ts to Lucide components,
// so non-developers can pick icons by name without touching JSX.
const ICONS: Record<IconName, React.ComponentType<LucideProps>> = {
  Scissors,
  Heart,
  MapPin,
  LayoutGrid,
  Layers,
  Droplets,
  Wind,
  Thermometer,
  Shirt,
};

interface IconProps extends LucideProps {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const Cmp = ICONS[name];
  return <Cmp {...props} />;
}
