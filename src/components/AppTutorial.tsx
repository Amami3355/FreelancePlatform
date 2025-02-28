import Joyride, { Step, CallBackProps, STATUS } from 'react-joyride';
import { useState, useEffect } from 'react';

const steps: Step[] = [
    {
        target: '.tutorial-menu',
        content: 'Voici le menu principal. Cliquez sur l\'icône pour voir plus de détails.',
        placement: 'right',
    },
    {
        target: '.tutorial-dashboard',
        content: 'Le tableau de bord vous donne une vue d\'ensemble de vos activités.',
        placement: 'right',
    },
    {
        target: '.tutorial-documents',
        content: 'Gérez tous vos documents ici.',
        placement: 'right',
    },
    {
        target: '.tutorial-clients',
        content: 'Retrouvez la liste de vos clients et leurs informations.',
        placement: 'right',
    },
    {
        target: '.tutorial-projects',
        content: 'Suivez l\'avancement de vos projets.',
        placement: 'right',
    },
];

export default function AppTutorial() {
    const [run, setRun] = useState(false);

    useEffect(() => {
        // Vérifie si c'est la première visite
        const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
        if (!hasSeenTutorial) {
            // Demande à l'utilisateur s'il souhaite voir le tutoriel
            const wantsTutorial = window.confirm('Souhaitez-vous suivre le tutoriel de l\'application ?');
            if (wantsTutorial) {
                setRun(true);
            }
            localStorage.setItem('hasSeenTutorial', 'true');
        }
    }, []);

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { status } = data;
        if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
            setRun(false);
        }
    };

    return (
        <Joyride
            steps={steps}
            run={run}
            continuous
            showProgress
            showSkipButton
            callback={handleJoyrideCallback}
            styles={{
                options: {
                    primaryColor: '#7c3aed',
                    textColor: '#1e293b',
                }
            }}
            locale={{
                back: 'Précédent',
                close: 'Fermer',
                last: 'Terminer',
                next: 'Suivant',
                skip: 'Passer'
            }}
        />
    );
} 