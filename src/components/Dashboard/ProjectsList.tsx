import { Calendar, Clock } from "lucide-react";
import type { Project } from "../../types";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Projets en cours</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {projects.map((project) => (
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
                  ? "En cours"
                  : project.status === "termine"
                    ? "Terminé"
                    : "En attente"}
              </span>
            </div>
            <div className="flex gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Échéance: {new Date(project.deadline).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Budget: {project.budget.toLocaleString()}€
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
