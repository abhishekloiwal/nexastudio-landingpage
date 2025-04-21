import { ArrowLeftIcon, BotIcon } from "lucide-react";
import Button from "@/polymet/components/button";
import Animate from "@/polymet/components/animate";
import LandingLayout from "@/polymet/layouts/landing-layout";
import { useNavigate } from "react-router-dom";

export default function WorkspaceAutomationPage() {
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
              <BotIcon size={24} />
            </div>
            <h1 className="text-4xl font-bold">Workspace Automation</h1>
          </div>
        </Animate>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-3">
            <Animate variant="fade-up" delay={0.1}>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Every business is filled with repetitive, time-consuming tasks that drain productivity and creative energy. Our Workspace Automation solutions eliminate these bottlenecks by automating away the boring tasks at any step of your workflow, from simple data operations to complex, AI-powered workflows.
                </p>
                <p className="text-muted-foreground">
                  Whether you need to streamline data processing, automate customer communications, or build complete agentic solutions, we deliver custom automation tools that transform how your team works, letting people focus on what matters most.
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
                      <h3 className="font-medium">Time Reclamation</h3>
                      <p className="text-muted-foreground">Free your team from mundane tasks like data entry, email processing, and report generation.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">2</div>
                    <div>
                      <h3 className="font-medium">Tool Flexibility</h3>
                      <p className="text-muted-foreground">Solutions using no-code platforms like n8n, Claude-powered interfaces, or custom code—whatever fits your team best.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">3</div>
                    <div>
                      <h3 className="font-medium">Intelligent Workflows</h3>
                      <p className="text-muted-foreground">Advanced AI agents that can handle complex decisions, not just simple rule-based automation.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-1">4</div>
                    <div>
                      <h3 className="font-medium">Seamless Integration</h3>
                      <p className="text-muted-foreground">Connect with your existing tools and platforms, from email and Excel to CRMs and custom databases.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Animate>

            <Animate variant="fade-up" delay={0.3}>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="text-muted-foreground mb-4">
                  We start with a conversation to understand your pain points—which tasks consume time without adding value? Then we identify the right automation approach, whether that's a simple script, a visual workflow tool, or an AI-powered agent that can handle complex scenarios.
                </p>
                <p className="text-muted-foreground">
                  From moving data between systems to reading emails and processing spreadsheets, from automated outreach to potential clients to building complete front-end solutions with IDE and agent capabilities—we create automations that grow with your needs and integrate seamlessly with your existing workflows.
                </p>
              </div>
            </Animate>
          </div>

          <div className="lg:col-span-2">
            <Animate variant="fade-left" delay={0.4}>
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to streamline your business operations? Schedule a consultation with our automation experts to identify opportunities for improvement.
                </p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Schedule Consultation
                </Button>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">What We Can Automate</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Email processing and response</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Spreadsheet data extraction</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Client outreach campaigns</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>AI-powered decision systems</li>
                    <li className="flex items-center"><div className="h-2 w-2 rounded-full bg-primary mr-2"></div>Custom front-end agent tools</li>
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
