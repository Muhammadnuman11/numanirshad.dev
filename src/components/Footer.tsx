import { personalInfo } from "@/config/personalInfo";
import { GithubIcon, Heart, LinkedinIcon, MailIcon } from "lucide-react";
import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{"<"}</span>
            Built with <Heart size={14} className="inline text-destructive" /> by {personalInfo.name}
            <span className="text-primary">{" />"}</span>
          </div>

          <div className="flex items-center gap-6">
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <MailIcon size={18} />
              </a>
            )}
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            {personalInfo.social.fiverr && (
              <a
                href={personalInfo.social.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transiion-colors"
                aria-label="Fiverr"
              >
                <TbBrandFiverr  size={18} />
              </a>
            )}
            {personalInfo.social.upwork && (
              <a
                href={personalInfo.social.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Upwork"
              >
                <TbBrandUpwork size={22} />
              </a>
            )}
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
