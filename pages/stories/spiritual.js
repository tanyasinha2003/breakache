import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/Navbar";
import StoryFirstSection from "../../components/story-first-section";

import storypage from "../../data/story-page.json";

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

        <Footer />
      </Layout>
    </>
  );
}
