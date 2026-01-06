import ChangeLogPageContent from "@/app/pageContents/ChangelogPageContent";

export const metadata = {
  title: "Changelog",
  description:
    "See what's new in ReactBlocks. Latest component releases, updates, and improvements.",
  alternates: {
    canonical: "https://react-blocks.dev/changelog",
  },
};

export default function ChangeLogPage() {
  return <ChangeLogPageContent />;
}
