import { Baby, Droplets, Flame, Home, Info, Shirt, Wind, type LucideProps } from "lucide-react";
import type { IconName } from "@/data/content";

// Maps the string icon names stored in content.ts to Lucide components,
// so non-developers can pick icons by name without touching JSX.
const ICONS: Record<IconName, React.ComponentType<LucideProps>> = {
  Shirt,
  Baby,
  Home,
  Droplets,
  Flame,
  Info,
  Wind,
};

interface IconProps extends LucideProps {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const Cmp = ICONS[name];
  return <Cmp {...props} />;
}
