import { Folder, ExternalLink, GithubIcon, ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    title: "PS Billing Saas Software",
    description: "Built a full-stack SaaS billing system enabling subscription management, recurring payments, customer and invoice management, multi-company support, and secure payment processing through Stripe and Saferpay.",
    tech: ["Next.js 15", "Tailwind CSS", "REST APIs", "MongoDB", "Stripe", "SaferPay"],
    github: "",
    live: "https://ps-billing-software.vercel.app",
    pageLink: "/projects/ps-billing-saas-software",
    imgURL: "/images/ps-billing/ps-billing-login.png",
    featured: true,
  },
  {
    title: "QR Code Dine-In Ordering Admin Panel",
    description: "Developed a modern, responsive Admin Dashboard for a QR Code-based Dine-In Ordering System that enables restaurant owners and administrators to manage merchants, orders, tables, menus, staff, and business settings from a centralized platform.",
    tech: ["Next.js 15", "Tailwind CSS", "REST APIs", "MongoDB"],
    github: "",
    live: "https://qr-code-dine-in-ordering-admin.vercel.app/",
    pageLink: "/projects/qr-code-dine-in-ordering-admin-panel",
    imgURL: "/images/qr-admin/qr-admin-dashboard.png",
    featured: true,
  },
  {
    title: "Grocery Web App",
    description: "A modern grocery web application with a mobile-first responsive design, featuring category browsing, product search, shopping cart, loyalty rewards, and a seamless shopping experience.",
    tech: ["Next.js 15", "Tailwind CSS", "REST APIs"],
    live: "https://grocery-web-app-lime.vercel.app/",
  },
  {
    title: "QR Code Dine-In Ordering Web App",
    description: "A modern, mobile-first QR Code Dine-In Ordering web application that enables customers to scan a QR code, browse the restaurant's digital menu, customize items, and place orders directly from their smartphones—no app installation required.",
    tech: ["Next.js 15", "Tailwind CSS", "REST APIs"],
    live: "https://qr-code-dine-in-ordering.vercel.app/",
  },
  {
    title: "Ace Wave Net",
    description: "Developed a modern, responsive ISP comparison platform that helps users discover the best internet providers through transparent pricing, verified customer reviews, provider comparisons, and a seamless signup experience with an intuitive, SEO-optimized interface.",
    tech: ["Next.js 15", "Tailwind CSS", "REST APIs"],
    live: "https://acewavenet.com/",
  },
  {
    title: "Grisham Engineering",
    description: "Developed a modern, responsive corporate website for Grisham Engineering across Nigeria and West Africa, showcasing the company's industrial products, machine shop services, tool & die solutions, technical expertise, and manufacturing capabilities with an intuitive, SEO-friendly, and user-focused design.",
    tech: ["Next.js 15", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/Muhammadnuman11/grisham-engineering-technologies",
    live: "https://www.grishamengineering.com/",
  },
  {
    title: "Black Knight Taxis",
    description: "Developed a modern, responsive website for Black Knight Taxis in Ponca City, showcasing reliable local and long-distance taxi services with online booking, service coverage, customer testimonials, contact features, and a user-friendly, SEO-optimized interface.",
    tech: ["Next.js 15", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/Muhammadnuman11/black-knight-taxi",
    live: "https://www.blackknighttaxis.com/",
  },
  {
    title: "Ace of Fades Barbershop",
    description: "Developed a modern, responsive website for Ace of Fades Barbershop in Chelsea, Manhattan, New York, showcasing premium barber services, online appointment booking, service pricing, gallery, customer testimonials, and contact information through a clean, SEO-optimized, and user-friendly interface",
    tech: ["Wordpress", "Elementor", "CSS", "HTML"],
    live: "https://aceoffadesbarbershop.org/",
  },
];

export const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Some of my recent projects that showcase my skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:direction-rtl" : ""
                }`}
            >
              {/* Project Image Placeholder */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="aspect-video rounded-xl bg-gradient-card border border-border overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  {project.imgURL ?
                    <img src={project.imgURL} alt={project.title} className="w-full h-full object-cover" />
                    :
                    <iframe src={project.live} title={project.title} className="w-full h-full object-cover" />
                  }
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="font-mono text-primary text-sm">Featured Project</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{project.title}</h3>
                <div className="p-6 bg-muted/30 rounded-lg border border-border mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "" : ""}`}>
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-primary">
                      {t},
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? "" : ""}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <GithubIcon size={20} />
                    </a>
                  )}
                  {project.pageLink ? (
                    <a
                      href={project.pageLink}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      Live <ExternalLinkIcon size={14} />
                    </a>
                  )
                    :
                    (
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live <ExternalLink size={14} />
                      </a>
                    )
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <Folder size={40} className="text-primary" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <GithubIcon width={18} height={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLinkIcon width={18} height={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
