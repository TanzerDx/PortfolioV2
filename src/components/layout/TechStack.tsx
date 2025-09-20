import React from "react";
import ReactLogo from "../../assets/images/React.png";
import SpringLogo from "../../assets/images/SpringBoot.png";
import DockerLogo from "../../assets/images/Docker.png";
import JavaLogo from "../../assets/images/Java.png";
import KubernetesLogo from "../../assets/images/Kubernetes.png";
import JSLogo from "../../assets/images/JavaScript.png";
import TSLogo from "../../assets/images/TypeScript.png";
import HTML5Logo from "../../assets/images/HTML5.png";
import NGINXLogo from "../../assets/images/nginx.png";
import UnityLogo from "../../assets/images/Unity.png";
import CSLogo from "../../assets/images/CS.png";
import TailwindLogo from "../../assets/images/Tailwind.png";

const techStack = [
  { name: "React", logo: ReactLogo },
  { name: "Spring Boot", logo: SpringLogo },
  { name: "Docker", logo: DockerLogo },
  { name: "Java", logo: JavaLogo },
  { name: "Kubernetes", logo: KubernetesLogo },
  { name: "JavaScript", logo: JSLogo },
  { name: "TypeScript", logo: TSLogo },
  { name: "HTML5", logo: HTML5Logo },
  { name: "nginx", logo: NGINXLogo },
  { name: "C#", logo: CSLogo },
  { name: "Unity5", logo: UnityLogo },
  { name: "Tailwind", logo: TailwindLogo },
];

const TechStack: React.FC = () => {
  return (
    <div>
      <div className="grid mb-[270px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-3 gap-x-[5%] gap-y-[7%] mt-[3%] sm:mb-[400px] md:mb-[200px] lg:mb-[100px] 2xl:mb-[70px] 2xl:w-[700px]">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group"
          >
            <div className="w-[40%] h-[80%] md:w-[60%] md:h-[100%] rounded-3xl">
              <img
                src={tech.logo}
                alt={`${tech.name} Logo`}
                className={"rounded-2xl"}
              />
            </div>
            <div className="justify-center items-center">
              <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
                {tech.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
