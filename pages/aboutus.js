import Layout from "../components/layout";
import Image from "next/image";

import founder from "../public/images/founder.jpeg";
import heart from "../public/images/join-us-heart.png";


export default function AboutUs() {
  return (
    <>
      <Layout>
        <div className="lg:mx-[6.5rem] mx-[2rem] flex items-center gap-2">
          <h1 className="uppercase text-dark-gray font-bold text-lg md:text-xl">
            About Us
          </h1>
          <Image src={heart} width={50} height={50} alt="Heart" />
        </div>
        <div className="max-w-7xl mx-[auto] p-4 md:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image container - larger and responsive */}
            <div className="w-full md:w-1/3 lg:w-2/5 h-144 flex justify-center">
              <Image
                src={founder}
                alt="Jaya Prasad"
                className="w-full h-full rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Text content - with improved spacing and readability */}
            <div className="w-full md:w-2/3 lg:w-3/5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl  text-dark-gray mb-2">
                Jaya Prasad
              </h1>

              <p className="uppercase text-black font-bold text-lg md:text-xl mb-6">
                Founder, 19dots
              </p>

              <div className="space-y-4 text-gray-700 text-base md:text-lg">
                <p>
                  Jaya Prasad is a specialist in advertising and marketing
                  communication. She has travelled overseas and lived in
                  different countries, an experience that proves invaluable when
                  working with people of diverse cultures.
                </p>

                <p>
                  After completing a Master's degree in communication management
                  from the Symbiosis Institute of Media and Communication with a
                  specialisation in advertising and PR, she started her
                  professional journey as a copywriter at DraftFCB in Mumbai in
                  2000 and then moved to New Delhi.
                </p>

                <p>
                  During the following 19 years Jaya worked for companies
                  including Serviceplan India, JWT and Rediffusion DY&R and
                  nurtured brands such as ITC Hotels, Swatch group, Lotto shoes,
                  Sony Mobile and General Motors. She has a strong knowledge of
                  the local market gained over many years, as well as extensive
                  international experience.
                </p>

                <p>
                  In 2021 she founded 19dots, a content, social and connect
                  agency and Breakache is the first podcast talking about the
                  importance of taking breaks. Apart from this she is the
                  Co-founder of Midwicket Stories a social event with cricket
                  legends meet to share their stories with top CEOs and CFOs
                  from banking, finance and corporate world.
                </p>

                <p>
                  In her life beyond work, she loves writing, travel, yoga and
                  photography.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="px-6 md:px-16 py-12 bg-white text-gray-800">
        
          <div className="flex flex-col md:flex-row w-full h-[40vh] lg:space-x-10 lg:space-y-0 space-y-10 mb-[4rem]">
            {/* Left Box */}
            <div className="flex-1 flex items-center justify-center rounded-[3rem] bg-gray-100">
              <h1 className="text-4xl md:text-6xl font-bold ">
                Break<span className="text-red">ache</span>
              </h1>
            </div>

            {/* Right Box */}
            <div className="flex-1 flex items-center justify-center rounded-[3rem] bg-gray-100">
              <h1 className="text-4xl md:text-6xl font-bold text-black">
                Break<span className="text-red">अच्छे</span>
              </h1>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-10">
            {/* Text Content */}
            <div className="w-full  space-y-6 text-lg leading-relaxed">
              <p className="italic text-gray-600 text-xl">
                Not all breakups are bad.
              </p>

              <p>
                <span className="font-semibold">Breakache</span> (or Break Ache
                in Hindi) is more than just a podcast. It’s a{" "}
                <span className="italic">pro bono</span> effort to understand
                the raw, unfiltered stories of people — their heartbreaks,
                career journeys, health breaks, spiritual breaks, breakthroughs,
                and everything in between.
              </p>

              <p>
                It’s a way for me to reconnect with those who’ve shaped my
                journey — to say thank you, to learn again, and maybe to heal a
                little. Because I’ve realized: there’s no “right” way to live.
                No perfect timing. No guaranteed blueprint.
              </p>

              <p>
                The world keeps moving — whether you take that break or not. But
                the break? It can change everything within you.
              </p>

              <p>
                In a world obsessed with chasing people, things, success —{" "}
                <strong>BREAKACHE</strong> is about chasing nothing. Just
                sitting. Listening. Feeling.
              </p>

              <p>
                And remembering that it’s okay to pause. <br></br>To ache{" "}
                <span className="italic">(GOOD THINGS)</span>. <br></br>To
                break.<br></br> Because sometimes, the only way back... is by
                stepping away.
              </p>

              <p className="mt-4">
                <a
                  href="mailto:yourbreakache@gmail.com"
                  className="inline-block font-medium text-red hover:underline hover:text-pink-700 transition"
                >
                  Write to me
                </a>{" "}
                if you would like to share your story.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
