import React from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeftIcon, BarChart3, Code2, ExternalLinkIcon, Shield, Users, Zap, Check } from "lucide-react";

export default function PSBilling() {
    const navigate = useNavigate();
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const techStack = [
        { name: "Next.js 15", category: "Frontend" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "REST APIs", category: "Backend" },
        { name: "MongoDB", category: "Database" },
        { name: "Stripe", category: "Payment" },
        { name: "SaferPay", category: "Payment" },
        { name: "Vercel", category: "Hosting" },
    ];

    const keyFeatures = [
        {
            icon: <Users size={24} />,
            title: "Multi-Tenant Billing",
            description: "Manage multiple merchants and subscribers with isolated billing and tenant settings",
        },
        {
            icon: <BarChart3 size={24} />,
            title: "Subscriptions & Plans",
            description: "Create and manage subscription plans, trial periods, and automated billing cycles",
        },
        {
            icon: <Zap size={24} />,
            title: "Payments Integration",
            description: "Stripe and SaferPay integrations for one-time and recurring payments with webhooks",
        },
        {
            icon: <Shield size={24} />,
            title: "Role-Based Access Control",
            description: "Secure admin and merchant roles with permissions for billing, reporting, and settings",
        },
        {
            icon: <Code2 size={24} />,
            title: "Customer Management",
            description: "Customer profiles, invoices, payment history, and support notes",
        },
        {
            icon: <BarChart3 size={24} />,
            title: "Analytics & Invoicing",
            description: "Revenue dashboards, exportable invoices, and subscription churn metrics",
        },
    ];

    const screenshots = [
        {
            title: "Admin Dashboard",
            description: "Overview dashboard showing revenue, active subscriptions and merchant KPIs",
            image: "/images/ps-billing/ps-billing-admin-dasboard.png",
        },
        {
            title: "Super Admin",
            description: "Super-admin panel to manage merchants, plans and global settings",
            image: "/images/ps-billing/ps-billing-super-admin.png",
        },
        {
            title: "Customers",
            description: "Customer listing with search, filters, and account status",
            image: "/images/ps-billing/ps-billing-customers.png",
        },
        {
            title: "Create Customer",
            description: "Add new customers quickly with profile and billing details",
            image: "/images/ps-billing/ps-billing-create-customer.png",
        },
        {
            title: "Authentication",
            description: "Login, signup and forget-password flows for secure access",
            images: [
                "/images/ps-billing/ps-billing-login.png",
                "/images/ps-billing/ps-billing-forget-password.png",
                "/images/ps-billing/ps-billing-signup.png",
            ],
        },
        {
            title: "Plans & Pricing",
            description: "Plan creation, pricing tiers and subscription management UI",
            images: ["/images/ps-billing/ps-billing-plan.png", "/images/ps-billing/ps-billing-pricing.png"],
        },
        {
            title: "Profile & Settings",
            description: "User profile, billing details and account settings",
            image: "/images/ps-billing/ps-billing-profile.png",
        },
        {
            title: "End User View",
            description: "Customer-facing billing pages and invoices preview",
            image: "/images/ps-billing/ps-billing-enduser.png",
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
                title="PS Billing SaaS Software | Numan Irshad"
                description="A subscription and billing admin panel for SaaS businesses with customer management, plans, invoices, and payments."
                url="https://numanirshad.dev/projects/ps-billing-saas-software"
                image="https://numanirshad.dev/images/ps-billing/ps-billing-admin-dasboard.png"
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
                            PS Billing <span className="text-gradient">SaaS</span>
                            <br />
                            Subscription & Billing Admin
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
                            A SaaS-style subscription and billing platform for merchants. Handles subscription plans, recurring payments, customer management, invoices, and analytics in a centralized admin interface.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#"
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
                                                                loading="lazy"
                                                                decoding="async"
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
                                        <Check size={20} className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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
                            <a href="/" className="hidden sm:block">
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
