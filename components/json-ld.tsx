import { ProjectFrontmatter } from "@/lib/project";
import { SITE_CONFIG } from "@/lib/config";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.url,
    jobTitle: "Data Associate & AI Engineer",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Ganga Institute of Technology and Management",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Government Polytechnic Adityapur",
      }
    ],
    sameAs: [
      SITE_CONFIG.author.github,
      SITE_CONFIG.author.linkedin,
    ],
    knowsAbout: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Python",
      "TensorFlow",
      "Backend Engineering",
      "Distributed Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ProjectJsonLd({ project, slug }: { project: ProjectFrontmatter; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.abstract,
    programmingLanguage: project.tech,
    codeRepository: project.repo,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.url,
    },
    datePublished: project.date,
    url: `${SITE_CONFIG.url}/projects/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
