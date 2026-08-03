import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeftIcon, BarChart3Icon, CodeIcon, ExternalLinkIcon, ShieldIcon, Users, ZapIcon, Check } from "lucide-react";

export default function ProjectQRAdmin() {
  const navigate = useNavigate();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const techStack = [
    { name: "Next.js 15", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "REST APIs", category: "Backend" },
    { name: "MongoDB", category: "Database" },
  ];

  const keyFeatures = [
    {
      icon: <Users size={24} />,
      title: "Multi-Merchant Management",
      description: "Manage multiple restaurant partners with detailed profiles, settings, and business configurations",
    },
    {
      icon: <BarChart3Icon size={24} />,
      title: "Order Management System",
      description: "Real-time order tracking with status updates and comprehensive order history",
    },
    {
      icon: <ZapIcon size={24} />,
      title: "Advanced Search & Filtering",
      description: "Powerful search capabilities with pagination and multi-criteria filtering across all data tables",
    },
    {
      icon: <ShieldIcon size={24} />,
      title: "Role-Based Access Control",
      description: "Secure administrative interface with role-based permissions and access management",
    },
    {
      icon: <CodeIcon size={24} />,
      title: "Table Management",
      description: "Complete dine-in operations management with QR code-based table administration",
    },
    {
      icon: <BarChart3Icon size={24} />,
      title: "Analytics & Reporting",
      description: "Interactive dashboard with comprehensive analytics, sales reports, and business insights",
    },
  ];

  const screenshots = [
    {
      title: "Admin Dashboard",
      description: "Main overview dashboard with sales analytics, merchant stats, and key metrics",
      image: "/images/qr-admin/qr-admin-dashboard.png",
    },
    {
      title: "Merchants Management",
      description: "Complete merchant listing with search, filtering, and action controls",
      image: "/images/qr-admin/qr-admin-merchant.png",
    },
    {
      title: "Add New Merchant",
      description: "Comprehensive merchant onboarding form with country, timezone, and currency settings",
      image: "/images/qr-admin/qr-admin-add-merchant.png",
    },
    {
      title: "Settings & Configuration",
      description: "User profile management, password reset, notifications, and privacy settings",
      images: ["/images/qr-admin/qr-admin-setting-profile.png", "/images/qr-admin/qr-admin-setting-reset-password.png", "/images/qr-admin/qr-admin-setting-notifications.png", "/images/qr-admin/qr-admin-setting-privacy.png"],
    },
    {
      title: "Login Page",
      description: "User authentication with secure login and role-based access control for restaurant administrators",
      image: "/images/qr-admin/qr-admin-login.png",
    },
    {
      title: "Forgot Password",
      description: "Forgot password flow with email verification and secure password reset functionality",
      image: "/images/qr-admin/qr-admin-forget-password.png",
    },
    {
      title: "OTP Verification",
      description: "One-time password verification for secure account access and enhanced security measures",
      image: "/images/qr-admin/qr-admin-otp.png",
    },
    {
      title: "Reset Password",
      description: "Secure password reset functionality with confirmation and validation for enhanced user experience",
      image: "/images/qr-admin/qr-admin-new-password.png",
    },
  ];

  const responsibilities = [
    "Designed and developed the complete frontend architecture using Next.js 15 App Router",
    "Built reusable, component-based UI architecture for scalability and maintainability",
    "Implemented CRUD operations with advanced filtering, searching, and pagination",
    "Integrated REST API endpoints for merchant and order management",
    "Developed responsive layouts using Tailwind CSS for desktop and tablet devices",
    "Managed complex application state and form validation",
    "Implemented dynamic routing, settings modules, and profile management",
    "Optimized user experience and dashboard performance",
  ];

  return (
    <>
      <SEO
        title="QR Code Dine-In Ordering Admin Panel | Numan Irshad"
        description="Admin dashboard for QR code dine-in ordering, with merchant and order management, table controls, analytics, and settings."
        url="https://numanirshad.dev/projects/qr-code-dine-in-ordering-admin-panel"
        image="https://numanirshad.dev/images/qr-admin/qr-admin-dashboard.png"
      />
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <div className="pt-24 pb-12 md:pb-16 border-b border-border">
          <div className="container mx-auto px-6">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-mono text-sm"
            >
              <ArrowLeftIcon size={16} />
              Back to Projects
            </button>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              QR Code <span className="text-gradient">Dine-In Ordering</span>
              <br />
              Admin Panel
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              A modern, responsive Admin Dashboard for managing QR Code-based Dine-In Ordering Systems, enabling restaurant owners to manage merchants, orders, tables, menus, and business settings from a centralized platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://qr-code-dine-in-ordering-admin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <ExternalLinkIcon size={16} />
                  View Live Project
                </Button>
              </a>
              {/* <Button variant="outline">
                <Code2 size={16} className="mr-2" />
                View Code
              </Button> */}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="py-16 border-b border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              <span className="font-mono text-primary text-sm">// tech stack</span>
              <br />
              Technology Stack
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="font-mono text-xs text-primary mb-2">{tech.category}</div>
                  <h3 className="font-bold text-lg">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="py-16 border-b border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              <span className="font-mono text-primary text-sm">// showcase</span>
              <br />
              Dashboard Preview
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {screenshots.map((screenshot, idx) => (
                <div key={idx} className="group">
                  <div className="relative rounded-xl overflow-hidden border border-border mb-4 aspect-video bg-muted/50">
                    {screenshot.images ? (
                      <Carousel
                        className="relative h-full w-full"
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                        plugins={[plugin.current]}
                      >
                        <CarouselContent className="h-full m-0">
                          {screenshot.images.map((img, i) => (
                            <CarouselItem key={i} className="w-full p-0 h-full flex items-center justify-center">
                              <img
                                src={img}
                                alt={`${screenshot.title} screenshot ${i + 1}`}
                                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                      </Carousel>
                    ) : (
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{screenshot.title}</h3>
                  <p className="text-muted-foreground">{screenshot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="py-16 border-b border-border bg-card/50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              <span className="font-mono text-primary text-sm">// features</span>
              <br />
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-muted/30 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="text-primary mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsibilities Section */}
        <div className="py-16 border-b border-border bg-card/50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              <span className="font-mono text-primary text-sm">// contributions</span>
              <br />
              My Responsibilities
            </h2>

            <div className="max-w-3xl">
              <ul className="space-y-4">
                {responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg">Get in Touch</Button>
              </a>
              <a href="/#projects" className="hidden sm:block">
                <Button size="lg" variant="outline">
                  View All Projects
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
