"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import SectionTitle from "@/polymet/components/section-title";
import TestimonialCard from "@/polymet/components/testimonial-card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Animate from "@/polymet/components/animate";

interface TestimonialsSectionProps {
  className?: string;
}

export default function TestimonialsSection({
  className,
}: TestimonialsSectionProps) {
  const testimonials = [
    {
      quote:
        "Working with this team was transformative for our business. They delivered a sophisticated AI solution in half the time we expected.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechStart Inc.",
      avatarUrl: "https://github.com/yusufhilmi.png",
    },
    {
      quote:
        "Their rapid prototyping approach saved us months of development time and helped us secure our next round of funding.",
      author: "Michael Chen",
      position: "Founder",
      company: "InnovateLab",
    },
    {
      quote:
        "The AI integration they built for our customer service platform reduced response times by 60% and significantly improved customer satisfaction.",
      author: "Elena Rodriguez",
      position: "Head of Product",
      company: "ServicePro",
      avatarUrl: "https://github.com/furkanksl.png",
    },
    {
      quote:
        "Their strategic consulting helped us identify the perfect AI use cases for our business, focusing our resources where they'd have the biggest impact.",
      author: "David Park",
      position: "CEO",
      company: "GrowthTech",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className={cn("py-20 bg-muted/30", className)}
      data-pol-id="gv0r9p"
      data-pol-file-name="testimonials-section"
      data-pol-file-type="component"
    >
      <div
        className="container mx-auto px-6"
        data-pol-id="zgb9dg"
        data-pol-file-name="testimonials-section"
        data-pol-file-type="component"
      >
        <Animate
          variant="fade-up"
          data-pol-id="wqlz33"
          data-pol-file-name="testimonials-section"
          data-pol-file-type="component"
        >
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
            centered
            data-pol-id="ep1p7x"
            data-pol-file-name="testimonials-section"
            data-pol-file-type="component"
          />
        </Animate>

        <div
          className="mt-12"
          data-pol-id="f2psvz"
          data-pol-file-name="testimonials-section"
          data-pol-file-type="component"
        >
          {/* Desktop view - grid */}
          <div
            className="hidden md:grid grid-cols-2 gap-8"
            data-pol-id="1ku8w3"
            data-pol-file-name="testimonials-section"
            data-pol-file-type="component"
          >
            {testimonials.map((testimonial, index) => (
              <Animate
                key={index}
                variant="fade-up"
                delay={0.1 * (index + 1)}
                threshold={0.1}
                data-pol-id={`ynz0bb_${index}`}
                data-pol-file-name="testimonials-section"
                data-pol-file-type="component"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  avatarUrl={testimonial.avatarUrl}
                  data-pol-id={`65enlr_${index}`}
                  data-pol-file-name="testimonials-section"
                  data-pol-file-type="component"
                />
              </Animate>
            ))}
          </div>

          {/* Mobile view - carousel */}
          <div
            className="md:hidden"
            data-pol-id="fmy7f3"
            data-pol-file-name="testimonials-section"
            data-pol-file-type="component"
          >
            <div
              className="relative"
              data-pol-id="braach"
              data-pol-file-name="testimonials-section"
              data-pol-file-type="component"
            >
              <div
                className="overflow-hidden"
                data-pol-id="qjhhk6"
                data-pol-file-name="testimonials-section"
                data-pol-file-type="component"
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  data-pol-id="a918cx"
                  data-pol-file-name="testimonials-section"
                  data-pol-file-type="component"
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                      data-pol-id={`m1yz93_${index}`}
                      data-pol-file-name="testimonials-section"
                      data-pol-file-type="component"
                    >
                      <TestimonialCard
                        quote={testimonial.quote}
                        author={testimonial.author}
                        position={testimonial.position}
                        company={testimonial.company}
                        avatarUrl={testimonial.avatarUrl}
                        data-pol-id={`5li8ql_${index}`}
                        data-pol-file-name="testimonials-section"
                        data-pol-file-type="component"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="flex justify-center mt-6 space-x-2"
                data-pol-id="n1eldu"
                data-pol-file-name="testimonials-section"
                data-pol-file-type="component"
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-4"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    data-pol-id={`vtia3n_${index}`}
                    data-pol-file-name="testimonials-section"
                    data-pol-file-type="component"
                  />
                ))}
              </div>
              <button
                className="absolute top-1/2 left-0 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-background/80 shadow-md transition-all duration-300 hover:bg-background hover:scale-110"
                onClick={handlePrev}
                data-pol-id="x4no9v"
                data-pol-file-name="testimonials-section"
                data-pol-file-type="component"
              >
                <ChevronLeftIcon
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  data-pol-id="zmjfwz"
                  data-pol-file-name="testimonials-section"
                  data-pol-file-type="component"
                />
              </button>
              <button
                className="absolute top-1/2 right-0 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-background/80 shadow-md transition-all duration-300 hover:bg-background hover:scale-110"
                onClick={handleNext}
                data-pol-id="yywnd6"
                data-pol-file-name="testimonials-section"
                data-pol-file-type="component"
              >
                <ChevronRightIcon
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  data-pol-id="iinjz0"
                  data-pol-file-name="testimonials-section"
                  data-pol-file-type="component"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
