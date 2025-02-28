export interface SettingsField {
  label: string;
  value: string;
}

export interface SettingsSection {
  title: string;
  fields: SettingsField[];
}