import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/config/personalInfo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = `${personalInfo.name} - ${personalInfo.title} | ${personalInfo.tagline} | Portfolio`,
  description = personalInfo.bio,
  keywords = `${personalInfo.name}, ${personalInfo.tagline}, MERN developer, Next.js developer, full-stack developer, React developer, Node.js developer, MongoDB, Express, portfolio, web developer, JavaScript developer, TypeScript developer`,
  image = "https://numanirshad.dev/N-brand.svg",
  url = "https://numanirshad.dev",
  type = "website",
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#00ff88" />
      <meta name="author" content="Numan Irshad" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
    </Helmet>
  );
};
