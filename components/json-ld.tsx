interface ProjectFrontmatter {
  title: string;
  subtitle?: string;
  abstract: string;
  date: string;
  tech?: string[];
  repo?: string;
  demo?: string;
  banner?: string;
}

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Devanshu Kumar Prasad",
    url: "https://krdevanshu.com",
    jobTitle: "Full Stack & ML Engineer",
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
      "https://github.com/krdevanshu06",
      "https://linkedin.com/in/krdevanshu06",
    ],
    knowsAbout: [
      "Machine Learning",
      "Distributed Systems",
      "Go (Programming Language)",
      "Next.js",
      "TensorFlow"
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
      name: "Devanshu Kumar Prasad",
    },
    datePublished: project.date,
    url: `https://krdevanshu.com/projects/${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
