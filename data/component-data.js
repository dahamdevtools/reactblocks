"use client";

import { useState } from "react";

import ActiveAvatar from "@/app/components/ui/avatars/ActiveAvatar";
import AvatarGroup from "@/app/components/ui/avatars/AvatarGroup";
import AvatarGroupWithCount from "@/app/components/ui/avatars/AvatarGroupWithCount";
import BasicAvatar from "@/app/components/ui/avatars/BasicAvatar";
import BusyAvatar from "@/app/components/ui/avatars/BusyAvatar";
import InactiveAvatar from "@/app/components/ui/avatars/InactiveAvatar";
import PendingAvatar from "@/app/components/ui/avatars/PendingAvatar";
import SquareAvatar from "@/app/components/ui/avatars/SquareAvatar";
import ActiveBadge from "@/app/components/ui/badges/ActiveBadge";
import DualToneSlider from "@/app/components/ui/sliders/DualToneSlider";
import SingleToneSlider from "@/app/components/ui/sliders/SingleToneSlider";
import SquareThumbSlider from "@/app/components/ui/sliders/SquareThumbSlider";
import SteppedDotSlider from "@/app/components/ui/sliders/SteppedDotSlider";
import ValueDisplaySlider from "@/app/components/ui/sliders/ValueDisplaySlider";
import BasicToggleSwitch from "@/app/components/ui/toggleSwitches/BasicToggleSwitch";
import SquareToggleSwitch from "@/app/components/ui/toggleSwitches/SquareToggleSwitch";
import DualHandleRangeSlider from "@/app/components/ui/sliders/DualHandleRangeSlider";
import LabeledRangeSlider from "@/app/components/ui/sliders/LabeledRangeSlider";
import DualHandleTooltipSlider from "@/app/components/ui/sliders/DualHandleTooltipSlider";
import PendingBadge from "@/app/components/ui/badges/PendingBadge";
import BusyBadge from "@/app/components/ui/badges/BusyBadge";
import InactiveBadge from "@/app/components/ui/badges/InactiveBadge";
import BrowserMockup from "@/app/components/ui/mockups/BrowserMockup";
import BrowserMockupWithUrl from "@/app/components/ui/mockups/BrowserMockupWithUrl";
import BrowserMockupWithTabs from "@/app/components/ui/mockups/BrowserMockupWithTabs";
import AnimatedBusyBadge from "@/app/components/ui/badges/BusyBadgePing";
import AnimatedInactiveBadge from "@/app/components/ui/badges/InactiveBadgePing";
import AnimatedPendingBadge from "@/app/components/ui/badges/PendingBadgePing";
import AnimatedActiveBadge from "@/app/components/ui/badges/ActiveBadgePing";
import FloatingCardAccordion from "@/app/components/ui/accordions/FloatingCardAccordion";
import ContainedAccordion from "@/app/components/ui/accordions/ContainedAccordion";
import MinimalAccordion from "@/app/components/ui/accordions/MinimalAccordion";
import BorderedAccordion from "@/app/components/ui/accordions/BorderedAccordion";
import QuoteFirstTestimonial from "@/app/components/ui/testimonials/QuoteFirstTestimonial";
import AuthorFirstTestimonial from "@/app/components/ui/testimonials/AuthorFirstTestimonial";
import CenteredTestimonial from "@/app/components/ui/testimonials/CenteredTestimonial";
import FloatingAvatarTestimonial from "@/app/components/ui/testimonials/FloatingAvatarTestimonial";
import FeaturedTestimonial from "@/app/components/ui/testimonials/FeaturedTestimonial";
import CallToActionBanner from "@/app/components/ui/layouts/CallToActionBanner";
import VerticalProductImageGallery from "@/app/components/ui/imageGalleries/VerticalProductImageGallery";
import HorizontalProductImageGallery from "@/app/components/ui/imageGalleries/HorizontalProductImageGallery";
import LoginForm from "@/app/components/ui/auth/LoginForm";

export const componentsData = [
  // avatars
  {
    id: "basic-avatar",
    name: "Basic Avatar",
    description:
      "A circular avatar image with clean rounded corners. Simple and versatile for user profiles.",
    category: "Avatars",
    githubLink: "https://google.com",
    tags: ["avatar", "profile", "image"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function BasicAvatar() {
  return (
    <img
      src="img_url"
      alt="avatar"
      className="w-16 aspect-square rounded-full object-cover object-center"
    />
  );
}`,
      },
    ],
    component: () => <BasicAvatar />,
  },
  {
    id: "square-avatar",
    name: "Square Avatar",
    description:
      "A rounded square avatar with softer corners. Modern alternative to circular avatars.",
    category: "Avatars",
    githubLink: "https://google.com",
    tags: ["avatar", "square", "profile"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function SquareAvatar() {
  return (
    <img
      src="img_url"
      alt="avatar"
      className="w-16 aspect-square rounded-2xl object-cover object-center"
    />
  );
}`,
      },
    ],
    component: () => <SquareAvatar />,
  },
  {
    id: "avatar-group",
    name: "Avatar Group",
    description:
      "Multiple overlapping avatars displayed in a row. Perfect for showing team members or participants.",
    category: "Avatars",
    githubLink: "https://google.com",
    tags: ["avatar", "group", "team"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function AvatarGroup() {
  return (
    <div className="w-fit flex -space-x-6">
      <img
        src="img_url"
        alt="avatar"
        className="w-14 aspect-square rounded-full object-cover object-center border-4 border-neutral-50 dark:border-neutral-900"
      />
      <img
        src="img_url"
        alt="avatar"
        className="w-14 aspect-square rounded-full object-cover object-center border-4 border-neutral-50 dark:border-neutral-900"
      />
      <img
        src="img_url"
        alt="avatar"
        className="w-14 aspect-square rounded-full object-cover object-center border-4 border-neutral-50 dark:border-neutral-900"
      />
      <img
        src="img_url"
        alt="avatar"
        className="w-14 aspect-square rounded-full object-cover object-center border-4 border-neutral-50 dark:border-neutral-900"
      />
    </div>
  );
}`,
      },
    ],
    component: () => <AvatarGroup />,
  },
  {
    id: "avatar-group-with-count",
    name: "Avatar Group With Count",
    description:
      "Overlapping avatars with a counter badge showing additional members. Ideal for large groups.",
    category: "Avatars",
    githubLink: "https://google.com",
    tags: ["avatar", "group", "team", "count"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function AvatarGroupWithCount() {
  return (
    <div className="w-fit flex -space-x-6">
      <img
        src="img_url"
        alt="avatar"
        className="w-14 aspect-square rounded-full object-cover object-center border-4 border-neutral-50 dark:border-neutral-900"
      />
      <img
        src="img_url"
        alt="avatar"
        className="w-14 aspect-square rounded-full object-cover object-center border-4 border-neutral-50 dark:border-neutral-900"
      />
      <img
        src="img_url"
        alt="avatar"
        className="w-14 aspect-square rounded-full object-cover object-center border-4 border-neutral-50 dark:border-neutral-900"
      />
      <div className="w-14 aspect-square rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 border-4 border-neutral-50 dark:border-neutral-900">
        <span className="font-extrabold text-neutral-500">+99</span>
      </div>
    </div>
  );
}`,
      },
    ],
    component: () => <AvatarGroupWithCount />,
  },
  {
    id: "active-avatar",
    name: "Active Avatar",
    description:
      "Avatar with a green status indicator showing the user is online or active.",
    category: "Avatars",
    githubLink: "https://google.com",
    tags: ["avatar", "status", "online"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function ActiveAvatar() {
  return (
    <div className="w-16 aspect-square rounded-full flex items-center justify-center relative">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 bg-emerald-300 dark:bg-emerald-500 border-4 border-neutral-50 dark:border-neutral-900"></span>
      <img
        src="img_url"
        alt="avatar"
        className="w-full aspect-square rounded-full object-cover object-center"
      />
    </div>
  );
}`,
      },
    ],
    component: () => <ActiveAvatar />,
  },
  {
    id: "pending-avatar",
    name: "Pending Avatar",
    description:
      "Avatar with an orange status indicator showing the user is away or pending.",
    category: "Avatars",
    githubLink: "https://google.com",
    tags: ["avatar", "status", "away", "pending"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function PendingAvatar() {
  return (
    <div className="w-16 aspect-square rounded-full flex items-center justify-center relative">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 bg-orange-300 dark:bg-orange-500 border-4 border-neutral-50 dark:border-neutral-900"></span>
      <img
        src="img_url"
        alt="avatar"
        className="w-16 aspect-square rounded-full object-cover object-center"
      />
    </div>
  );
}`,
      },
    ],
    component: () => <PendingAvatar />,
  },
  {
    id: "busy-avatar",
    name: "Busy Avatar",
    description:
      "Avatar with a red status indicator showing the user is busy or do not disturb.",
    category: "Avatars",
    githubLink: "https://google.com",
    tags: ["avatar", "status", "busy"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function BusyAvatar() {
  return (
    <div className="w-16 aspect-square rounded-full flex items-center justify-center relative">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 bg-rose-300 dark:bg-rose-500 border-4 border-neutral-50 dark:border-neutral-900"></span>
      <img
        src="img_url"
        alt="avatar"
        className="w-16 aspect-square rounded-full object-cover object-center"
      />
    </div>
  );
}`,
      },
    ],
    component: () => <BusyAvatar />,
  },
  {
    id: "inactive-avatar",
    name: "Inactive Avatar",
    description:
      "Avatar with a gray status indicator showing the user is offline or inactive.",
    category: "Avatars",
    githubLink: "https://google.com",
    tags: ["avatar", "status", "offline", "inactive"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function InactiveAvatar() {
  return (
    <div className="w-16 aspect-square rounded-full flex items-center justify-center relative">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 bg-neutral-200 dark:bg-neutral-800 border-4 border-neutral-50 dark:border-neutral-900"></span>
      <img
        src="img_url"
        alt="avatar"
        className="w-16 aspect-square rounded-full object-cover object-center"
      />
    </div>
  );
}`,
      },
    ],
    component: () => <InactiveAvatar />,
  },
  // accordions
  {
    id: "floating-card-accordion",
    name: "Floating Card Accordion",
    description:
      "Accordion with floating card style items and smooth animations. Clean shadows and hover effects.",
    category: "Accordions",
    githubLink: "https://google.com",
    tags: ["accordion", "card", "animated"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `"use client";
        
        import * as Accordion from "@radix-ui/react-accordion";
        import { useState } from "react";
        
        export default function FloatingCardAccordion() {
          const [openItem, setOpenItem] = useState("item-1");
        
          const accordionData = [
            {
              id: "item-1",
              trigger: "What is ReactBlocks?",
              content:
                "A curated collection of beautiful, copy-paste React components built with Tailwind CSS. No dependencies, just clean code ready to use.",
            },
            {
              id: "item-2",
              trigger: "How do I use these components?",
              content:
                "Simply browse the library, find a component you like, click the view code button to view the implementation, and copy-paste it into your project.",
            },
            {
              id: "item-3",
              trigger: "Do I need to install anything?",
              content:
                "It depends on the component. Just make sure you have Tailwind CSS in your project, then copy and paste the component code directly. If there are any mentioned packages, those packages should be installed.",
            },
            {
              id: "item-4",
              trigger: "Are these components responsive?",
              content:
                "Yes! All components are built mobile-first and fully responsive. They work beautifully across all screen sizes from phones to large displays.",
            },
            {
              id: "item-5",
              trigger: "Can I customize the components?",
              content:
                "Absolutely! All components use Tailwind classes, making them easy to customize. Simply modify the classes or add your own styling.",
            },
          ];
        
          return (
            <div className="max-w-2xl w-full">
              <style>{\`\
                @keyframes accordion-down {
                  from {
                    height: 0;
                    opacity: 0;
                  }
                  to {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                }
        
                @keyframes accordion-up {
                  from {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                  to {
                    height: 0;
                    opacity: 0;
                  }
                }
        
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
        
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
        
                .accordion-item {
                  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
                }
        
                .accordion-content[data-state="open"] {
                  animation: accordion-down 400ms cubic-bezier(0.87, 0, 0.13, 1);
                }
        
                .accordion-content[data-state="closed"] {
                  animation: accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1);
                }
        
                .accordion-content[data-state="open"] .accordion-content-inner {
                  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards;
                }
              \`}</style>
        
              <Accordion.Root
                className="w-full space-y-4"
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
              >
                {accordionData.map((item, index) => (
                  <Accordion.Item
                    key={item.id}
                    className="bg-neutral-50 dark:bg-neutral-900 shadow-xl shadow-neutral-200/50 dark:shadow-neutral-950/50 accordion-item rounded-xl overflow-hidden transition-all duration-400ms ease-cubic-bezier(0.4,0,0.2,1)"
                    value={item.id}
                    style={{
                      animationDelay: \`\${index * 100}ms\`,
                    }}
                  >
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="flex flex-1 gap-3 items-center justify-between py-6 px-8 text-left group transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) cursor-pointer">
                        <span className="group-hover:text-indigo-400 dark:group-hover:text-indigo-300 font-semibold text-md sm:text-xl transition-colors duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                          {item.trigger}
                        </span>
                        <div className="bg-neutral-200/50 dark:bg-neutral-800/50 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-800/30 flex items-center justify-center shrink-0 w-10 h-10 rounded-xl transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                          <div className="relative w-4 h-4">
                            <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute top-1/2 left-1/2 w-full h-0.5 rounded-full -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:w-0" />
                            <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute left-1/2 top-1/2 w-0.5 h-full rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:rotate-90" />
                          </div>
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
        
                    <Accordion.Content className="accordion-content overflow-hidden">
                      <div className="text-neutral-400 accordion-content-inner px-8 pb-6 leading-relaxed transition-all duration-200 ease-in-out">
                        {item.content}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          );
        }`,
      },
      {
        name: "requirements",
        language: "jsx",
        code: `npm install @radix-ui/react-accordion`,
      },
    ],
    component: () => <FloatingCardAccordion />,
  },
  {
    id: "contained-accordion",
    name: "Contained Accordion",
    description:
      "Accordion with items grouped in a container background. Compact design with subtle spacing.",
    category: "Accordions",
    githubLink: "https://google.com",
    tags: ["accordion", "contained", "grouped"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `"use client";
        
        import * as Accordion from "@radix-ui/react-accordion";
        import { useState } from "react";
        
        export default function ContainedAccordion() {
          const [openItem, setOpenItem] = useState("item-1");
        
          const accordionData = [
            {
              id: "item-1",
              trigger: "What is ReactBlocks?",
              content:
                "A curated collection of beautiful, copy-paste React components built with Tailwind CSS. No dependencies, just clean code ready to use.",
            },
            {
              id: "item-2",
              trigger: "How do I use these components?",
              content:
                "Simply browse the library, find a component you like, click the view code button to view the implementation, and copy-paste it into your project.",
            },
            {
              id: "item-3",
              trigger: "Do I need to install anything?",
              content:
                "It depends on the component. Just make sure you have Tailwind CSS in your project, then copy and paste the component code directly. If there are any mentioned packages, those packages should be installed.",
            },
            {
              id: "item-4",
              trigger: "Are these components responsive?",
              content:
                "Yes! All components are built mobile-first and fully responsive. They work beautifully across all screen sizes from phones to large displays.",
            },
            {
              id: "item-5",
              trigger: "Can I customize the components?",
              content:
                "Absolutely! All components use Tailwind classes, making them easy to customize. Simply modify the classes or add your own styling.",
            },
          ];
        
          return (
            <div className="max-w-2xl w-full">
              <style>{\`\
                @keyframes accordion-down {
                  from {
                    height: 0;
                    opacity: 0;
                  }
                  to {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                }
        
                @keyframes accordion-up {
                  from {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                  to {
                    height: 0;
                    opacity: 0;
                  }
                }
        
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
        
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
        
                .accordion-item {
                  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
                }
        
                .accordion-content[data-state="open"] {
                  animation: accordion-down 400ms cubic-bezier(0.87, 0, 0.13, 1);
                }
        
                .accordion-content[data-state="closed"] {
                  animation: accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1);
                }
        
                .accordion-content[data-state="open"] .accordion-content-inner {
                  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards;
                }
              \`}</style>
        
              <Accordion.Root
                className="bg-neutral-200/50 dark:bg-neutral-950/50 w-full space-y-2 p-2 rounded-2xl"
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
              >
                {accordionData.map((item, index) => (
                  <Accordion.Item
                    key={item.id}
                    className="bg-neutral-50 dark:bg-neutral-900 accordion-item rounded-xl overflow-hidden transition-all duration-400ms ease-cubic-bezier(0.4,0,0.2,1)"
                    value={item.id}
                    style={{
                      animationDelay: \`\${index * 100}ms\`,
                    }}
                  >
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="flex flex-1 gap-3 items-center justify-between py-6 px-8 pe-6 text-left group transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) cursor-pointer">
                        <span className="group-hover:text-indigo-400 dark:group-hover:text-indigo-300 font-semibold text-md sm:text-xl transition-colors duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                          {item.trigger}
                        </span>
                        <div className="bg-neutral-200/50 dark:bg-neutral-800/50 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-800/30 flex items-center justify-center shrink-0 w-10 h-10 rounded-xl transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                          <div className="relative w-4 h-4">
                            <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute top-1/2 left-1/2 w-full h-0.5 rounded-full -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:w-0" />
                            <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute left-1/2 top-1/2 w-0.5 h-full rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:rotate-90" />
                          </div>
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
        
                    <Accordion.Content className="accordion-content overflow-hidden">
                      <div className="text-neutral-400 accordion-content-inner px-8 pb-6 leading-relaxed transition-all duration-200 ease-in-out">
                        {item.content}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          );
        }`,
      },
      {
        name: "requirements",
        language: "jsx",
        code: `npm install @radix-ui/react-accordion`,
      },
    ],
    component: () => <ContainedAccordion />,
  },
  {
    id: "minimal-accordion",
    name: "Minimal Accordion",
    description:
      "Clean accordion with simple border dividers. No backgrounds, just clean lines and spacing.",
    category: "Accordions",
    githubLink: "https://google.com",
    tags: ["accordion", "minimal", "simple"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `"use client";
        
        import * as Accordion from "@radix-ui/react-accordion";
        import { useState } from "react";
        
        export default function MinimalAccordion() {
          const [openItem, setOpenItem] = useState("item-1");
        
          const accordionData = [
            {
              id: "item-1",
              trigger: "What is ReactBlocks?",
              content:
                "A curated collection of beautiful, copy-paste React components built with Tailwind CSS. No dependencies, just clean code ready to use.",
            },
            {
              id: "item-2",
              trigger: "How do I use these components?",
              content:
                "Simply browse the library, find a component you like, click the view code button to view the implementation, and copy-paste it into your project.",
            },
            {
              id: "item-3",
              trigger: "Do I need to install anything?",
              content:
                "It depends on the component. Just make sure you have Tailwind CSS in your project, then copy and paste the component code directly. If there are any mentioned packages, those packages should be installed.",
            },
            {
              id: "item-4",
              trigger: "Are these components responsive?",
              content:
                "Yes! All components are built mobile-first and fully responsive. They work beautifully across all screen sizes from phones to large displays.",
            },
            {
              id: "item-5",
              trigger: "Can I customize the components?",
              content:
                "Absolutely! All components use Tailwind classes, making them easy to customize. Simply modify the classes or add your own styling.",
            },
          ];
        
          return (
            <div className="max-w-2xl w-full">
              <style>{\`\
                @keyframes accordion-down {
                  from {
                    height: 0;
                    opacity: 0;
                  }
                  to {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                }
        
                @keyframes accordion-up {
                  from {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                  to {
                    height: 0;
                    opacity: 0;
                  }
                }
        
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
        
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
        
                .accordion-item {
                  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
                }
        
                .accordion-content[data-state="open"] {
                  animation: accordion-down 400ms cubic-bezier(0.87, 0, 0.13, 1);
                }
        
                .accordion-content[data-state="closed"] {
                  animation: accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1);
                }
        
                .accordion-content[data-state="open"] .accordion-content-inner {
                  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards;
                }
              \`}</style>
        
              <Accordion.Root
                className="w-full"
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
              >
                {accordionData.map((item, index) => (
                  <Accordion.Item
                    key={item.id}
                    className="accordion-item transition-all duration-400ms ease-cubic-bezier(0.4,0,0.2,1) border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
                    value={item.id}
                    style={{
                      animationDelay: \`\${index * 100}ms\`,
                    }}
                  >
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="flex flex-1 gap-3 items-center justify-between py-6 text-left group transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) cursor-pointer">
                        <span className="group-hover:text-indigo-400 dark:group-hover:text-indigo-300 font-semibold text-md sm:text-xl transition-colors duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                          {item.trigger}
                        </span>
                        <div className="bg-neutral-200/50 dark:bg-neutral-800/50 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-800/30 flex items-center justify-center shrink-0 w-10 h-10 rounded-xl transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                          <div className="relative w-4 h-4">
                            <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute top-1/2 left-1/2 w-full h-0.5 rounded-full -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:w-0" />
                            <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute left-1/2 top-1/2 w-0.5 h-full rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:rotate-90" />
                          </div>
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
        
                    <Accordion.Content className="accordion-content overflow-hidden">
                      <div className="text-neutral-400 accordion-content-inner pb-6 leading-relaxed transition-all duration-200 ease-in-out">
                        {item.content}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          );
        }`,
      },
      {
        name: "requirements",
        language: "jsx",
        code: `npm install @radix-ui/react-accordion`,
      },
    ],
    component: () => <MinimalAccordion />,
  },
  {
    id: "bordered-accordion",
    name: "Bordered Accordion",
    description:
      "Accordion with a full border container and divided items. Structured and organized appearance.",
    category: "Accordions",
    githubLink: "https://google.com",
    tags: ["accordion", "bordered", "structured", "sharp"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `"use client";
        
        import * as Accordion from "@radix-ui/react-accordion";
        import { useState } from "react";
        
        export default function BorderedAccordion() {
          const [openItem, setOpenItem] = useState("item-1");
        
          const accordionData = [
            {
              id: "item-1",
              trigger: "What is ReactBlocks?",
              content:
                "A curated collection of beautiful, copy-paste React components built with Tailwind CSS. No dependencies, just clean code ready to use.",
            },
            {
              id: "item-2",
              trigger: "How do I use these components?",
              content:
                "Simply browse the library, find a component you like, click the view code button to view the implementation, and copy-paste it into your project.",
            },
            {
              id: "item-3",
              trigger: "Do I need to install anything?",
              content:
                "It depends on the component. Just make sure you have Tailwind CSS in your project, then copy and paste the component code directly. If there are any mentioned packages, those packages should be installed.",
            },
            {
              id: "item-4",
              trigger: "Are these components responsive?",
              content:
                "Yes! All components are built mobile-first and fully responsive. They work beautifully across all screen sizes from phones to large displays.",
            },
            {
              id: "item-5",
              trigger: "Can I customize the components?",
              content:
                "Absolutely! All components use Tailwind classes, making them easy to customize. Simply modify the classes or add your own styling.",
            },
          ];
        
          return (
            <div className="max-w-2xl w-full">
              <style>{\`\
                @keyframes accordion-down {
                  from {
                    height: 0;
                    opacity: 0;
                  }
                  to {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                }
        
                @keyframes accordion-up {
                  from {
                    height: var(--radix-accordion-content-height);
                    opacity: 1;
                  }
                  to {
                    height: 0;
                    opacity: 0;
                  }
                }
        
                @keyframes slideInUp {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
        
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
        
                .accordion-item {
                  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
                }
        
                .accordion-content[data-state="open"] {
                  animation: accordion-down 400ms cubic-bezier(0.87, 0, 0.13, 1);
                }
        
                .accordion-content[data-state="closed"] {
                  animation: accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1);
                }
        
                .accordion-content[data-state="open"] .accordion-content-inner {
                  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards;
                }
              \`}</style>
        
              <Accordion.Root
                className="w-full border border-neutral-200 dark:border-neutral-800"
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
              >
                {accordionData.map((item, index) => (
                  <Accordion.Item
                    key={item.id}
                    className="accordion-item transition-all duration-400ms ease-cubic-bezier(0.4,0,0.2,1) border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
                    value={item.id}
                    style={{
                      animationDelay: \`\${index * 100}ms\`,
                    }}
                  >
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="flex flex-1 gap-3 items-center justify-between py-6 px-8 pe-6 text-left group transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) cursor-pointer">
                        <span className="group-hover:text-indigo-400 dark:group-hover:text-indigo-300 font-semibold text-md sm:text-xl transition-colors duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                          {item.trigger}
                        </span>
                        <div className="bg-neutral-200/50 dark:bg-neutral-800/50 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-800/30 flex items-center justify-center shrink-0 w-10 h-10 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1)">
                          <div className="relative w-4 h-4">
                            <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute top-1/2 left-1/2 w-full h-0.5 rounded-full -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:w-0" />
                            <span className="bg-neutral-500 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-300 absolute left-1/2 top-1/2 w-0.5 h-full rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-cubic-bezier(0.4,0,0.2,1) group-data-[state=open]:rotate-90" />
                          </div>
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
        
                    <Accordion.Content className="accordion-content overflow-hidden">
                      <div className="text-neutral-400 accordion-content-inner pb-6 px-8 leading-relaxed transition-all duration-200 ease-in-out">
                        {item.content}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          );
        }`,
      },
      {
        name: "requirements",
        language: "jsx",
        code: `npm install @radix-ui/react-accordion`,
      },
    ],
    component: () => <BorderedAccordion />,
  },
  // badges
  {
    id: "active-badge",
    name: "Active Badge",
    description:
      "A badge with a green status indicator dot. Shows active or online status.",
    category: "Badges",
    githubLink: "https://google.com",
    tags: ["badge", "status", "indicator", "online"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function ActiveBadge() {
  return (
    <div className="w-fit h-fit px-5 py-2 rounded-full relative bg-neutral-200 dark:bg-neutral-800">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-emerald-300 dark:bg-emerald-500 border-4 border-neutral-50 dark:border-neutral-900"></span>
      Active
    </div>
  );
}`,
      },
    ],
    component: () => <ActiveBadge />,
  },
  {
    id: "pending-badge",
    name: "Pending Badge",
    description:
      "A badge with an orange status indicator dot. Shows pending or away status.",
    category: "Badges",
    githubLink: "https://google.com",
    tags: ["badge", "status", "indicator", "away"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function PendingBadge() {
  return (
    <div className="w-fit h-fit px-5 py-2 rounded-full relative bg-neutral-200 dark:bg-neutral-800">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-orange-300 dark:bg-orange-500 border-4 border-neutral-50 dark:border-neutral-900"></span>
      Pending
    </div>
  );
}`,
      },
    ],
    component: () => <PendingBadge />,
  },
  {
    id: "busy-badge",
    name: "Busy Badge",
    description:
      "A badge with a red status indicator dot. Shows busy or do not disturb status.",
    category: "Badges",
    githubLink: "https://google.com",
    tags: ["badge", "status", "indicator"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function BusyBadge() {
  return (
    <div className="w-fit h-fit px-5 py-2 rounded-full relative bg-neutral-200 dark:bg-neutral-800">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-rose-300 dark:bg-rose-500 border-4 border-neutral-50 dark:border-neutral-900"></span>
      Busy
    </div>
  );
}`,
      },
    ],
    component: () => <BusyBadge />,
  },
  {
    id: "inactive-badge",
    name: "Inactive Badge",
    description:
      "A badge with a gray status indicator dot. Shows offline or inactive status.",
    category: "Badges",
    githubLink: "https://google.com",
    tags: ["badge", "status", "indicator", "offline"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function InactiveBadge() {
  return (
    <div className="w-fit h-fit px-5 py-2 rounded-full relative bg-neutral-200 dark:bg-neutral-800">
      <span className="w-5 rounded-full aspect-square absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-neutral-200 dark:bg-neutral-800 border-4 border-neutral-50 dark:border-neutral-900"></span>
      Inactive
    </div>
  );
}`,
      },
    ],
    component: () => <InactiveBadge />,
  },
  {
    id: "animated-active-badge",
    name: "Animated Active Badge",
    description:
      "A badge with animated ping effect showing active or online status. Eye-catching indicator.",
    category: "Badges",
    githubLink: "https://google.com",
    tags: ["badge", "status", "indicator", "online", "animated"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function AnimatedActiveBadge() {
  return (
    <div className="w-fit h-fit p-2 pe-5 gap-2 flex items-center rounded-full overflow-visible bg-neutral-100 dark:bg-neutral-800">
      <span className="h-full aspect-square flex items-center justify-center rounded-full overflow-visible relative">
        <span className="w-3 absolute aspect-square rounded-full animate-ping bg-emerald-300 dark:bg-emerald-500"></span>
        <span className="w-3 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-500"></span>
      </span>
      <p className="text-neutral-500 dark:text-neutral-300">Active</p>
    </div>
  );
}`,
      },
    ],
    component: () => <AnimatedActiveBadge />,
  },
  {
    id: "animated-pending-badge",
    name: "Animated Pending Badge",
    description:
      "A badge with animated ping effect showing pending or away status. Smooth pulsing animation.",
    category: "Badges",
    githubLink: "https://google.com",
    tags: ["badge", "status", "indicator", "away", "animated"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function AnimatedPendingBadge() {
  return (
    <div className="w-fit h-fit p-2 pe-5 gap-2 flex items-center rounded-full overflow-visible bg-neutral-100 dark:bg-neutral-800">
      <span className="h-full aspect-square flex items-center justify-center rounded-full overflow-visible relative">
        <span className="w-3 absolute aspect-square rounded-full animate-ping bg-orange-300 dark:bg-orange-500"></span>
        <span className="w-3 aspect-square rounded-full bg-orange-300 dark:bg-orange-500"></span>
      </span>
      <p className="text-neutral-500 dark:text-neutral-300">Pending</p>
    </div>
  );
}`,
      },
    ],
    component: () => <AnimatedPendingBadge />,
  },
  {
    id: "animated-busy-badge",
    name: "Animated Busy Badge",
    description:
      "A badge with a green status indicator dot. Shows active or online status.",
    category: "Badges",
    githubLink: "https://google.com",
    tags: ["badge", "status", "indicator", "animated"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function AnimatedBusyBadge() {
  return (
    <div className="w-fit h-fit p-2 pe-5 gap-2 flex items-center rounded-full overflow-visible bg-neutral-100 dark:bg-neutral-800">
      <span className="h-full aspect-square flex items-center justify-center rounded-full overflow-visible relative">
        <span className="w-3 absolute aspect-square rounded-full animate-ping bg-rose-300 dark:bg-rose-500"></span>
        <span className="w-3 aspect-square rounded-full bg-rose-300 dark:bg-rose-500"></span>
      </span>
      <p className="text-neutral-500 dark:text-neutral-300">Busy</p>
    </div>
  );
}`,
      },
    ],
    component: () => <AnimatedBusyBadge />,
  },
  {
    id: "animated-inactive-badge",
    name: "Animated Inactive Badge",
    description:
      "A badge with a green status indicator dot. Shows active or online status.",
    category: "Badges",
    githubLink: "https://google.com",
    tags: ["badge", "status", "indicator", "offline", "animated"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function AnimatedInactiveBadge() {
  return (
    <div className="w-fit h-fit p-2 pe-5 gap-2 flex items-center rounded-full overflow-visible bg-neutral-100 dark:bg-neutral-800">
      <span className="h-full aspect-square flex items-center justify-center rounded-full overflow-visible relative">
        <span className="w-3 absolute aspect-square rounded-full animate-ping bg-neutral-300 dark:bg-neutral-500"></span>
        <span className="w-3 aspect-square rounded-full bg-neutral-300 dark:bg-neutral-500"></span>
      </span>
      <p className="text-neutral-500 dark:text-neutral-300">Inactive</p>
    </div>
  );
}`,
      },
    ],
    component: () => <AnimatedInactiveBadge />,
  },
  // sliders
  {
    id: "single-tone-slider",
    name: "Single Tone Slider",
    description:
      "A minimalist range slider with a dual-ring thumb and solid color track for clear visual feedback.",
    category: "Sliders",
    githubLink: "https://google.com",
    tags: ["slider", "input", "range", "basic"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { useState } from "react";
        
        export default function SingleToneSlider({ defaultValue = 50 }) {
          const [value, setValue] = useState(defaultValue);
        
          return (
            <input
              type="range"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-2 rounded-full outline-0 appearance-none bg-indigo-500/10 dark:bg-indigo-600/30
                 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
                 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:aspect-square [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
            />
          );
        }`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `<SingleToneSlider defaultValue={50} />`,
      },
    ],
    component: () => <SingleToneSlider />,
  },
  {
    id: "square-thumb-slider",
    name: "Square Thumb Slider",
    description:
      "A contemporary slider with a square thumb instead of the traditional circle. Ideal for modern, geometric designs.",
    category: "Sliders",
    githubLink: "https://google.com",
    tags: ["slider", "input", "range", "square"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { useState } from "react";
        
        export default function SquareThumbSlider({ defaultValue = 50 }) {
          const [value, setValue] = useState(defaultValue);
        
          return (
            <input
              type="range"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-2 outline-0 appearance-none bg-indigo-500/10 dark:bg-indigo-600/30
                 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:cursor-pointer  [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
                 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:aspect-square [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
            />
          );
        }`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `<SquareThumbSlider defaultValue={50} />`,
      },
    ],
    component: () => <SquareThumbSlider />,
  },
  {
    id: "dual-handle-range-slider",
    name: "Dual Handle Range Slider",
    description:
      "Select minimum and maximum values with independent handles. Features gap constraint to prevent overlap.",
    category: "Sliders",
    githubLink: "https://google.com",
    tags: ["slider", "input", "range", "min", "max", "handle"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { useEffect, useRef, useState } from "react";
        
        export default function SingleToneRangeSlider({
          min = 0,
          max = 100,
          gap = 5,
          defaultMin = 20,
          defaultMax = 80,
        }) {
          const [minValue, setMinValue] = useState(defaultMin);
          const [maxValue, setMaxValue] = useState(defaultMax);
          const [isDraggingMin, setIsDraggingMin] = useState(false);
          const [isDraggingMax, setIsDraggingMax] = useState(false);
          const sliderRef = useRef(null);
        
          const handleMouseDown = (handle) => {
            if (handle === "min") {
              setIsDraggingMin(true);
            } else {
              setIsDraggingMax(true);
            }
          };
        
          const handleMouseMove = (e) => {
            if (!isDraggingMin && !isDraggingMax) return;
        
            const slider = sliderRef.current;
            const rect = slider.getBoundingClientRect();
            const percentage = ((e.clientX - rect.left) / rect.width) * 100;
            const value = Math.round((percentage / 100) * (max - min) + min);
        
            if (isDraggingMin) {
              const newMin = Math.max(min, Math.min(value, maxValue - gap));
              setMinValue(newMin);
            } else if (isDraggingMax) {
              const newMax = Math.min(max, Math.max(value, minValue + gap));
              setMaxValue(newMax);
            }
          };
        
          const handleMouseUp = () => {
            setIsDraggingMin(false);
            setIsDraggingMax(false);
          };
        
          useEffect(() => {
            const handleMove = (e) => handleMouseMove(e);
            const handleUp = () => handleMouseUp();
        
            if (isDraggingMin || isDraggingMax) {
              document.addEventListener("mousemove", handleMove);
              document.addEventListener("mouseup", handleUp);
              document.body.style.userSelect = "none";
              document.body.style.cursor = "pointer";
        
              return () => {
                document.removeEventListener("mousemove", handleMove);
                document.removeEventListener("mouseup", handleUp);
                document.body.style.userSelect = "";
                document.body.style.cursor = "";
              };
            }
          }, [isDraggingMin, isDraggingMax, minValue, maxValue]);
        
          const minPercent = ((minValue - min) / (max - min)) * 100;
          const maxPercent = ((maxValue - min) / (max - min)) * 100;
        
          return (
            <div className="relative w-full py-4">
              <div className="relative h-2" ref={sliderRef}>
                {/* Track background */}
                <div className="absolute w-full h-2 rounded-full bg-indigo-500/10 dark:bg-indigo-600/30"></div>
        
                {/* Active range */}
                <div
                  className="absolute h-2 rounded-full bg-indigo-300 dark:bg-indigo-400"
                  style={{
                    left: \`\${minPercent}%\`,
                    width: \`\${maxPercent - minPercent}%\`,
                  }}
                ></div>
        
                {/* Min handle */}
                <div
                  className="absolute w-6 h-6 bg-indigo-400 dark:bg-indigo-500 border-4 border-indigo-200 dark:border-indigo-300 rounded-full cursor-pointer active:cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2"
                  style={{ left: \`\${minPercent}%\` }}
                  onMouseDown={() => handleMouseDown("min")}
                ></div>
        
                {/* Max handle */}
                <div
                  className="absolute w-6 h-6 bg-indigo-400 dark:bg-indigo-500 border-4 border-indigo-200 dark:border-indigo-300 rounded-full cursor-pointer active:cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2"
                  style={{ left: \`\${maxPercent}%\` }}
                  onMouseDown={() => handleMouseDown("max")}
                ></div>
              </div>
            </div>
          );
        }`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `<DualHandleRangeSlider min={0} max={100} gap={5} defaultMin={20} defaultMax={80} />`,
      },
    ],
    component: () => <DualHandleRangeSlider />,
  },
  {
    id: "dual-tone-slider",
    name: "Dual Tone Slider",
    description:
      "A slider with gradient-filled track that visualizes progress. Features dual-ring thumb and smooth color transition.",
    category: "Sliders",
    githubLink: "https://google.com",
    tags: ["slider", "input", "range", "gradient", "progress"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { useState } from "react";
        
        export default function DualToneSlider({ defaultValue = 50 }) {
          const [value, setValue] = useState(defaultValue);
        
          return (
            <div className="w-full relative">
              <div className="w-full h-2 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <div
                  className="h-full bg-linear-to-r from-indigo-100 dark:from-indigo-900 to-indigo-300 dark:to-indigo-400"
                  style={{ width: \`\${value}%\` }}
                />
              </div>
              <input
                type="range"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="absolute top-0 w-full h-2 bg-transparent outline-0 appearance-none
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
                   [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
              />
            </div>
          );
        }`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `<DualToneSlider defaultValue={50} />`,
      },
    ],
    component: () => <DualToneSlider />,
  },
  {
    id: "labeled-range-slider",
    name: "Labeled Range Slider",
    description:
      "Gradient-filled slider with visible min, max, and current value labels. Perfect for precise value selection.",
    category: "Sliders",
    githubLink: "https://google.com",
    tags: ["slider", "input", "range", "labeled", "values"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { useState } from "react";
        
        export default function LabeledRangeSlider({
          defaultValue = 50,
          minValue = 20,
          maxValue = 80,
        }) {
          const [value, setValue] = useState(defaultValue);
          const min = minValue;
          const max = maxValue;
        
          const percentage = ((value - min) / (max - min)) * 100;
        
          return (
            <div className="w-full flex flex-col gap-3">
              <div className="relative">
                <div className="w-full h-2 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                  <div
                    className="h-full bg-linear-to-r from-indigo-100 dark:from-indigo-900 to-indigo-300 dark:to-indigo-400"
                    style={{ width: \`\${percentage}%\` }}
                  />
                </div>
                <input
                  type="range"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  min={min}
                  max={max}
                  className="absolute top-0 w-full h-2 bg-transparent outline-0 appearance-none
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
                   [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-5 font-semibold text-neutral-400">
                <span>{min}</span>
                <span>{value}</span>
                <span>{max}</span>
              </div>
            </div>
          );
        }`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `<LabeledRangeSlider defaultValue={50} minValue={20} maxValue={80} />`,
      },
    ],
    component: () => <LabeledRangeSlider />,
  },
  {
    id: "value-display-slider",
    name: "Value Display Slider",
    description:
      "An interactive slider with a floating badge that displays the current value above the thumb in real-time.",
    category: "Sliders",
    githubLink: "https://google.com",
    tags: ["slider", "input", "range", "tooltip"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { useState } from "react";
        
        export default function ValueDisplaySlider({ defaultValue = 50 }) {
          const [value, setValue] = useState(defaultValue);
        
          return (
            <div className="w-full relative">
              <input
                type="range"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full h-2 rounded-full outline-0 appearance-none bg-indigo-500/10 dark:bg-indigo-600/30
                 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
                 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:aspect-square [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
              />
              <div
                className="absolute -top-10 bg-indigo-400 dark:bg-indigo-500 text-neutral-50 px-3 py-1 rounded-full text-sm font-semibold"
                style={{ left: \`\calc(\${value}% - 20px)\` }}
              >
                {value}
              </div>
            </div>
          );
        }`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `<ValueDisplaySlider defaultValue={50} />`,
      },
    ],
    component: () => <ValueDisplaySlider />,
  },
  {
    id: "dual-handle-tooltip-slider",
    name: "Dual Handle Tooltip Slider",
    description:
      "Dual-handle range slider with floating badges showing min and max values in real-time. Includes gap constraint.",
    category: "Sliders",
    githubLink: "https://google.com",
    tags: ["slider", "input", "range", "tooltip", "dual"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { useEffect, useRef, useState } from "react";
        
        export default function DualHandleTooltipSlider({
          min = 0,
          max = 100,
          gap = 5,
          defaultMin = 20,
          defaultMax = 80,
        }) {
          const [minValue, setMinValue] = useState(defaultMin);
          const [maxValue, setMaxValue] = useState(defaultMax);
          const [isDraggingMin, setIsDraggingMin] = useState(false);
          const [isDraggingMax, setIsDraggingMax] = useState(false);
          const sliderRef = useRef(null);
        
          const handleMouseDown = (handle) => {
            if (handle === "min") {
              setIsDraggingMin(true);
            } else {
              setIsDraggingMax(true);
            }
          };
        
          const handleMouseMove = (e) => {
            if (!isDraggingMin && !isDraggingMax) return;
        
            const slider = sliderRef.current;
            const rect = slider.getBoundingClientRect();
            const percentage = ((e.clientX - rect.left) / rect.width) * 100;
            const value = Math.round((percentage / 100) * (max - min) + min);
        
            if (isDraggingMin) {
              const newMin = Math.max(min, Math.min(value, maxValue - gap));
              setMinValue(newMin);
            } else if (isDraggingMax) {
              const newMax = Math.min(max, Math.max(value, minValue + gap));
              setMaxValue(newMax);
            }
          };
        
          const handleMouseUp = () => {
            setIsDraggingMin(false);
            setIsDraggingMax(false);
          };
        
          useEffect(() => {
            const handleMove = (e) => handleMouseMove(e);
            const handleUp = () => handleMouseUp();
        
            if (isDraggingMin || isDraggingMax) {
              document.addEventListener("mousemove", handleMove);
              document.addEventListener("mouseup", handleUp);
              document.body.style.userSelect = "none";
              document.body.style.cursor = "pointer";
        
              return () => {
                document.removeEventListener("mousemove", handleMove);
                document.removeEventListener("mouseup", handleUp);
                document.body.style.userSelect = "";
                document.body.style.cursor = "";
              };
            }
          }, [isDraggingMin, isDraggingMax, minValue, maxValue]);
        
          const minPercent = ((minValue - min) / (max - min)) * 100;
          const maxPercent = ((maxValue - min) / (max - min)) * 100;
        
          return (
            <div className="relative w-full py-4">
              <div className="relative h-2" ref={sliderRef}>
                {/* Track background */}
                <div className="absolute w-full h-2 rounded-full bg-indigo-500/10 dark:bg-indigo-600/30"></div>
        
                {/* Active range */}
                <div
                  className="absolute h-2 rounded-full bg-indigo-300 dark:bg-indigo-400"
                  style={{
                    left: \`\${minPercent}%\`,
                    width: \`\${maxPercent - minPercent}%\`,
                  }}
                ></div>
        
                {/* Min handle */}
                <div
                  className="absolute w-6 h-6 flex items-center justify-center bg-indigo-400 dark:bg-indigo-500 border-4 border-indigo-200 dark:border-indigo-300 rounded-full cursor-pointer active:cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2"
                  style={{ left: \`\${minPercent}%\` }}
                  onMouseDown={() => handleMouseDown("min")}
                >
                  <span className="transform -translate-y-9 flex items-center justify-center bg-indigo-400 dark:bg-indigo-500 text-neutral-50 px-3 py-1 rounded-full text-sm font-semibold">
                    {minValue}
                  </span>
                </div>
        
                {/* Max handle */}
                <div
                  className="absolute w-6 h-6 flex items-center justify-center bg-indigo-400 dark:bg-indigo-500 border-4 border-indigo-200 dark:border-indigo-300 rounded-full cursor-pointer active:cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2"
                  style={{ left: \`\${maxPercent}%\` }}
                  onMouseDown={() => handleMouseDown("max")}
                >
                  <span className="transform -translate-y-9 flex items-center justify-center bg-indigo-400 dark:bg-indigo-500 text-neutral-50 px-3 py-1 rounded-full text-sm font-semibold">
                    {maxValue}
                  </span>
                </div>
              </div>
            </div>
          );
        }`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `<DualHandleTooltipSlider min={0} max={100} gap={5} defaultMin={20} defaultMax={80} />`,
      },
    ],
    component: () => <DualHandleTooltipSlider />,
  },
  {
    id: "stepped-dot-slider",
    name: "Stepped Dot Slider",
    description:
      "A stepped slider with visual dot indicators that light up as you progress. Perfect for ratings or level selection.",
    category: "Sliders",
    githubLink: "https://google.com",
    tags: ["slider", "input", "range", "steps", "discrete"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { useState } from "react";
        
        export default function SteppedDotSlider({
          defaultValue = 50,
          steps = [0, 25, 50, 75, 100],
        }) {
          const [value, setValue] = useState(defaultValue);
        
          const stepSize = steps.length > 1 ? steps[1] - steps[0] : 25;
        
          return (
            <div className="w-full flex items-center justify-center relative">
              <div className="w-full flex items-center justify-between relative px-1">
                <div className="absolute left-0 w-full px-1">
                  <div className="w-full h-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
                </div>
                {steps.map((step) => (
                  <div
                    key={step}
                    className={\`\w-4 h-4 rounded-full z-10 transition-colors duration-100 \${
                      \step <= value
                        ? "bg-indigo-300 dark:bg-indigo-500"
                        : "bg-neutral-200 dark:bg-neutral-800"
                    }\`}
                  ></div>
                ))}
              </div>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                step={stepSize}
                min={steps[0]}
                max={steps[steps.length - 1]}
                type="range"
                className="absolute z-20 w-full h-2 rounded-full outline-0 appearance-none bg-transparent
                 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:aspect-square [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-400 dark:[&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-indigo-200 dark:[&::-webkit-slider-thumb]:border-indigo-300
                 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:aspect-square [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:bg-indigo-400 dark:[&::-moz-range-thumb]:bg-indigo-400 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-indigo-200 dark:[&::-moz-range-thumb]:border-indigo-300"
              />
            </div>
          );
        }`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `<SteppedDotSlider defaultValue={50} steps={[0, 25, 50, 75, 100]} />`,
      },
    ],
    component: () => <SteppedDotSlider />,
  },
  // toggle switches
  {
    id: "basic-toggle-switch",
    name: "Basic Toggle Switch",
    description:
      "A standard toggle switch with a circular thumb that slides between on/off states. Clean and minimal design.",
    category: "Toggle Switches",
    githubLink: "https://google.com",
    tags: ["toggle", "switch", "checkbox"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function BasicToggleSwitch({
  id,
  value = false,
  onChange = () => {},
}) {
  return (
    <label htmlFor={id} className="cursor-pointer inline-block">
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <span className="w-11 h-6 rounded-full flex items-center bg-neutral-200 dark:bg-neutral-800 transition-colors duration-200">
        <span
          className={\`\w-4 aspect-square rounded-full bg-neutral-50 dark:bg-neutral-700 transition-transform duration-100 \${
            value ? "translate-x-6" : "translate-x-1"
          }\`}
        ></span>
      </span>
    </label>
  );
}`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `// parent component
        
        "use client";
        
        import BasicToggleSwitch from "./BasicToggleSwitch";
        import { useState } from "react";
        
        export default function UsageExample() {
          const [isChecked, setIsChecked] = useState(false);
        
          return (
            <BasicToggleSwitch
              id={"basic-toggle-switch"}
              value={isChecked}
              onChange={setIsChecked}
            />
          );
        }`,
      },
    ],
    component: () => {
      const [isBasicToggleSwitchChecked, setIsBasicToggleSwitchChecked] =
        useState(false);
      return (
        <BasicToggleSwitch
          id={"basic-toggle-switch"}
          value={isBasicToggleSwitchChecked}
          onChange={setIsBasicToggleSwitchChecked}
        />
      );
    },
  },
  {
    id: "square-toggle-switch",
    name: "Square Toggle Switch",
    description:
      "A toggle switch with a square thumb instead of the traditional circle. Perfect for modern, geometric designs.",
    category: "Toggle Switches",
    githubLink: "https://google.com",
    tags: ["toggle", "switch", "checkbox", "square"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function SquareToggleSwitch({
  id,
  value = false,
  onChange = () => {},
}) {
  return (
    <label htmlFor={id} className="cursor-pointer inline-block">
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <span className="w-11 h-6 flex items-center bg-neutral-200 dark:bg-neutral-800 transition-colors duration-200">
        <span
          className={\`\w-4 aspect-square bg-neutral-50 dark:bg-neutral-700 transition-transform duration-100 \${
            value ? "translate-x-6" : "translate-x-1"
          }\`}
        ></span>
      </span>
    </label>
  );
}`,
      },
      {
        name: "usage",
        language: "jsx",
        code: `// parent component
        
        "use client";
        
        import SquareToggleSwitch from "./SquareToggleSwitch";
        import { useState } from "react";
        
        export default function UsageExample() {
          const [isChecked, setIsChecked] = useState(false);
        
          return (
            <SquareToggleSwitch
              id={"basic-toggle-switch"}
              value={isChecked}
              onChange={setIsChecked}
            />
          );
        }`,
      },
    ],
    component: () => {
      const [isSquareToggleSwitchChecked, setIsSquareToggleSwitchChecked] =
        useState(false);
      return (
        <SquareToggleSwitch
          id={"square-toggle-switch"}
          value={isSquareToggleSwitchChecked}
          onChange={setIsSquareToggleSwitchChecked}
        />
      );
    },
  },
  // mockups
  {
    id: "browser-mockup",
    name: "Browser Mockup",
    description:
      "A simple browser window mockup with macOS-style title bar buttons. Perfect for showcasing web content.",
    category: "Mockups",
    githubLink: "https://google.com",
    tags: ["mockup", "browser", "window"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function BrowserMockup() {
  return (
    <div className="w-full h-fit rounded-2xl flex flex-col bg-neutral-200/50 dark:bg-neutral-800/60">
      <div className="w-full h-fit flex gap-1.5 items-center justify-start p-4">
        <div className="w-3.5 aspect-square rounded-full bg-rose-300 dark:bg-rose-600"></div>
        <div className="w-3.5 aspect-square rounded-full bg-yellow-300 dark:bg-yellow-600"></div>
        <div className="w-3.5 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-600"></div>
      </div>
      <div className="w-full h-fit flex items-center justify-center p-2.5 pt-0">
        <div className="w-full h-fit p-20 flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <p className="text-2xl text-neutral-500">Hello</p>
        </div>
      </div>
    </div>
  );
}`,
      },
    ],
    component: () => <BrowserMockup />,
  },
  {
    id: "browser-mockup-with-url",
    name: "Browser Mockup With URL",
    description:
      "A browser mockup with a centered URL bar and title bar buttons. Clean design for web previews.",
    category: "Mockups",
    githubLink: "https://google.com",
    tags: ["mockup", "browser", "url"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function BrowserMockupWithUrl() {
  return (
    <div className="w-full h-fit rounded-2xl flex flex-col bg-neutral-200/50 dark:bg-neutral-800/60">
      <div className="w-full h-fit flex items-center justify-between gap-4 px-4 py-2.5">
        <div className="w-fit h-fit flex gap-1.5 items-center justify-start">
          <div className="w-3.5 aspect-square rounded-full bg-rose-300 dark:bg-rose-600"></div>
          <div className="w-3.5 aspect-square rounded-full bg-yellow-300 dark:bg-yellow-600"></div>
          <div className="w-3.5 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-600"></div>
        </div>
        <div className="w-full h-fit px-3 py-1.5 rounded-lg text-sm text-nowrap text-ellipsis line-clamp-1 text-neutral-400 dark:text-neutral-600 bg-neutral-200 dark:bg-neutral-800">
          https://google.com
        </div>
        <div className="w-14"></div>
      </div>
      <div className="w-full h-fit flex items-center justify-center p-2.5 pt-0">
        <div className="w-full h-fit p-20 flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <p className="text-2xl text-neutral-500">Hello</p>
        </div>
      </div>
    </div>
  );
}`,
      },
    ],
    component: () => <BrowserMockupWithUrl />,
  },
  {
    id: "browser-mockup-with-tabs",
    name: "Browser Mockup With Tabs",
    description:
      "A browser mockup featuring a realistic tab design with rounded edges and URL display. Great for multi-tab presentations.",
    category: "Mockups",
    githubLink: "https://google.com",
    tags: ["mockup", "browser", "tab", "url"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function BrowserMockupWithTabs() {
  return (
    <div className="w-full h-fit rounded-2xl flex flex-col bg-[#f0f0f0] dark:bg-[#202020]">
      <div className="w-full h-fit flex items-center justify-start gap-4 px-4 pt-2.5 overflow-hidden">
        <div className="w-fit h-fit flex shrink-0 gap-1.5 items-center justify-start z-10">
          <div className="w-3.5 aspect-square rounded-full bg-rose-300 dark:bg-rose-600"></div>
          <div className="w-3.5 aspect-square rounded-full bg-yellow-300 dark:bg-yellow-600"></div>
          <div className="w-3.5 aspect-square rounded-full bg-emerald-300 dark:bg-emerald-600"></div>
        </div>
        <div className="w-full max-w-40 min-w-0 h-fit rounded-t-xl relative bg-neutral-200 dark:bg-neutral-800">
          <span className="w-5 h-full flex shrink-0 absolute right-0 translate-x-full bg-neutral-200 dark:bg-neutral-800">
            <span className="w-full h-full rounded-bl-xl bg-[#f0f0f0] dark:bg-[#202020]"></span>
          </span>
          <span className="w-5 h-full flex shrink-0 absolute left-0 -translate-x-full bg-neutral-200 dark:bg-neutral-800">
            <span className="w-full h-full rounded-br-xl bg-[#f0f0f0] dark:bg-[#202020]"></span>
          </span>
          <div className="w-full h-fit p-2.5 flex items-center gap-2.5">
            <div className="w-3.5 aspect-square flex shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-900/50"></div>
            <p className="text-sm text-nowrap text-ellipsis line-clamp-1 text-neutral-400 dark:text-neutral-600">
              https://google.com
            </p>
          </div>
        </div>
        <div className="w-14 flex shrink-0"></div>
      </div>
      <div className="w-full h-fit flex items-center justify-center p-2.5 pt-0">
        <div className="w-full h-fit p-20 flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800">
          <p className="text-2xl text-neutral-500">Hello</p>
        </div>
      </div>
    </div>
  );
}`,
      },
    ],
    component: () => <BrowserMockupWithTabs />,
  },
  // layouts
  {
    id: "call-to-action-banner",
    name: "Call To Action Banner",
    description:
      "A centered call-to-action component featuring a headline, descriptive text, a primary action button, and feature highlights separated by a divider.",
    category: "Layouts",
    githubLink: "https://google.com",
    tags: ["cta", "banner", "marketing"],
    columns: 1,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function CallToActionBanner() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-5 px-8 pt-10 sm:pt-13 pb-8 rounded-3xl bg-neutral-200/50 dark:bg-neutral-800/60">
      <h3 className="text-2xl sm:text-3xl font-semibold text-center">
        Ready to transform your workflow?
      </h3>
      <p className="text-lg sm:text-xl text-center">
        Join thousands of teams already building faster and smarter.
      </p>
      <button className="w-fit h-fit px-8 py-3.5 rounded-2xl cursor-pointer bg-neutral-300 dark:bg-neutral-900">
        Get Started
      </button>
      <div className="w-full h-fit flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-5">
        <p className="sm:flex-1 text-center sm:text-right text-neutral-500">
          Start your free trial today
        </p>
        <div className="w-1/2 sm:w-0.5 h-0.5 sm:h-10 shrink-0 bg-neutral-200 dark:bg-neutral-800"></div>
        <p className="sm:flex-1 text-center sm:text-left text-neutral-500">
          No credit card required
        </p>
      </div>
    </div>
  );
}`,
      },
    ],
    component: () => <CallToActionBanner />,
  },
  // testimonials
  {
    id: "quote-first-testimonial",
    name: "Quote First Testimonial",
    description:
      "Testimonial card with quote displayed first, followed by author info. Clean horizontal layout.",
    category: "Testimonials",
    githubLink: "https://google.com",
    tags: ["testimonial", "card", "review"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function QuoteFirstTestimonial() {
  return (
    <div className="w-full h-fit flex flex-col gap-6 p-6 pt-8 rounded-3xl bg-[#f0f0f0] dark:bg-[#202020]">
      <p className="px-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sint
        tenetur quibusdam modi ipsum maiores dicta deserunt fugit excepturi
        voluptatum.
      </p>
      <div className="w-full h-fit flex items-center gap-5">
        <img
          src="img_url"
          alt="avatar"
          className="w-12 aspect-square rounded-full object-cover object-center"
        />
        <div className="w-full h-fit flex flex-col">
          <p className="text-ellipsis line-clamp-1 text-neutral-600">
            Lorem, ipsum.
          </p>
          <p className="text-xl text-ellipsis line-clamp-1">
            Lorem, ipsum dolor.
          </p>
        </div>
      </div>
    </div>
  );
}`,
      },
    ],
    component: () => <QuoteFirstTestimonial />,
  },
  {
    id: "author-first-testimonial",
    name: "Author First Testimonial",
    description:
      "Testimonial card showing author details first, then the quote. Great for credibility.",
    category: "Testimonials",
    githubLink: "https://google.com",
    tags: ["testimonial", "card", "review"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function AuthorFirstTestimonial() {
          return (
            <div className="w-full h-fit flex flex-col gap-6 p-6 pb-7 rounded-3xl bg-[#f0f0f0] dark:bg-[#202020]">
              <div className="w-full h-fit flex items-center gap-5">
                <img
                  src="img_url"
                  alt="avatar"
                  className="w-12 aspect-square rounded-full object-cover object-center"
                />
                <div className="w-full h-fit flex flex-col">
                  <p className="text-ellipsis line-clamp-1 text-neutral-600">
                    Lorem, ipsum.
                  </p>
                  <p className="text-xl text-ellipsis line-clamp-1">
                    Lorem, ipsum dolor.
                  </p>
                </div>
              </div>
              <p className="px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sint
                tenetur quibusdam modi ipsum maiores dicta deserunt fugit excepturi
                voluptatum. Lorem, ipsum.
              </p>
            </div>
          );
        }`,
      },
    ],
    component: () => <AuthorFirstTestimonial />,
  },
  {
    id: "centered-testimonial",
    name: "Centered Testimonial",
    description:
      "Centered testimonial card with avatar at top, quote in middle, and author at bottom.",
    category: "Testimonials",
    githubLink: "https://google.com",
    tags: ["testimonial", "centered", "card", "review"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function CenteredTestimonial() {
          return (
            <div className="w-full h-fit flex flex-col items-center gap-6 p-6 pt-8 rounded-3xl bg-[#f0f0f0] dark:bg-[#202020]">
              <img
                src="img_url"
                alt="avatar"
                className="w-16 aspect-square rounded-full object-cover object-center"
              />
              <p className="px-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui
                pariatur sint similique cupiditate est quaerat odio harum aliquam hic?
              </p>
              <div className="w-full h-fit flex flex-col">
                <p className="text-ellipsis line-clamp-1 text-center text-neutral-600">
                  Lorem, ipsum.
                </p>
                <p className="text-xl text-ellipsis line-clamp-1 text-center">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>
          );
        }`,
      },
    ],
    component: () => <CenteredTestimonial />,
  },
  {
    id: "floating-avatar-testimonial",
    name: "Floating Avatar Testimonial",
    description:
      "Testimonial card with a floating avatar at top, followed by the author and quote, and the ratings at the bottom.",
    category: "Testimonials",
    githubLink: "https://google.com",
    tags: ["testimonial", "centered", "card", "review", "rating"],
    columns: 3,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import { FaStar } from "react-icons/fa6";
        
        export default function FloatingAvatarTestimonial() {
          return (
            <div className="w-full h-fit flex flex-col items-center gap-6 p-6 rounded-3xl relative bg-[#f0f0f0] dark:bg-[#202020]">
              <img
                src="img_url"
                alt="avatar"
                className="w-20 aspect-square rounded-full object-cover object-center absolute top-0 -translate-y-1/2 border-6 border-neutral-50 dark:border-neutral-900"
              />
              <div className="w-full h-fit flex flex-col pt-10">
                <p className="text-ellipsis line-clamp-1 text-center text-neutral-600">
                  Lorem, ipsum.
                </p>
                <p className="text-xl text-ellipsis line-clamp-1 text-center">
                  Lorem, ipsum dolor.
                </p>
              </div>
              <p className="px-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui
                pariatur sint similique cupiditate est quaerat odio harum aliquam hic?
              </p>
              <div className="w-full h-fit flex items-center justify-center text-lg gap-1 pb-1.5">
                <FaStar className="text-orange-300 dark:text-yellow-600" />
                <FaStar className="text-orange-300 dark:text-yellow-600" />
                <FaStar className="text-orange-300 dark:text-yellow-600" />
                <FaStar className="text-orange-300 dark:text-yellow-600" />
                <FaStar className="text-neutral-300 dark:text-neutral-700" />
              </div>
            </div>
          );
        }`,
      },
      {
        name: "requirements",
        language: "jsx",
        code: `npm i react-icons`,
      },
    ],
    component: () => <FloatingAvatarTestimonial />,
  },
  {
    id: "featured-testimonial",
    name: "Featured Testimonial",
    description:
      "Centered testimonial card which can showcase featured reviews followed by an avatar and author details.",
    category: "Testimonials",
    githubLink: "https://google.com",
    tags: ["testimonial", "centered", "card", "review", "featured"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `export default function FeaturedTestimonial() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-6 p-10 pb-8 rounded-3xl bg-[#f0f0f0] dark:bg-[#202020]">
      <p className="text-3xl font-semibold text-center">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, neque"
      </p>
      <img
        src="img_url"
        alt="avatar"
        className="w-16 aspect-square rounded-full object-cover object-center"
      />
      <div className="w-full h-fit flex flex-col">
        <p className="text-ellipsis line-clamp-1 text-center text-neutral-600">
          Lorem, ipsum.
        </p>
        <p className="text-xl text-ellipsis line-clamp-1 text-center">
          Lorem, ipsum dolor.
        </p>
      </div>
    </div>
  );
}`,
      },
    ],
    component: () => <FeaturedTestimonial />,
  },
  // product image galleries
  {
    id: "vertical-product-image-gallery",
    name: "Vertical Product Image Gallery",
    description:
      "Product gallery with main image on top and thumbnails below. Includes lightbox with zoom on hover. ",
    category: "Image Galleries",
    githubLink: "https://google.com",
    tags: ["gallery", "product", "lightbox"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `"use client";
        
        import { useState, useEffect, useRef } from "react";
        
        export default function VerticalProductImageGallery() {
          const [currentItem, setCurrentItem] = useState(0);
          const [openLightBox, setOpenLightBox] = useState(false);
          const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
          const [isHoveringImage, setIsHoveringImage] = useState(false);
          const rafRef = useRef(null);
          const targetPosition = useRef({ x: 0.5, y: 0.5 });
        
          useEffect(() => {
            const animate = () => {
              setMousePosition((prev) => ({
                x: prev.x + (targetPosition.current.x - prev.x) * 0.1,
                y: prev.y + (targetPosition.current.y - prev.y) * 0.1,
              }));
              rafRef.current = requestAnimationFrame(animate);
            };
        
            if (isHoveringImage) {
              rafRef.current = requestAnimationFrame(animate);
            }
        
            return () => {
              if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
              }
            };
          }, [isHoveringImage]);
        
          const images = ["img_1_url", "img_2_url", "img_3_url", "img_4_url"];
        
          const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            targetPosition.current = { x, y };
          };
        
          return (
            <>
              <div className="w-full h-fit flex flex-col gap-2">
                <img
                  src={images[currentItem]}
                  onClick={() => setOpenLightBox(true)}
                  alt="image"
                  className="w-full aspect-square rounded-lg sm:rounded-2xl object-cover object-center cursor-pointer"
                />
                <div className="w-full h-fit flex gap-2">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      onClick={() => setCurrentItem(index)}
                      alt="image"
                      className="min-w-0 flex-1 aspect-square rounded-lg sm:rounded-2xl object-cover object-center cursor-pointer"
                    />
                  ))}
                </div>
              </div>
              {openLightBox && (
                <div
                  onClick={() => setOpenLightBox(false)}
                  className="w-screen h-screen fixed top-0 left-0 p-10 sm:p-20 flex items-center justify-center z-50 bg-neutral-500/10 dark:bg-neutral-950/50"
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHoveringImage(true)}
                    onMouseLeave={() => {
                      setIsHoveringImage(false);
                      setMousePosition({ x: 0.5, y: 0.5 });
                      targetPosition.current = { x: 0.5, y: 0.5 };
                    }}
                    className="relative h-full flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={images[currentItem]}
                      alt="image"
                      style={{
                        transform: isHoveringImage ? \`\scale(2)\` : "scale(1)",
                        transformOrigin: \`\${mousePosition.x * 100}% \${
                          mousePosition.y * 100
                        }%\`,
                        transition: isHoveringImage
                          ? "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)"
                          : "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
                      }}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
              )}
            </>
          );
        }`,
      },
    ],
    component: () => <VerticalProductImageGallery />,
  },
  {
    id: "horizontal-product-image-gallery",
    name: "Horizontal Product Image Gallery",
    description:
      "Product gallery with main image on left and vertical thumbnails on right. Features a lightbox with zoom on hover effect.",
    category: "Image Galleries",
    githubLink: "https://google.com",
    tags: ["gallery", "product", "lightbox"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `"use client";
        
        import { useEffect, useRef, useState } from "react";
        
        export default function HorizontalProductImageGallery() {
          const [currentItem, setCurrentItem] = useState(0);
          const [openLightBox, setOpenLightBox] = useState(false);
          const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
          const [isHoveringImage, setIsHoveringImage] = useState(false);
          const rafRef = useRef(null);
          const targetPosition = useRef({ x: 0.5, y: 0.5 });
        
          useEffect(() => {
            const animate = () => {
              setMousePosition((prev) => ({
                x: prev.x + (targetPosition.current.x - prev.x) * 0.1,
                y: prev.y + (targetPosition.current.y - prev.y) * 0.1,
              }));
              rafRef.current = requestAnimationFrame(animate);
            };
        
            if (isHoveringImage) {
              rafRef.current = requestAnimationFrame(animate);
            }
        
            return () => {
              if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
              }
            };
          }, [isHoveringImage]);
        
          const images = [
            "assets/images/image-1-dark.svg",
            "assets/images/image-2-dark.svg",
            "assets/images/image-3-dark.svg",
            "assets/images/image-4-dark.svg",
          ];
        
          const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            targetPosition.current = { x, y };
          };
        
          return (
            <>
              <div className="w-full h-fit grid grid-cols-10 gap-2">
                <img
                  src={images[currentItem]}
                  onClick={() => setOpenLightBox(true)}
                  alt="image"
                  className="w-full col-span-8 aspect-square rounded-lg sm:rounded-2xl object-cover object-center cursor-pointer"
                />
                <div className="w-full col-span-2 flex flex-col gap-2">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      onClick={() => setCurrentItem(index)}
                      alt="image"
                      className="min-w-0 flex-1 aspect-square rounded-lg sm:rounded-2xl object-cover object-center cursor-pointer"
                    />
                  ))}
                </div>
              </div>
              {openLightBox && (
                <div
                  onClick={() => setOpenLightBox(false)}
                  className="w-screen h-screen fixed top-0 left-0 p-10 sm:p-20 flex items-center justify-center z-50 bg-neutral-500/10 dark:bg-neutral-950/50"
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHoveringImage(true)}
                    onMouseLeave={() => {
                      setIsHoveringImage(false);
                      setMousePosition({ x: 0.5, y: 0.5 });
                      targetPosition.current = { x: 0.5, y: 0.5 };
                    }}
                    className="relative h-full flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={images[currentItem]}
                      alt="image"
                      style={{
                        transform: isHoveringImage ? \`\scale(2)\` : "scale(1)",
                        transformOrigin: \`\${mousePosition.x * 100}% \${
                          mousePosition.y * 100
                        }%\`,
                        transition: isHoveringImage
                          ? "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)"
                          : "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
                      }}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
              )}
            </>
          );
        }`,
      },
    ],
    component: () => <HorizontalProductImageGallery />,
  },
  // auth
  {
    id: "login-form",
    name: "Login Form",
    description:
      "Complete login form with email, password toggle, Google sign-in, and forgot password link.",
    category: "Auth",
    githubLink: "https://google.com",
    tags: ["form", "login", "auth"],
    columns: 2,
    files: [
      {
        name: "jsx",
        language: "jsx",
        code: `import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm h-fit flex flex-col items-center gap-8">
      <div className="w-full h-fit flex flex-col pb-4">
        <p className="text-center text-neutral-400">Welcome Back</p>
        <h3 className="text-2xl font-semibold text-center">
          Sign in to your Account
        </h3>
      </div>
      <div className="w-full h-fit flex flex-col gap-5">
        <div className="w-full h-fit flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            spellCheck="false"
            placeholder="Enter your Email..."
            className="w-full h-12 px-6 rounded-full bg-neutral-200/50 dark:bg-neutral-800/60"
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-2">
          <label htmlFor="email">Password</label>
          <div className="w-full h-12 pe-1.5 rounded-full flex items-center bg-neutral-200/50 dark:bg-neutral-800/60">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              spellCheck="false"
              placeholder="Enter your Password..."
              className="w-full px-6"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="w-9 flex items-center justify-center shrink-0 aspect-square rounded-full cursor-pointer text-lg text-neutral-500 bg-neutral-200 dark:bg-neutral-800"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className="w-full h-fit flex items-center justify-end cursor-pointer text-neutral-500">
            Forgot Password?
          </button>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-3">
        <button className="w-full h-fit px-6 py-3 rounded-full cursor-pointer bg-neutral-200 dark:bg-neutral-800">
          Login
        </button>
        <div className="w-full h-fit flex items-center gap-3">
          <div className="w-full h-0.5 bg-neutral-200/50 dark:bg-neutral-800/60"></div>
          <span className="w-fit h-fit flex text-neutral-400 dark:text-neutral-600">
            OR
          </span>
          <div className="w-full h-0.5 bg-neutral-200/50 dark:bg-neutral-800/60"></div>
        </div>
        <button className="w-full h-fit px-6 py-3 rounded-full cursor-pointer bg-neutral-200 dark:bg-neutral-800">
          Continue with Google
        </button>
      </div>
      <p className="w-full text-center">
        <span className="text-neutral-500">Don't have an Account?</span>{" "}
        <Link
          href={"#"}
          className="w-full text-center underline underline-offset-2"
        >
          Sign Up here
        </Link>
      </p>
    </div>
  );
}`,
      },
      {
        name: "requirements",
        language: "jsx",
        code: `npm i react-icons`,
      },
    ],
    component: () => <LoginForm />,
  },
];

export const getCategories = () => {
  const categories = [...new Set(componentsData.map((comp) => comp.category))];
  return categories.sort();
};

export const getCategoryCount = (category) => {
  return componentsData.filter((comp) => comp.category === category).length;
};
