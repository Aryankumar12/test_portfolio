"use client";

import { ExpandableCardDemo } from "./ExpandableCardDemo";
import { Tabs } from "./ui/Tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Project",
      value: "project",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Project Tab</p>
          <ExpandableCardDemo></ExpandableCardDemo>
        </div>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Contact Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Background",
      value: "Background",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Background Tab</p>
          <DummyContent />
        </div>
      ),
    },
   
  ];

  return (
    <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-9">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    // Removed the Image element
    <div>
      {/* No content here, image has been removed */}
    </div>
  );
};
