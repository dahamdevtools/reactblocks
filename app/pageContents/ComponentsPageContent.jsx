"use client";

import { componentsData, getCategories } from "@/data/component-data";
import { useMemo, useState } from "react";
import SideMenu from "../components/layouts/SideMenu";
import Header from "../components/layouts/Header";
import ComponentSection from "../components/showcase/ComponentSection";
import Footer from "../components/layouts/Footer";

export default function ComponentsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = getCategories();

  const filteredComponents = useMemo(() => {
    let filtered = componentsData;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((comp) => comp.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (comp) =>
          comp.name.toLowerCase().includes(query) ||
          comp.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const groupedComponents = useMemo(() => {
    const groups = {};
    filteredComponents.forEach((comp) => {
      if (!groups[comp.category]) {
        groups[comp.category] = [];
      }
      groups[comp.category].push(comp);
    });
    return groups;
  }, [filteredComponents]);

  return (
    <div className="w-full h-screen flex flex-col items-center overflow-hidden p-0 lg:p-3.5">
      <div className="w-full h-full flex justify-center gap-3.5">
        <SideMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <div className="w-full max-w-7xl h-full flex flex-col justify-between gap-3.5">
          <div className="w-full h-full flex flex-col gap-3.5">
            <Header
              value={searchQuery}
              onChange={setSearchQuery}
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            <div className="w-full h-full flex flex-col justify-between border-y border-b-0 lg:border-b overflow-y-scroll scrollbar-none lg:scrollbar-default p-3.5 gap-3.5 border-neutral-200 dark:border-neutral-800">
              {filteredComponents.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-fit h-fit flex flex-col justify-center gap-2.5">
                    <h3 className="text-center text-2xl font-semibold">
                      No Components Found
                    </h3>
                    <p className="text-center">
                      Try adjusting your search or filter
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-3.5">
                  {Object.entries(groupedComponents).map(
                    ([category, components]) => (
                      <ComponentSection
                        key={category}
                        category={category}
                        components={components}
                      />
                    )
                  )}
                </div>
              )}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
