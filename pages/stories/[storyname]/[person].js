import { useRouter } from "next/router";

import names from "../../../data/names.json";

import Layout from "../../../components/layout";

import heart from "../../../public/images/join-us-heart.png";

import Image from "next/image";

// id name img link designation about ig_reel yt_vid

// Data structure
const data = names;

// Category mapping
const categoryMap = {
  career: 0,
  health: 1,
  heart: 2,
  spiritual: 3,
};

// Helper to normalize names for URL
function normalizeName(name) {
  return name.replace(/\s+/g, "").toLowerCase();
}

export default function PersonPage() {
  const router = useRouter();
  const { storyname, person } = router.query;

  if (!storyname || !person) {
    return <div>Loading...</div>;
  }

  const catIndex = categoryMap[storyname.toLowerCase()];
  if (catIndex === undefined) {
    return <div>Category not found.</div>;
  }

  const people = data[catIndex];
  const found = people.find(
    (p) => normalizeName(p.name) === person.toLowerCase()
  );

  if (!found) {
    return <div>Person not found.</div>;
  }

  // Example social links (replace with real ones if available)
  const linkedinUrl = "https://www.linkedin.com/";
  const instagramUrl = "https://www.instagram.com/";

  // Example YouTube and Instagram Reel
  const youtubeEmbed = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const instagramEmbed =
    "https://www.instagram.com/reel/C1hKCyrxR44/?utm_source=ig_web_button_share_sheet&igsh=MjJoZmh0OGcxNm5o";

  return (
    <Layout>
      <div className="lg:mx-[6.5rem] mx-[2rem] flex items-center gap-2">
        <h1 className="uppercase text-dark-gray font-bold text-lg md:text-xl">
          {storyname} Break by
        </h1>
        <Image src={heart} width={50} height={50} alt="Heart" />
      </div>
      <div className="max-w-7xl mx-[auto] p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image container - larger and responsive */}
          <div className="w-full md:w-1/3 lg:w-1/5 h-50 flex justify-center">
            <Image
              src={found.img}
              alt="Jaya Prasad"
              className="w-full h-full rounded-lg shadow-lg object-cover"
              width={100}
              height={100}
            />
          </div>

          {/* Text content - with improved spacing and readability */}
          <div className="w-full md:w-2/3 lg:w-3/5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl  text-dark-gray mb-2">
              {found.name}
            </h1>

            <p className="uppercase text-black font-bold text-lg md:text-xl mb-6">
              desgination
            </p>

            <div className="space-y-4 text-gray-700 text-base md:text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vitae velit ex. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque vitae velit ex. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                vitae velit ex.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque vitae velit ex. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Pellentesque vitae velit ex. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                vitae velit ex. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque vitae velit ex.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:gap-[8rem]  gap-[4rem] w-full py-[7rem]">
        {/* Instagram Reel Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[60vh]">
          {/* Heading on the left */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end pr-0 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 text-center md:text-right">
              Instagram Reel
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-md text-center md:text-right">
              Check out this featured Instagram reel for more insights and
              inspiration.
            </p>
          </div>
          {/* Reel on the right */}
          {/* "https://www.instagram.com/reel/DKzElIDoZo1/embed" */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="aspect-[9/16] w-full max-w-xs md:max-w-sm lg:max-w-md h-[60vh] md:h-[80vh] rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-black">
              <iframe
                src= {found.ig+"embed"}
                title="Instagram reel preview"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>

        {/* YouTube Section */}
        {/* "https://www.youtube.com/embed/dQw4w9WgXcQ" */}
        {found.yt && 
         <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl  text-gray-800 mb-4 text-center">
            YouTube Preview
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl text-center px-5">
            Watch this YouTube video for a deeper dive into the topic. Enjoy
            expert insights and engaging content!
          </p>
          <div className="aspect-[16/9] w-full max-w-2xl rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-black">
            <iframe
              src={found.yt}
              title="YouTube video preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
        }
       
      </div>
    </Layout>
  );
}
