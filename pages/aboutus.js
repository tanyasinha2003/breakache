import Layout from "../components/layout";
import Image from "next/image";

import founder from "../public/images/founder.jpeg";

export default function AboutUs() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}
