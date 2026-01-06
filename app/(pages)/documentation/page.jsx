import DocumentationPageContent from "@/app/pageContents/DocumentationPageContent";

export const metadata = {
  title: "Documentation",
  description:
    "Complete documentation for ReactBlocks components. Learn how to integrate and customize our React components.",
  alternates: {
    canonical: "https://react-blocks.dev/documentation",
  },
};

export default function DocumentationPage() {
  return <DocumentationPageContent />;
}
