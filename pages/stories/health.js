import Footer from "../../components/footer";

export default function Health() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-[4rem] mx-[1rem] lg:mt-[10rem] lg:mb-[12rem]">
        <p className="text-center text-[1rem] lg:text-[1.25rem] text-dark-gray">
          Pause. Reflect. Prioritize Yourself.
        </p>
        <h3 className={`text-[3.5rem] lg:text-[6rem] font-livvic text-center`}>
          <span className="text-red">Health </span>
          <span className="text-dark-gray">Breaks</span>
        </h3>
        <p className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center">
          What if one day you could no longer see the world as you do now? Or if
          overwhelming fatigue made it impossible to keep moving forward?
        </p>

        <p className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center">
          In our relentless pursuit of success and perfection, we often forget
          to prioritize the most important asset—our health. We march forward,
          blind to the signs our body and mind give us, caught in a race that
          sometimes costs us more than we realize.
        </p>

        <p className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center">
          But it doesn’t have to be this way. Taking a health break isn’t a
          weakness; it’s a sign of courage. It’s an act of listening to
          yourself, respecting your needs, and rebuilding stronger than ever.
        </p>

        <p className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center">
          Here, we celebrate the stories of brave individuals who faced their
          challenges head-on, took a step back when needed, and came back with
          renewed strength and perspective. Let their journeys inspire you to
          embrace the pause when life demands it—and to find power in
          prioritizing yourself.
        </p>
      </div>
      <Footer />
    </>
  );
}
