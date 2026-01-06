import FAQPageContent from "@/app/pageContents/FaqPageContent";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about ReactBlocks components, licensing, and usage.",
  alternates: {
    canonical: "https://react-blocks.dev/faq",
  },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
