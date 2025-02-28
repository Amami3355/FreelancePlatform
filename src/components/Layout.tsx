import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export default function Layout({ children, showSidebar = false }: LayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: t("menu.dashboard"), path: "/dashboard" },
    { icon: FileText, label: t("menu.documents"), path: "/documents" },
    { icon: Users, label: t("menu.clients"), path: "/clients" },
    { icon: Calendar, label: t("menu.projects"), path: "/projects" },
    { icon: Settings, label: t("menu.settings"), path: "/settings" },
  ];

  return (
    <div className="flex min-h-screen w-full">
      {/* Mobile sidebar backdrop */}
      {showSidebar && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {showSidebar && (
        <aside
          className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out
          lg:relative lg:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="flex items-center justify-between p-4">
            <div className="h-16">
              <img src="/images/photo.jpg" alt="FreelanceFlow" className="h-full w-auto rounded-full object-cover border-2 border-indigo-200" />
            </div>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="mt-8">
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600
                      ${location.pathname === item.path ? "bg-indigo-50 text-indigo-600" : ""}`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute bottom-0 w-64 p-4">
            <div className="flex items-center justify-between mb-4">
              <LanguageSwitcher position="top" />
            </div>
            <Link
              to="/"
              className="flex items-center px-6 py-3 text-gray-700 hover:text-red-600 w-full"
            >
              <LogOut className="w-5 h-5 mr-3" />
              {t("common.logout")}
            </Link>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Mobile header */}
        {showSidebar && (
          <div className="lg:hidden bg-white shadow-sm">
            <div className="flex items-center justify-between p-4">
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="h-16">
                <img src="/images/photo.jpg" alt="FreelanceFlow" className="h-full w-auto rounded-full object-cover border-2 border-indigo-200" />
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        )}

        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
