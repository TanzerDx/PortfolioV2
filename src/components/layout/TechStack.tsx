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
  { name: "Java", logo: JavaLogo },
  { name: "C#", logo: CSLogo },
  { name: "HTML5", logo: HTML5Logo },
  { name: "React", logo: ReactLogo },
  { name: "JavaScript", logo: JSLogo },
  { name: "TypeScript", logo: TSLogo },
  { name: "Tailwind", logo: TailwindLogo },
  { name: "Spring Boot", logo: SpringLogo },
  { name: "nginx", logo: NGINXLogo },
  { name: "Unity5", logo: UnityLogo },
  { name: "Docker", logo: DockerLogo },
  { name: "Kubernetes", logo: KubernetesLogo },
];

const TechStack: React.FC = () => {
  return (
    <div>
      <div className="grid mb-[270px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-x-[5%] gap-y-[7%] sm:mb-[400px] md:mb-[200px] lg:mb-[100px] xl:mb-[150px] 2xl:mb-[70px] 2xl:w-[700px]">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group"
          >
            <div className="w-[35%] h-[70%] md:w-[40%] md:h-[80%] lg:w-[45%] lg:h-[85%] 2xl:w-[55%] 2xl:h-[95%] rounded-3xl">
              <img
                src={tech.logo}
                alt={`${tech.name} Logo`}
                className={"rounded-2xl"}
              />
            </div>
            <div className="justify-center items-center">
              <p className="font-inter font-semibold subpixel-antialiased text-md mt-[25%] md:mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
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
