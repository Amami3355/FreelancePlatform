import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
}: StatsCardProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl md:text-2xl font-semibold">{value}</p>
          {trend && (
            <div className="flex items-center">
              <span
                className={`text-sm ${trend.isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {trend.isPositive ? "+" : "-"}
                {trend.value}%
              </span>
            </div>
          )}
        </div>
        <div className="bg-indigo-50 p-2 md:p-3 rounded-lg">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
        </div>
      </div>
    </div>
  );
}
