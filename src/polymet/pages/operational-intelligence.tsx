import { ArrowLeftIcon, BarChartIcon } from "lucide-react";
import Button from "@/polymet/components/button";
import Animate from "@/polymet/components/animate";
import LandingLayout from "@/polymet/layouts/landing-layout";
import { useNavigate } from "react-router-dom";

export default function OperationalIntelligencePage() {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/#use-cases');
  };

  return (
    <LandingLayout>
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="pl-0 hover:pl-2 transition-all duration-300 mb-6"
            icon={<ArrowLeftIcon size={16} />}
            iconPosition="left"
          >
            Back to Use Cases
          </Button>
        </div>

        <Animate variant="fade-up">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BarChartIcon size={24} />
            </div>
            <h1 className="text-4xl font-bold">Operational Intelligence</h1>
          </div>
        </Animate>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-3">
            <Animate variant="fade-up" delay={0.1}>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  In today's data-rich environment, the ability to transform raw information into actionable intelligence is a critical competitive advantage. Our Operational Intelligence solutions empower your business decisions with data-driven, predictive insights that enhance operational efficiency and strategic planning.
                </p>
                <p className="text-muted-foreground">
                  By implementing advanced analytics, machine learning models, and intuitive visualization tools, we help you identify patterns, predict trends, and optimize processes across your entire organization.
                </p>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.2}>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">1</div>
                    <div>
                      <h3 className="font-medium">Proactive Decision-Making</h3>
                      <p className="text-muted-foreground">Anticipate issues and opportunities before they emerge with predictive analytics.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">2</div>
                    <div>
                      <h3 className="font-medium">Resource Optimization</h3>
                      <p className="text-muted-foreground">Allocate resources more effectively based on data-driven insights.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">3</div>
                    <div>
                      <h3 className="font-medium">Performance Visibility</h3>
                      <p className="text-muted-foreground">Gain comprehensive visibility into operations with customizable dashboards and reports.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">4</div>
                    <div>
                      <h3 className="font-medium">Continuous Improvement</h3>
                      <p className="text-muted-foreground">Implement data-driven improvement cycles across all business processes.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.3}>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Competitive Analysis & Market Research</h2>
                <p className="text-muted-foreground mb-4">
                  Stay ahead of market trends and competitor movements with our advanced competitive intelligence solutions. We combine AI-powered data gathering with expert analysis to provide you with actionable insights about your industry landscape.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our competitive analysis tools monitor competitor pricing, product features, marketing strategies, and customer sentiment in real-time, helping you identify gaps in the market and opportunities for differentiation.
                </p>
                <p className="text-muted-foreground">
                  For market research, we leverage sophisticated data mining and natural language processing to analyze consumer behavior, identify emerging trends, and validate business hypotheses with statistically significant data—transforming guesswork into confident strategy.
                </p>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.4}>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="text-muted-foreground mb-4">
                  We begin by understanding your business objectives and identifying the key performance indicators that matter most to your organization. Our data scientists and engineers then design and implement custom analytics solutions that transform your data into meaningful insights.
                </p>
                <p className="text-muted-foreground">
                  From data collection and processing to advanced analytics and visualization, our comprehensive approach ensures you have the right information at the right time to make optimal business decisions.
                </p>
              </div>
            </Animate>
          </div>

          <div className="lg:col-span-2">
            <Animate variant="fade-left" delay={0.5}>
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to transform your operational data into strategic intelligence? Schedule a consultation with our analytics experts to explore possibilities.
                </p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Schedule Consultation
                </Button>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">Common Applications</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Supply chain optimization</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Customer behavior analysis</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Competitive intelligence</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Market trend analysis</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Financial forecasting</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Process efficiency monitoring</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Risk assessment and management</li>
                  </ul>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
