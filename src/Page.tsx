import SocialChannels from "./components/common/SocialChannels";
import Menu from "./components/common/Menu";
import AboutMe from "./components/layout/AboutMe";
import TechStack from "./components/layout/TechStack";
import Projects from "./components/layout/Projects";
import { useRef } from "react";
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

  return (
    <div className="flex flex-col 2xl:flex-row pt-[5%] pb-[2%]">
      <div className="flex flex-col ml-[3%] 2xl:fixed 2xl:ml-[20%] w-[350px] 2xl:w-[900px] h-[80%] z-0">
        <p className="text-5xl text-primaryColor">Hristo Ganchev</p>

        <h2 className="text-textColor text-2xl mt-[8%] 2xl:mt-[2%]">
          Full Stack Developer
        </h2>

        <h3 className="text-textColor text-md mt-[8%] 2xl:mt-[4%] w-[350px] md:w-[400px]">
          I build full-stack platforms that are responsive, user-friendly, and
          optimized for performance and scalability.
        </h3>

        <div className="hidden 2xl:block ml-[14%] mt-[10%]">
          <Menu
            aboutmeRef={aboutmeRef}
            techstackRef={techstackRef}
            projectsRef={projectsRef}
            activeId={activeId}
          />
        </div>

        <div className="mt-[12%] 2xl:mt-auto">
          <SocialChannels />
        </div>
      </div>

      <div className="mt-[10%] md:mt-[6%] lg:mt-[5%] xl:mt-[4%] ml-[3%] items-center 2xl:ml-[50%] 2xl:mt-[0%] 2xl:w-1/2 2xl:z-10">
        <div className="2xl:mb-[150px] pr-[3%] 2xl:pl-[3%] 2xl:max-w-[700px]">
          <p className="text-primaryColor mb-[2%] font-bold text-xl 2xl:hidden">
            ABOUT ME
          </p>
          <div ref={aboutmeRef} id="aboutme" className="mb-[75px]">
            <AboutMe />
          </div>
        </div>

        <div ref={techstackRef} id="techstack" className="2xl:pb-[30px]">
          <p className="text-primaryColor mb-[2%] xl:mb-[0.5%] font-bold text-xl 2xl:hidden">
            TECH STACK
          </p>
          <TechStack />
        </div>

        <div
          ref={projectsRef}
          id="projects"
          className="mt-[100px] xl:mt-[120px] 2xl:mt-[140px] mb-[50px]"
        >
          <p className="text-primaryColor mb-[1.5%] font-bold text-xl 2xl:hidden">
            PROJECTS
          </p>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Page;
