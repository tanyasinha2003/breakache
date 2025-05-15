import BreaksBySection from "../../components/breaks-by-section";

import Footer from "../../components/footer";
import Layout from "../../components/layout";
import StoryFirstSection from "../../components/story-first-section";

import storypage from "../../data/story-page.json";

import names from "../../data/names.json"

export default function Career() {
  const careerBreakSection = storypage[0]; // or whatever index it is

  return (
    <>
      <Layout>
        <StoryFirstSection
          subtitle={careerBreakSection.subtitle}
          title={careerBreakSection.title}
          paragraphs={careerBreakSection.paragraphs}
        />
        <BreaksBySection category="CAREER" names={names[0]}/>

      
        <Footer />
      </Layout>
    </>
  );
}
