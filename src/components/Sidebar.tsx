import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Users,
    FolderKanban,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Tableau de bord' },
    { path: '/documents', icon: FileText, label: 'Documents' },
    { path: '/clients', icon: Users, label: 'Clients' },
    { path: '/projects', icon: FolderKanban, label: 'Projets' },
    { path: '/settings', icon: Settings, label: 'Paramètres' },
];

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        navigate('/');
        setIsOpen(false);
    };

    return (
        <>
            {/* Sidebar compacte (toujours visible) */}
            <aside className="fixed top-0 left-0 h-screen w-16 bg-white border-r border-gray-200 z-30">
                <div className="flex flex-col h-full py-4">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="tutorial-menu p-3 hover:bg-gray-100 rounded-lg mx-2 mb-4"
                    >
                        <Menu size={20} />
                    </button>

                    <nav className="flex-1 flex flex-col items-center gap-4">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`tutorial-${item.path.substring(1)} p-3 rounded-lg hover:bg-gray-100 ${isActive ? 'text-purple-600' : 'text-gray-600'
                                        }`}
                                >
                                    <Icon size={20} />
                                </Link>
                            );
                        })}
                    </nav>

                    <button
                        onClick={handleLogout}
                        className="p-3 hover:bg-gray-100 rounded-lg mx-2 text-gray-600"
                    >
                        <LogOut size={20} />
                    </button>
                </div>
            </aside>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar étendue (s'ouvre au clic sur le menu) */}
            <aside className={`
                fixed top-0 left-0 h-screen bg-white border-r border-gray-200 z-40
                transition-transform duration-300 ease-in-out w-64
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex flex-col h-full">
                    <div className="p-6 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gradient">VotreLogo</h1>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="flex-1 px-4">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 mb-1 transition-colors border-l-4 ${isActive
                                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                                        : 'border-transparent text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:bg-gray-50 rounded-lg"
                        >
                            <LogOut size={20} />
                            <span className="font-medium">Déconnexion</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
} 