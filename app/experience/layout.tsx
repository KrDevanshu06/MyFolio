import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Devanshu Kumar Prasad",
  description: "A chronological log of professional roles, internships, and academic milestones.",
};

// CRITICAL: This default export MUST exist for the page to work
export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}