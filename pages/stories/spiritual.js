import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/Navbar";
import StoryFirstSection from "../../components/story-first-section";
import BreaksBySection from "../../components/breaks-by-section";

import storypage from "../../data/story-page.json";

import names from "../../data/names.json"

export default function Spiritual() {
  const spiritualBreakSection = storypage[3]; // or whatever index it is

  return (
    <>
      <Layout>
        <StoryFirstSection
          subtitle={spiritualBreakSection.subtitle}
          title={spiritualBreakSection.title}
          paragraphs={spiritualBreakSection.paragraphs}
        />
 <BreaksBySection category="SPIRITUAL" names={names[3]}/>
        <Footer />
      </Layout>
    </>
  );
}
