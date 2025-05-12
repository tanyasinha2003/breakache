import Footer from "../../components/footer";
import Layout from "../../components/layout";
import StoryFirstSection from "../../components/story-first-section";

import storypage from "../../data/story-page.json";

export default function Health() {
  const healthBreakSection = storypage[1]; // or whatever index it is

  return (
    <>
      <Layout>
        <StoryFirstSection
          subtitle={healthBreakSection.subtitle}
          title={healthBreakSection.title}
          paragraphs={healthBreakSection.paragraphs}
        />

        <Footer />
      </Layout>
    </>
  );
}
