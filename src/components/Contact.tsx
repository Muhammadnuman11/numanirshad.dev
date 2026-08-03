import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/config/personalInfo";
import { Send, Loader2, MapPinIcon, MailIcon, PhoneIcon } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      toast({
        title: "Opening Email Client",
        description: "Please send your message through your email client.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error opening email client:", error);
      toast({
        title: "Error",
        description: "Unable to open your email app. Please email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm">// contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's talk about your project</h3>
              <p className="text-muted-foreground">
                I'm always excited to take on new challenges and collaborate on interesting projects.
                Whether you need a full-stack application, API development, or front-end magic, I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MailIcon width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPinIcon width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Location</p>
                  <p className="text-foreground">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <PhoneIcon width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Phone Number</p>
                  <p className="text-foreground">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Terminal Style */}
            <div className="p-4 bg-muted/30 rounded-lg border border-border font-mono text-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> npm run hire-me
              </p>
              <p className="text-green-400 mt-1">
                ✓ Developer available for new projects!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
