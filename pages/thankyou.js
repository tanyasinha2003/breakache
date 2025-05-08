import Navbar from "../components/Navbar";

export default function ThankYou() {
    return (
        <>
        <Navbar />
      <div className="flex items-center justify-center pt-[10rem]">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-gray-600">Thank You!</h1>
          <p className="text-2xl text-gray-600">Your response has been recorded.</p>
        </div>
      </div>
      
      </>
    );
  }
  
