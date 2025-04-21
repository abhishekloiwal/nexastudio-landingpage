import { cn } from "@/lib/utils";
import SectionTitle from "@/polymet/components/section-title";
import ContactForm from "@/polymet/components/contact-form";
import {
  MailIcon,
  MapPinIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
} from "lucide-react";

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className }: ContactSectionProps) {
  const contactInfo = [
    {
      icon: (
        <MailIcon
          size={20}
          data-pol-id="4lm4d4"
          data-pol-file-name="contact-section"
          data-pol-file-type="component"
        />
      ),
      label: "Email",
      value: "abhi@nexastudio.nl",
      href: "mailto:abhi@nexastudio.nl",
    },
    {
      icon: (
        <MapPinIcon
          size={20}
          data-pol-id="q6ks63"
          data-pol-file-name="contact-section"
          data-pol-file-type="component"
        />
      ),
      label: "Location",
      value: "Amsterdam, Netherlands",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: (
        <LinkedinIcon
          size={20}
          data-pol-id="rynlv0"
          data-pol-file-name="contact-section"
          data-pol-file-type="component"
        />
      ),
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: (
        <TwitterIcon
          size={20}
          data-pol-id="rzsx2x"
          data-pol-file-name="contact-section"
          data-pol-file-type="component"
        />
      ),
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: (
        <GithubIcon
          size={20}
          data-pol-id="pq7heo"
          data-pol-file-name="contact-section"
          data-pol-file-type="component"
        />
      ),
      href: "https://github.com",
      label: "GitHub",
    },
  ];

  return (
    <section
      id="contact"
      className={cn("py-20 bg-muted/30", className)}
      data-pol-id="v2qbm6"
      data-pol-file-name="contact-section"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="w6ldv0"
        data-pol-file-name="contact-section"
        data-pol-file-type="component"
      >
        <SectionTitle
          title="Get In Touch"
          subtitle="Ready to transform your ideas into reality? Reach out to us today."
          centered
          data-pol-id="odm4r1"
          data-pol-file-name="contact-section"
          data-pol-file-type="component"
        />

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
          data-pol-id="6tcs4y"
          data-pol-file-name="contact-section"
          data-pol-file-type="component"
        >
          <div
            data-pol-id="i6rb3n"
            data-pol-file-name="contact-section"
            data-pol-file-type="component"
          >
            <h3
              className="text-2xl font-semibold mb-6"
              data-pol-id="52utsw"
              data-pol-file-name="contact-section"
              data-pol-file-type="component"
            >
              Contact Information
            </h3>
            <div
              className="space-y-6 mb-8"
              data-pol-id="8wlfxz"
              data-pol-file-name="contact-section"
              data-pol-file-type="component"
            >
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-pol-id={`crfbem_${index}`}
                  data-pol-file-name="contact-section"
                  data-pol-file-type="component"
                >
                  <div
                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary mr-4"
                    data-pol-id={`wux87z_${index}`}
                    data-pol-file-name="contact-section"
                    data-pol-file-type="component"
                  >
                    {item.icon}
                  </div>
                  <div
                    data-pol-id={`bo76e4_${index}`}
                    data-pol-file-name="contact-section"
                    data-pol-file-type="component"
                  >
                    <p
                      className="text-sm text-muted-foreground"
                      data-pol-id={`5d1oax_${index}`}
                      data-pol-file-name="contact-section"
                      data-pol-file-type="component"
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-medium group-hover:text-primary transition-colors"
                      data-pol-id={`ou7gn4_${index}`}
                      data-pol-file-name="contact-section"
                      data-pol-file-type="component"
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <h3
              className="text-2xl font-semibold mb-4"
              data-pol-id="uojz0o"
              data-pol-file-name="contact-section"
              data-pol-file-type="component"
            >
              Follow Us
            </h3>
            <div
              className="flex space-x-4"
              data-pol-id="28rhj7"
              data-pol-file-name="contact-section"
              data-pol-file-type="component"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  data-pol-id={`f70zy8_${index}`}
                  data-pol-file-name="contact-section"
                  data-pol-file-type="component"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div
            data-pol-id="mkekv9"
            data-pol-file-name="contact-section"
            data-pol-file-type="component"
          >
            <div
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
              data-pol-id="itj1mc"
              data-pol-file-name="contact-section"
              data-pol-file-type="component"
            >
              <h3
                className="text-2xl font-semibold mb-6"
                data-pol-id="wf0eel"
                data-pol-file-name="contact-section"
                data-pol-file-type="component"
              >
                Send Us a Message
              </h3>
              <ContactForm
                data-pol-id="dyn8xj"
                data-pol-file-name="contact-section"
                data-pol-file-type="component"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
