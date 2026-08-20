import { ShieldCheck, Thermometer, MapPin } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Thermometer, label: "Built for Desert Extremes" },
  { icon: MapPin, label: "Serving Washington County" },
];

export default function TrustBar() {
  return (
    <div className="bg-sage">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-white text-sm font-semibold">
            <Icon size={18} className="text-ochre" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
