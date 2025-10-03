import SocialChannels from "./components/common/SocialChannels";
import Menu from "./components/common/Menu";
import AboutMe from "./components/layout/AboutMe";
import TechStack from "./components/layout/TechStack";
import Projects from "./components/layout/Projects";
import { useRef, useEffect, useState } from "react";
import { useSectionObserver } from "./hooks/useSectionObserver";

const Page: React.FC = () => {
  const aboutmeRef = useRef<HTMLDivElement | null>(null);
  const techstackRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const activeId = useSectionObserver([
    { id: "aboutme", ref: aboutmeRef },
    { id: "techstack", ref: techstackRef },
    { id: "projects", ref: projectsRef },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (activeId === "techstack" && !hasShownOnce) {
      timer = setTimeout(() => {
        setShowTooltip(true);
        setHasShownOnce(true);

        setTimeout(() => setShowTooltip(false), 4000);
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [activeId, hasShownOnce]);

  return (
    <div className="flex flex-col xl:flex-row pt-[5%] pb-[2%]">
      <div className="flex flex-col ml-[3%] xl:fixed xl:ml-[10%] 2xl:ml-[20%] w-[350px] xl:w-[900px] h-[80%] z-0">
        <p className="text-5xl text-primaryColor">Hristo Ganchev</p>

        <h2 className="text-textColor text-2xl mt-[8%] xl:mt-[2%]">
          Full Stack Developer
        </h2>

        <h3 className="text-textColor text-md mt-[8%] xl:mt-[4%] w-[350px] md:w-[400px]">
          I build full-stack platforms that are responsive, user-friendly, and
          optimized for performance and scalability.
        </h3>

        <div className="hidden xl:block ml-[14%] mt-[10%]">
          <Menu
            aboutmeRef={aboutmeRef}
            techstackRef={techstackRef}
            projectsRef={projectsRef}
            activeId={activeId}
          />
        </div>

        <div className="mt-[12%] xl:mt-auto">
          <SocialChannels />
        </div>
      </div>

      <div className="mt-[14%] md:mt-[6%] lg:mt-[5%] ml-[3%] items-center xl:ml-[50%] 2xl:ml-[50%] xl:mt-[0%] xl:w-1/2 xl:z-10">
        <div className="xl:mb-[100px] 2xl:mb-[100px] pr-[3%] xl:pl-[3%] xl:max-w-[700px]">
          <p className="text-primaryColor mb-[2%] font-bold text-xl xl:hidden">
            ABOUT ME
          </p>
          <div ref={aboutmeRef} id="aboutme" className="mb-[75px]">
            <AboutMe />
          </div>
        </div>

        <div ref={techstackRef} id="techstack" className="xl:pb-[10px]">
          <p className="text-primaryColor mb-[5%] lg:mb-[4%] xl:mb-[4%] font-bold text-xl xl:hidden">
            TECH STACK
          </p>
          <p
            className={`text-white text-md ml-0 xl:ml-8 mb-8 transform transition-all duration-700 ${
              showTooltip
                ? "translate-x-0 opacity-100"
                : "-translate-x-5 opacity-0"
            }`}
          >
            💡 Hover over a logo to reveal its name.
          </p>
          <TechStack />
        </div>

        <div
          ref={projectsRef}
          id="projects"
          className="mt-[320px] md:mt-[130px] xl:mt-[80px] 2xl:mt-[150px] mb-[50px]"
        >
          <p className="text-primaryColor mb-[1.5%] font-bold text-xl xl:hidden">
            PROJECTS
          </p>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Page;
