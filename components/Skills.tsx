import { SiJavascript, SiReact, SiNodedotjs, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiGo, SiGit, SiNextdotjs, SiFigma, SiDocker, SiMui, SiTailwindcss, SiBootstrap, SiShadcnui } from "react-icons/si";
import { SparklesCore } from "./ui/sparkles";
import { FaAws } from "react-icons/fa6";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
  { name: "Next JS", icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
  { name: "React JS", icon: <SiReact className="w-6 h-6 text-cyan-400" /> },
  { name: "Typescript", icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
  { name: "MUI", icon: <SiMui className="w-6 h-6 text-blue-600" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6 text-purple" /> },
  { name: "ShadcnUI", icon: <SiShadcnui className="w-6 h-6 text-white" /> },
  { name: "Node JS", icon: <SiNodedotjs className="w-6 h-6 text-green-500" /> },
  { name: "Express JS", icon: <SiExpress className="w-6 h-6 text-gray-300" /> },
  { name: "Mongo DB", icon: <SiMongodb className="w-6 h-6 text-green-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-800" /> },
  { name: "GO", icon: <SiGo className="w-6 h-6 text-sky-400" /> },
  { name: "Git", icon: <SiGit className="w-6 h-6 text-orange-500" /> },
  { name: "AWS", icon: <FaAws className="w-6 h-6 text-yellow-500" /> },
  { name: "Figma", icon: <SiFigma className="w-6 h-6 text-pink-500" /> },
  { name: "Docker", icon: <SiDocker className="w-6 h-6 text-blue-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center pt-10 pb-20">
      <div className="w-full bg-black-100 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <span className="text-sm tracking-widest text-gray-400 mb-2">MY SKILLS</span>
      <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        The Secret Sauce
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#18181b] border border-neutral-800 shadow-md hover:scale-105 transition-transform animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors"
          >
            {skill.icon}
            <span className="text-white text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
        
      