import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/Navbar";
import StoryFirstSection from "../../components/story-first-section";
import BreaksBySection from "../../components/breaks-by-section";

import storypage from "../../data/story-page.json";

import names from "../../data/names.json"

export default function Heart() {
  const heartBreakSection = storypage[2]; // or whatever index it is

  return (
    <>
      <Layout>
        <StoryFirstSection
          subtitle={heartBreakSection.subtitle}
          title={heartBreakSection.title}
          paragraphs={heartBreakSection.paragraphs}
        />
 <BreaksBySection category="HEART" names={names[2]}/>
      
      </Layout>
    </>
  );
}
