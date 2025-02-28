import { Outlet } from "react-router-dom";
import Layout from "./Layout";

export default function DashboardLayout() {
  return (
    <Layout showSidebar={true}>
      <Outlet />
    </Layout>
  );
}
