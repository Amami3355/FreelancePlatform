import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import DocumentList from "../pages/Documents/DocumentList";
import ClientList from "../pages/Clients/ClientList";
import ProjectList from "../pages/Projects/ProjectList";
import Settings from "../pages/Settings/Settings";
import DashboardLayout from "../components/DashboardLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/documents" element={<DocumentList />} />

        <Route path="/clients" element={<ClientList />} />

        <Route path="/projects" element={<ProjectList />} />

        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
