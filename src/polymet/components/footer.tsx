import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn("bg-muted/50 border-t border-border py-12", className)}
      data-pol-id="yjaemy"
      data-pol-file-name="footer"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="qud3dz"
        data-pol-file-name="footer"
        data-pol-file-type="component"
      >
        <div
          className="flex flex-col md:flex-row justify-between items-center"
          data-pol-id="lth9x5"
          data-pol-file-name="footer"
          data-pol-file-type="component"
        >
          <div
            className="mb-6 md:mb-0"
            data-pol-id="f7zya6"
            data-pol-file-name="footer"
            data-pol-file-type="component"
          >
            <div
              className="flex items-center"
              data-pol-id="46vfio"
              data-pol-file-name="footer"
              data-pol-file-type="component"
            >
              <img
                src="/nexastudio-logo.svg"
                alt="NexaStudio Logo"
                className="h-10 w-auto mr-3"
                data-pol-id="kbhdsz"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              />
              <span
                className="text-xl font-semibold"
                data-pol-id="zljz68"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                NexaStudio
              </span>
            </div>
            <p
              className="text-muted-foreground mt-2 max-w-md"
              data-pol-id="24fjed"
              data-pol-file-name="footer"
              data-pol-file-type="component"
            >
              Rapidly build intelligent software solutions tailored to your
              business.
            </p>
          </div>
          <div
            className="flex flex-col items-center md:items-end"
            data-pol-id="01qo4t"
            data-pol-file-name="footer"
            data-pol-file-type="component"
          >
            <button
              onClick={scrollToTop}
              className="mb-4 h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Scroll to top"
              data-pol-id="vpppv2"
              data-pol-file-name="footer"
              data-pol-file-type="component"
            >
              <ArrowUpIcon
                size={20}
                data-pol-id="1e8ltf"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              />
            </button>
            <p
              className="text-sm text-muted-foreground"
              data-pol-id="61ecxh"
              data-pol-file-name="footer"
              data-pol-file-type="component"
            >
              &copy; {currentYear} NexaStudio. All rights reserved.
            </p>
          </div>
        </div>
        <div
          className="mt-8 pt-8 border-t border-border"
          data-pol-id="v8cwi5"
          data-pol-file-name="footer"
          data-pol-file-type="component"
        >
          <div
            className="flex flex-col md:flex-row justify-between items-center"
            data-pol-id="qt8m6b"
            data-pol-file-name="footer"
            data-pol-file-type="component"
          >
            <nav
              className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0"
              data-pol-id="ngd06j"
              data-pol-file-name="footer"
              data-pol-file-type="component"
            >
              <a
                href="#services"
                className="text-sm hover:text-primary transition-colors"
                data-pol-id="qkw8nf"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-sm hover:text-primary transition-colors"
                data-pol-id="72eu43"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                Process
              </a>
              <a
                href="#use-cases"
                className="text-sm hover:text-primary transition-colors"
                data-pol-id="rlwiob"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                Use Cases
              </a>
              <a
                href="#clients"
                className="text-sm hover:text-primary transition-colors"
                data-pol-id="pbqf5q"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                Clients
              </a>
              <a
                href="#team"
                className="text-sm hover:text-primary transition-colors"
                data-pol-id="0gwm02"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-primary transition-colors"
                data-pol-id="ex1pe1"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                Contact
              </a>
            </nav>
            <div
              className="text-sm text-muted-foreground"
              data-pol-id="lk6m5n"
              data-pol-file-name="footer"
              data-pol-file-type="component"
            >
              <a
                href="#"
                className="hover:text-primary transition-colors mr-4"
                data-pol-id="ak72or"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                data-pol-id="also7a"
                data-pol-file-name="footer"
                data-pol-file-type="component"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
