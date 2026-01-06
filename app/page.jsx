import HomePageContent from "./pageContents/HomePageContent";

export const metadata = {
  title: "ReactBlocks",
  description:
    "Accelerate your development with fully responsive, production-ready React components. Built with Tailwind CSS. No setup, no dependencies.",
  alternates: {
    canonical: "https://react-blocks.dev",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
