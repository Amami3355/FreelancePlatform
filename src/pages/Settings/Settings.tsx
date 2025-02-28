import React, { useState } from "react";
import { User, Building } from "lucide-react";
import SettingsMenu from "./components/SettingsMenu";
import SettingsSection from "./components/SettingsSection";
import { initialSettings } from "./data/initialSettings";
import type { SettingsSection as SettingsSectionType } from "./types";

const iconMap = {
  Profil: User,
  Entreprise: Building,
};

export default function Settings() {
  const [sections, setSections] =
    useState<SettingsSectionType[]>(initialSettings);
  const [activeSection, setActiveSection] = useState<string>("Profil");

  const handleFieldChange = (
    sectionTitle: string,
    fieldLabel: string,
    value: string,
  ) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.title === sectionTitle) {
          return {
            ...section,
            fields: section.fields.map((field) =>
              field.label === fieldLabel ? { ...field, value } : field,
            ),
          };
        }
        return section;
      }),
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <SettingsMenu
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>

        <div className="lg:col-span-2 space-y-6">
          {sections
            .filter(
              (section) =>
                activeSection === "all" || section.title === activeSection,
            )
            .map((section) => (
              <SettingsSection
                key={section.title}
                title={section.title}
                icon={iconMap[section.title as keyof typeof iconMap]}
                fields={section.fields}
                onFieldChange={(fieldLabel, value) =>
                  handleFieldChange(section.title, fieldLabel, value)
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
}
