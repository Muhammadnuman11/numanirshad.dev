import { personalInfo } from "@/config/personalInfo";

export const About = () => {
    return (
      <section id="about" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="font-mono text-primary text-sm">// about me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Who I <span className="text-gradient">Am</span>
              </h2>
            </div>
  
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image/Avatar Area */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden relative">
                  {/* Code Pattern Background */}
                  <div className="absolute inset-0 font-mono text-[8px] leading-tight text-primary/10 p-4 overflow-hidden">
                    {Array(50).fill(null).map((_, i) => (
                      <div key={i}>
                        {`const component${i} = () => { return <div>Hello World</div> };`}
                      </div>
                    ))}
                  </div>
                  
                  {/* Avatar Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg border border-primary/20 animate-pulse-glow" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-lg border border-accent/20" />
              </div>
  
              {/* Content */}
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  My approach combines clean, maintainable code with stunning user interfaces. 
                  I believe that great software should not only work flawlessly but also provide an exceptional user experience.
                </p>
  
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-xs text-muted-foreground font-mono">Years Exp</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-xs text-muted-foreground font-mono">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground font-mono">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  