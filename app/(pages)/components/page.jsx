import ComponentsPageContent from "@/app/pageContents/ComponentsPageContent";

export const metadata = {
  title: "Components",
  description:
    "Browse 40+ free, production-ready React components. Copy and paste into your Next.js or React project.",
  alternates: {
    canonical: "https://react-blocks.dev/components",
  },
};

export default function ComponentsPage() {
  return <ComponentsPageContent />;
}
