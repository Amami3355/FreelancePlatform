import React from "react";
import { User, Building, Bell, Shield, Palette } from "lucide-react";

interface SettingsMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { name: "Profil", icon: User },
  { name: "Entreprise", icon: Building },
  { name: "Notifications", icon: Bell },
  { name: "Sécurité", icon: Shield },
  { name: "Apparence", icon: Palette },
];

export default function SettingsMenu({
  activeSection,
  onSectionChange,
}: SettingsMenuProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onSectionChange(item.name)}
            className={`w-full flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50
              ${activeSection === item.name ? "bg-indigo-50 text-indigo-600" : ""}`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
}
