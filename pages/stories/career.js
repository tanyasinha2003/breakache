import Footer from "../../components/footer";

export default function Career() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-[4rem] mx-[1rem] lg:mt-[10rem] lg:mb-[12rem]">
        <p className="text-center text-[1rem] lg:text-[1.25rem] text-dark-gray">Your Career Break is Your Strength</p>
        <h3 className={`text-[3.5rem] lg:text-[6rem] font-livvic text-center`}>
          <span className="text-red">Career </span>
          <span className="text-dark-gray">Breaks</span>
        </h3>
        <p className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center">
          Many of us, especially women, have stepped away from our careers to
          prioritize family, embrace motherhood, or explore new paths. Some have
          restarted from scratch post-maternity, while others have taken bold
          leaps to switch careers or return to education to pursue their true
          calling.
        </p>

        <p className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center">
          Whatever your journey looks like, it’s time to stop seeing career
          breaks as setbacks. Instead, let’s celebrate them for the unique
          experiences they bring.
        </p>

        <p className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center">
          Your career break doesn’t diminish your talent or experience—it adds
          to it. Stepping away, recalibrating, and returning often helps you
          move forward with even more clarity, purpose, and resilience.
        </p>

        <p className="mx-[2rem] lg:mx-[20rem] my-[1rem] text-center">
          Let’s hear your stories. Share how your career break shaped you,
          fueled your growth, or inspired your next chapter. And let’s celebrate
          those who took the plunge and are thriving today. Your journey is
          yours—and it’s powerful.
        </p>
      </div>
      <Footer />
    </>
  );
}
