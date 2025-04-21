"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Button from "@/polymet/components/button";
import { SendIcon } from "lucide-react";
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceId = 'service_s4erihm'; // EmailJS service ID
    const templateId = 'template_3ihkdwu'; // EmailJS template ID
    const publicKey = 'cCExkphLj3UtIceZJ'; // EmailJS public key

    // Prepare template parameters - match these with your template variables
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.projectDescription
    };

    // Send the email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          projectDescription: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsSubmitting(false);
        // Handle error - optionally you could set an error state and show an error message
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
      data-pol-id="g5jehk"
      data-pol-file-name="contact-form"
      data-pol-file-type="component"
    >
      {isSubmitted && (
        <div
          className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg mb-6"
          data-pol-id="7hi1ii"
          data-pol-file-name="contact-form"
          data-pol-file-type="component"
        >
          Thank you for your message! We'll get back to you soon at {formData.email}.
        </div>
      )}

      <div
        data-pol-id="rxhxgs"
        data-pol-file-name="contact-form"
        data-pol-file-type="component"
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
          data-pol-id="xxew6d"
          data-pol-file-name="contact-form"
          data-pol-file-type="component"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Your name"
          data-pol-id="sjx1qf"
          data-pol-file-name="contact-form"
          data-pol-file-type="component"
        />
      </div>

      <div
        data-pol-id="3y9brv"
        data-pol-file-name="contact-form"
        data-pol-file-type="component"
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
          data-pol-id="jva0m2"
          data-pol-file-name="contact-form"
          data-pol-file-type="component"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="your.email@example.com"
          data-pol-id="05sz74"
          data-pol-file-name="contact-form"
          data-pol-file-type="component"
        />
      </div>

      <div
        data-pol-id="hucl4o"
        data-pol-file-name="contact-form"
        data-pol-file-type="component"
      >
        <label
          htmlFor="projectDescription"
          className="block text-sm font-medium mb-2"
          data-pol-id="09ohnc"
          data-pol-file-name="contact-form"
          data-pol-file-type="component"
        >
          Project Description
        </label>
        <textarea
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          placeholder="Tell us about your project or idea..."
          data-pol-id="9zu0mf"
          data-pol-file-name="contact-form"
          data-pol-file-type="component"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        icon={
          <SendIcon
            size={18}
            data-pol-id="edpz4l"
            data-pol-file-name="contact-form"
            data-pol-file-type="component"
          />
        }
        iconPosition="right"
        data-pol-id="x05zie"
        data-pol-file-name="contact-form"
        data-pol-file-type="component"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
