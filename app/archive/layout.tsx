import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive | Devanshu Kumar Prasad",
  description: "A categorical log of engineering milestones, research, and certifications.",
};

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
