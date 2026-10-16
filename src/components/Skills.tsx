import { Database, Server, Layout, Code, Palette, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "text-primary",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "HTML5", "CSS3/SCSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-accent",
    skills: ["Node.js", "Express.js", "REST APIs", "Firebase", "Python (Basics)", "JWT Auth"],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-primary",
    skills: ["MongoDB", "Firebase", "Data Modeling", "Query Optimization"],
  },
  {
    title: "Deployment & Integrations",
    icon: GitBranch,
    color: "text-accent",
    skills: ["Vercel", "DigitalOcean", "CI/CD", "Stripe", "Saferpay", "WordPress"],
  },
  {
    title: "UI/UX",
    icon: Palette,
    color: "text-primary",
    skills: ["Figma", "Responsive Design", "Pixel-perfect UI", "Component Design", "Animations"],
  },
  {
    title: "AI / Automation",
    icon: Code,
    color: "text-accent",
    skills: ["n8n", "Ollama", "Python Automation", "Machine Learning Fundamentals", "Workflow Automation"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* MERN Stack Highlight */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["Next.js", "React.js", "MongoDB", "Node.js", "Express.js", "Stripe", "Saferpay", "n8n", "Python", "Firebase"].map((tech, index) => (
            <div
              key={tech}
              className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full font-mono text-primary font-semibold hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-muted/50 ${category.color}`}>
                  <category.icon width={20} height={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
