import { PiQuotesFill } from "react-icons/pi";

const Quote = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[25rem] flex-col">
      <div className="flex flex-col items-center w-full">
        <span className="text-5xl text-gray-400 mb-4"><PiQuotesFill /></span>
        <p className="text-neutral-400 dark:text-neutral-300 text-lg md:text-2xl max-w-4xl mx-auto text-left leading-relaxed mb-10">
          Greatness lies in the extra 10%. It&apos;s about pushing limits, embracing details, and never settling for “good enough“. I believe the difference comes from grit, purpose, and the drive to go the extra mile. <span className="text-gray-500">Whether in code or design, my goal is to deliver work that stands out — because true impact comes from striving for excellence.</span>
        </p>
      </div>
    </div>
  );
};

export default Quote;
        
      