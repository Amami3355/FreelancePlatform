import { Calendar, Clock } from 'lucide-react';
import type { Project as ProjectType } from '../../types/index';
import { useTranslation } from 'react-i18next';

interface ProjectProps {
    project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
    const { t } = useTranslation();

    return (
        <div className="p-6 hover:bg-gray-50">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{project.client}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm
          ${project.status === 'en_cours' ? 'bg-blue-100 text-blue-800' :
                        project.status === 'termine' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'}`}>
                    {project.status === 'en_cours' ? t('status.inProgress') :
                        project.status === 'termine' ? t('status.completed') :
                            t('status.pending')}
                </span>
            </div>
            <div className="flex gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t('projects.deadline')}: {new Date(project.deadline).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {t('projects.budget')}: {project.budget.toLocaleString()}€
                </div>
            </div>
        </div>
    );
} 