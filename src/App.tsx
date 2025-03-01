import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes";
import "./i18n";

function App() {
  return (
    <Router basename="/FreelancePlatform">
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
