import ContactPageContent from "@/app/pageContents/ContactPageContent";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the ReactBlocks team. We're here to help with your component needs.",
  alternates: {
    canonical: "https://react-blocks.dev/contact",
  },
};

export default function Contact() {
  return <ContactPageContent />;
}
