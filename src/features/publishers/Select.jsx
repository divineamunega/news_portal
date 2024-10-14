import { useState } from "react";

const sections = [
  {
    name: "News",
    subsections: [
      "Department News",
      "University Events",
      "Research and Innovation",
      "Alumni Updates",
    ],
  },
  {
    name: "Campus Life",
    subsections: [
      "Campus Tour",
      "Where to Live",
      "Where to Eat",
      "Places to See",
      "Art and Culture",
    ],
  },
  {
    name: "Computer Science",
    subsections: [
      "Department Overview",
      "Research & Projects",
      "Tech Events & Workshops",
      "Student Resources",
    ],
  },
  // Add other sections...
];

const Select = function ({ defaultValue }) {
  // Form with section and subsection dropdowns
  const [selectedSection, setSelectedSection] = useState(
    defaultValue ? defaultValue[0] : "",
  );
  const [selectedSubsection, setSelectedSubsection] = useState(
    defaultValue ? defaultValue[1] : "",
  );

  return (
    <div className="flex w-[60%] gap-4">
      <div className="flex w-1/2 flex-col gap-2">
        <label htmlFor="section" className="text-sm font-bold">
          Section
        </label>
        <select
          id="section"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="rounded border px-4 py-2"
          name="section"
        >
          <option value="">Select a section</option>
          {sections.map((section, index) => (
            <option key={index} value={section.name}>
              {section.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-1/2 flex-col gap-2">
        <label htmlFor="subsection" className="text-sm font-bold">
          Subsection
        </label>
        <select
          id="subsection"
          value={selectedSubsection}
          onChange={(e) => setSelectedSubsection(e.target.value)}
          className="rounded border px-4 py-2"
          disabled={!selectedSection}
          name="subSection"
        >
          <option value="">Select a subsection</option>
          {sections
            .find((section) => section.name === selectedSection)
            ?.subsections.map((subsection, index) => (
              <option key={index} value={subsection}>
                {subsection}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
export default Select;
