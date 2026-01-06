import AboutPageContent from "@/app/pageContents/AboutPageContent";

export const metadata = {
  title: "About",
  description:
    "Learn about ReactBlocks, our mission to help developers build faster with production-ready React components.",
  alternates: {
    canonical: "https://react-blocks.dev/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
