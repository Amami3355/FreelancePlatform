import { Plus, Search, Calendar, Clock } from "lucide-react";
import type { Project } from "../../types/index";
import { useTranslation } from "react-i18next";

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Refonte site e-commerce",
    client: "Tech Store",
    status: "en_cours",
    deadline: "2024-04-15",
    budget: 8500,
  },
  {
    id: "2",
    name: "Application mobile",
    client: "StartupXYZ",
    status: "en_attente",
    deadline: "2024-05-01",
    budget: 12000,
  },
];

export default function ProjectList() {
  const { t, i18n } = useTranslation();
  console.log("Current language in ProjectList:", i18n.language);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          {t("projects.title")}
        </h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          {t("projects.newProject")}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder={t("projects.searchPlaceholder")}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {mockProjects.map((project) => (
            <div key={project.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm
                  ${
                    project.status === "en_cours"
                      ? "bg-blue-100 text-blue-800"
                      : project.status === "termine"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {project.status === "en_cours"
                    ? t("status.inProgress")
                    : project.status === "termine"
                      ? t("status.completed")
                      : t("status.pending")}
                </span>
              </div>
              <div className="flex gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t("projects.deadline")}:{" "}
                  {new Date(project.deadline).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {t("projects.budget")}: {project.budget.toLocaleString()}€
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
