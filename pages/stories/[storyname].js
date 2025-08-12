import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import BreaksBySection from "../../components/breaks-by-section";
import Layout from "../../components/layout";
import StoryFirstSection from "../../components/story-first-section";

import storypage from "../../data/story-page.json";
import names from "../../data/names.json";

// Map string to index
const storyMap = {
  career: 0,
  health: 1,
  heart: 2,
  spiritual: 3,
  // add more mappings as needed
};

export default function StoryPage() {
  const { query, isReady } = useRouter();
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (isReady && query.storyname) {
      const lower = query.storyname.toLowerCase();
      setIndex(storyMap[lower]);
    }
  }, [query.storyname, isReady]);

  if (index === null) return null; // or a loading spinner

  const section = storypage[index];
  const nameList = names[index];

  if (!section) return <div>Story not found</div>;

  return (
    <Layout>
      <StoryFirstSection
        subtitle={section.subtitle}
        title={section.title}
        paragraphs={section.paragraphs}
      />
      <BreaksBySection
        category={query.storyname.toUpperCase()}
        names={nameList}
      />
    </Layout>
  );
}
