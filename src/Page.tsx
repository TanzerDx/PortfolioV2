import SocialChannels from "./components/common/SocialChannels";
import Menu from "./components/common/Menu";
import AboutMe from "./components/layout/AboutMe";
import TechStack from "./components/layout/TechStack";
import Projects from "./components/layout/Projects";
import { useRef } from "react";

const Page: React.FC = () => {
  const aboutmeRef = useRef<HTMLDivElement | null>(null);
  const techstackRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-row pt-[5%] pb-[2%]">
      <div className="flex flex-col ml-[20%] fixed w-[900px] h-[80%] z-0">
        <h1 className="text-5xl text-primaryColor">Hristo Ganchev</h1>

        <h1 className="text-textColor text-2xl mt-[2%]">
          Full Stack Developer
        </h1>

        <h1 className="text-textColor text-md mt-[4%] w-[400px]">
          I build full-stack platforms that are responsive, user-friendly, and
          optimized for performance and scalability.
        </h1>

        <div className="ml-[14%] mt-[10%]">
          <Menu
            aboutmeRef={aboutmeRef}
            techstackRef={techstackRef}
            projectsRef={projectsRef}
          />
        </div>

        <div className="mt-auto">
          <SocialChannels />
        </div>
      </div>

      <div className="ml-[50%] w-1/2 z-10">
        <div ref={aboutmeRef} className="mb-[10%]">
          <AboutMe />
        </div>

        <div ref={techstackRef} className="mt-[10%] mb-[10%]">
          <TechStack />
        </div>

        <div ref={projectsRef} className="mt-[10%] mb-[10%]">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Page;
