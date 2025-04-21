"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Button from "@/polymet/components/button";
import { MenuIcon, XIcon, MoonIcon, SunIcon } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [navHeight, setNavHeight] = useState(0);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Clients", href: "#clients" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }

      // Update navbar height for proper content spacing
      const navbar = document.getElementById("main-navbar");
      if (navbar) {
        setNavHeight(navbar.offsetHeight);
      }
    };

    // Check if user prefers dark mode
    if (typeof window !== "undefined") {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }

    // Initial height calculation
    const navbar = document.getElementById("main-navbar");
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navLinks]);

  useEffect(() => {
    // Apply padding to the main content based on navbar height
    // Only apply padding to the content inside the main element, not the body
    const mainElement = document.querySelector('main');
    if (navHeight > 0 && mainElement) {
      mainElement.style.paddingTop = `${navHeight}px`;
    }

    return () => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.style.paddingTop = "0";
      }
    };
  }, [navHeight]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };

  return (
    <header
      id="main-navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5",
        className,
      )}
      data-pol-id="e6rrq6"
      data-pol-file-name="navbar"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="vcd3fx"
        data-pol-file-name="navbar"
        data-pol-file-type="component"
      >
        <div
          className="flex items-center justify-between"
          data-pol-id="prjo14"
          data-pol-file-name="navbar"
          data-pol-file-type="component"
        >
          <div
            className="flex items-center"
            data-pol-id="y9nkse"
            data-pol-file-name="navbar"
            data-pol-file-type="component"
          >
            <a href="/" className="flex items-center" aria-label="Home">
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center mr-3 transition-all duration-500 hover:scale-110 hover:rotate-3"
                data-pol-id="c0wcld"
                data-pol-file-name="navbar"
                data-pol-file-type="component"
              >
                <img src="/nexastudio-logo.svg" alt="NexaStudio Logo" className="w-full h-full" />
              </div>
              <span
                className="text-xl font-semibold"
                data-pol-id="amht37"
                data-pol-file-name="navbar"
                data-pol-file-type="component"
              >
                NexaStudio
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            data-pol-id="jyd4da"
            data-pol-file-name="navbar"
            data-pol-file-type="component"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary relative group py-1",
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  // If we're already on the home page, just scroll
                  if (window.location.pathname === '/' || window.location.pathname === '') {
                    const sectionId = link.href.substring(1);
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    // If we're on a different page, go to home page with the hash
                    window.location.href = '/' + link.href;
                  }
                }}
                data-pol-id={`ire3ow_${index}`}
                data-pol-file-name="navbar"
                data-pol-file-type="component"
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    activeSection === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                  data-pol-id={`2i0ie9_${index}`}
                  data-pol-file-name="navbar"
                  data-pol-file-type="component"
                />
              </a>
            ))}
          </nav>

          <div
            className="flex items-center space-x-4"
            data-pol-id="4fr6fd"
            data-pol-file-name="navbar"
            data-pol-file-type="component"
          >
            <button
              onClick={toggleDarkMode}
              className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-muted transition-all duration-300 hover:rotate-12"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              data-pol-id="dt9ykg"
              data-pol-file-name="navbar"
              data-pol-file-type="component"
            >
              {isDarkMode ? (
                <SunIcon
                  size={20}
                  className="text-yellow-400"
                  data-pol-id="523s27"
                  data-pol-file-name="navbar"
                  data-pol-file-type="component"
                />
              ) : (
                <MoonIcon
                  size={20}
                  data-pol-id="mjtp1k"
                  data-pol-file-name="navbar"
                  data-pol-file-type="component"
                />
              )}
            </button>
            <Button
              className="hidden md:inline-flex"
              size="sm"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-pol-id="huo8t8"
              data-pol-file-name="navbar"
              data-pol-file-type="component"
            >
              Get in Touch
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg hover:bg-muted transition-all duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              data-pol-id="1p9oit"
              data-pol-file-name="navbar"
              data-pol-file-type="component"
            >
              {isMenuOpen ? (
                <XIcon
                  size={20}
                  className="transition-transform duration-300 rotate-90"
                  data-pol-id="zbxu4z"
                  data-pol-file-name="navbar"
                  data-pol-file-type="component"
                />
              ) : (
                <MenuIcon
                  size={20}
                  className="transition-transform duration-300"
                  data-pol-id="1t2px3"
                  data-pol-file-name="navbar"
                  data-pol-file-type="component"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out fixed left-0 right-0 bg-background/95 backdrop-blur-md",
            isMenuOpen ? "max-h-[80vh] opacity-100 top-[calc(100%+1px)] shadow-lg z-50" : "max-h-0 opacity-0 top-full",
          )}
          style={{ width: '100%' }}
          data-pol-id="42rwj1"
          data-pol-file-name="navbar"
          data-pol-file-type="component"
        >
          <nav
            className="py-4 border-t border-border container mx-auto px-6"
            data-pol-id="7bucw8"
            data-pol-file-name="navbar"
            data-pol-file-type="component"
          >
            <div
              className="flex flex-col space-y-4"
              data-pol-id="wxehos"
              data-pol-file-name="navbar"
              data-pol-file-type="component"
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-primary hover:translate-x-1 flex items-center",
                    activeSection === link.href.substring(1)
                      ? "text-primary translate-x-1"
                      : "",
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    // If we're already on the home page, just scroll
                    if (window.location.pathname === '/' || window.location.pathname === '') {
                      const sectionId = link.href.substring(1);
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      // If we're on a different page, go to home page with the hash
                      window.location.href = '/' + link.href;
                    }
                  }}
                  data-pol-id={`rg7npy_${index}`}
                  data-pol-file-name="navbar"
                  data-pol-file-type="component"
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full mr-2 transition-all duration-300",
                      activeSection === link.href.substring(1)
                        ? "bg-primary scale-100"
                        : "bg-muted-foreground scale-75",
                    )}
                    data-pol-id={`tblvt1_${index}`}
                    data-pol-file-name="navbar"
                    data-pol-file-type="component"
                  />

                  {link.label}
                </a>
              ))}
              <Button
                fullWidth
                className="mt-2"
                data-pol-id="b1dmj6"
                data-pol-file-name="navbar"
                data-pol-file-type="component"
              >
                Book a Call
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
