import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Participate() {
  const router = useRouter();

  const [step, setStep] = useState(0); // Step 0 for intro screen
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    age: "",
    breakType: "",
    otherBreak: "",
    shareOther: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add a handler for Enter key to prevent form submission
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Optionally advance to next step if desired
      // nextStep();
    }
  };

  const nextStep = () => {
    if (isStepValid()) {
      setStep((prev) => prev + 1);
    } else {
      alert("Please fill out this field before continuing.");
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.email.trim() !== "";
      case 2:
        return formData.age !== "";
      case 3:
        return formData.breakType !== "";
      case 4:
        return (
          formData.breakType !== "other" || formData.otherBreak.trim() !== ""
        );
      case 5:
        return formData.shareOther !== "";
      case 6:
        return formData.reason.trim() !== "";
      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    console.log("here");
    e.preventDefault();
    setLoading(true);
    // Ensure final step is valid before submitting
    if (!isStepValid()) {
      alert("Please fill out this field before submitting.");
      return;
    }

    const res = await fetch("/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setLoading(false);
      router.push("/thankyou");
    }
  };

  const transitionVariant = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.4 },
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div key="intro" {...transitionVariant}>
            <h2 className="text-[2.5rem] mb-6 text-center">
              Welcome to the Breakache Show
            </h2>
            <p className="text-lg text-gray-600 text-center mb-10">
              We'd love to hear your story. But first we have some questions.
              <br></br> Click below to start.
            </p>
            <div className="flex justify-center">
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0px 4px 15px rgba(255, 0, 100, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-red text-white px-6 py-3 rounded-lg"
                onClick={() => setStep(1)}
              >
                Start →
              </motion.button>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div key="step1" {...transitionVariant}>
            <label className="text-[2rem] block mb-3">Enter your email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="you@example.com"
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step2" {...transitionVariant}>
            <label className="text-[2rem] block mb-3">How old are you?</label>
            <select
              name="age"
              value={formData.age}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="">Select your age bracket</option>
              <option value="under_18">Under 18</option>
              <option value="18_25">18-25</option>
              <option value="26_35">26-35</option>
              <option value="36_50">36-50</option>
              <option value="above_50">Above 50</option>
            </select>
          </motion.div>
        );
      case 3:
        return (
          <motion.div key="step3" {...transitionVariant}>
            <label className="text-[2rem] block mb-3">
              What kind of break would you like to talk about?
            </label>
            <select
              name="breakType"
              value={formData.breakType}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              required
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="">Select a break type</option>
              <option value="health">Health</option>
              <option value="heart">Heart</option>
              <option value="career">Career</option>
              <option value="spiritual">Spiritual</option>
              <option value="other">Other</option>
            </select>
          </motion.div>
        );
      case 4:
        return (
          <motion.div key="step4" {...transitionVariant}>
            {formData.breakType === "other" ? (
              <>
                <label className="text-[2rem] block mb-3">
                  Please specify the break
                </label>
                <input
                  type="text"
                  name="otherBreak"
                  value={formData.otherBreak}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Your type of break..."
                  required
                />
              </>
            ) : (
              <div className="text-xl font-medium">
                Ah, a {formData.breakType} break — that must've been quite a
                journey. Let's talk more about it.
              </div>
            )}
          </motion.div>
        );
      case 5:
        return (
          <motion.div key="step5" {...transitionVariant}>
            <label className="text-[2rem] block mb-3">
              Do you want to share any other person's journey?
            </label>
            <div className="space-x-6 mt-2">
              <label className="text-xl font-medium">
                <input
                  type="radio"
                  name="shareOther"
                  value="yes"
                  checked={formData.shareOther === "yes"}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label className="text-xl font-medium">
                <input
                  type="radio"
                  name="shareOther"
                  value="no"
                  checked={formData.shareOther === "no"}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />{" "}
                No
              </label>
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div key="step6" {...transitionVariant}>
            <label className="text-[2rem] block mb-3">
              Why do you want to come to the Breakache show?
            </label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Your reason..."
              required
            />
          </motion.div>
        );
      default:
        return <div>All done!</div>;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-8 rounded-xl space-y-8"
      >
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

        {step > 0 && step <= 6 && (
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                className="text-red font-medium"
              >
                ← Back
              </button>
            )}
            {step < 6 && (
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0px 4px 15px rgba(255, 0, 100, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                type="button"
                onClick={nextStep}
                className="ml-auto bg-red text-white px-6 py-3 rounded-lg"
              >
                Next →
              </motion.button>
            )}
            {step === 6 && (
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0px 4px 15px rgba(255, 0, 100, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                type="submit"
                disabled={loading}
                className={`ml-auto px-6 py-3 rounded-lg flex items-center justify-center gap-2
    ${loading ? "border cursor-not-allowed" : "bg-red text-white"}
  `}
              >
                {loading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin text-red"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  "Submit"
                )}
              </motion.button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
