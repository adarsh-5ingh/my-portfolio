import { LinkPreview } from "./ui/link-preview";
import { PiQuotesFill } from "react-icons/pi";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[20rem] flex-col">
      <p className="text-neutral-400 dark:text-neutral-300 text-lg md:text-2xl max-w-4xl mx-auto text-left leading-relaxed mb-10">
        Namaste 🙏 — I&apos;m a software developer based in 
        <LinkPreview url="https://en.wikipedia.org/wiki/Bhopal" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSayT0l89M2PnyfUB9GFaF2Mu0LUS6GBqdYA&s" isStatic className="font-bold text-blue-400 mx-2">Madhya Pradesh, India</LinkPreview> passionate about delivering high-quality digital products. <span className="text-gray-500">My focus is on crafting intuitive, user-centered software that empowers users and drives meaningful change.</span>
      </p>
    </div>
  );
};

export default About;
        
      