import React from "react";
import { LucideIcon } from "lucide-react";
import { SettingsField } from "../types";

interface SettingsSectionProps {
  title: string;
  icon: LucideIcon;
  fields: SettingsField[];
  onFieldChange: (field: string, value: string) => void;
}

export default function SettingsSection({
  title,
  icon: Icon,
  fields,
  onFieldChange,
}: SettingsSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center">
          <Icon className="w-5 h-5 text-gray-400 mr-3" />
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.label}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type="text"
                value={field.value}
                onChange={(e) => onFieldChange(field.label, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Sauvegarder les modifications
          </button>
        </div>
      </div>
    </div>
  );
}
