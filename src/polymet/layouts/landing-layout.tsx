import Navbar from "@/polymet/components/navbar";
import Footer from "@/polymet/components/footer";
import { useEffect } from "react";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      data-pol-id="6ehr6s"
      data-pol-file-name="landing-layout"
      data-pol-file-type="layout"
    >
      <Navbar
        data-pol-id="xtquzc"
        data-pol-file-name="landing-layout"
        data-pol-file-type="layout"
      />
      <main
        className="flex-grow pt-16"
        data-pol-id="rp7svo"
        data-pol-file-name="landing-layout"
        data-pol-file-type="layout"
      >
        {children}
      </main>
      <Footer
        data-pol-id="psgluz"
        data-pol-file-name="landing-layout"
        data-pol-file-type="layout"
      />
    </div>
  );
}
