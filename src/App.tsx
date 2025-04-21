import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/polymet/pages/landing-page";
import StartupMVPPage from "@/polymet/pages/startup-mvp";
import WorkspaceAutomationPage from "@/polymet/pages/workspace-automation";
import AIProductFeaturesPage from "@/polymet/pages/ai-product-features";
import OperationalIntelligencePage from "@/polymet/pages/operational-intelligence";

export default function LandingPrototype() {
  return (
    <Router
      data-pol-id="o23r5w"
      data-pol-file-name="landing-prototype"
      data-pol-file-type="prototype"
    >
      <Routes
        data-pol-id="wuxxa0"
        data-pol-file-name="landing-prototype"
        data-pol-file-type="prototype"
      >
        <Route
          path="/"
          element={
            <LandingPage
              data-pol-id="l32tyc"
              data-pol-file-name="landing-prototype"
              data-pol-file-type="prototype"
            />
          }
          data-pol-id="kocw7o"
          data-pol-file-name="landing-prototype"
          data-pol-file-type="prototype"
        />
        <Route
          path="/use-cases/startup-mvp"
          element={
            <StartupMVPPage
              data-pol-id="startup_mvp_page"
              data-pol-file-name="landing-prototype"
              data-pol-file-type="prototype"
            />
          }
        />
        <Route
          path="/use-cases/workspace-automation"
          element={
            <WorkspaceAutomationPage
              data-pol-id="workspace_automation_page"
              data-pol-file-name="landing-prototype"
              data-pol-file-type="prototype"
            />
          }
        />
        <Route
          path="/use-cases/ai-product-features"
          element={
            <AIProductFeaturesPage
              data-pol-id="ai_product_features_page"
              data-pol-file-name="landing-prototype"
              data-pol-file-type="prototype"
            />
          }
        />
        <Route
          path="/use-cases/operational-intelligence"
          element={
            <OperationalIntelligencePage
              data-pol-id="operational_intelligence_page"
              data-pol-file-name="landing-prototype"
              data-pol-file-type="prototype"
            />
          }
        />
        <Route
          path="*"
          element={
            <LandingPage
              data-pol-id="oxk8f4"
              data-pol-file-name="landing-prototype"
              data-pol-file-type="prototype"
            />
          }
          data-pol-id="0zgh14"
          data-pol-file-name="landing-prototype"
          data-pol-file-type="prototype"
        />
      </Routes>
    </Router>
  );
}
