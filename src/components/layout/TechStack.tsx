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

const TechStack: React.FC = () => {
  return (
    <div>
      <div className="grid mb-[450px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-3 gap-x-[5%] gap-y-[7%] pt-[3%] sm:mb-[550px] md:mb-[200px] lg:mb-[100px] 2xl:mb-[70px] 2xl:w-[700px]">
        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={ReactLogo} alt="ReactLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              React
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={SpringLogo} alt="SpringLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Spring Boot
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={DockerLogo} alt="DockerLogo" />
          </div>
          <div className="justify-center items-center relative">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Docker
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={JavaLogo} alt="JavaLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Java
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={KubernetesLogo} alt="KubernetesLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Kubernetes
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img className="rounded-2xl" src={JSLogo} alt="JavaScriptLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              JavaScript
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img className="rounded-2xl" src={TSLogo} alt="TypeScriptLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              TypeScript
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={HTML5Logo} alt="HTML5Logo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              HTML5
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={NGINXLogo} alt="NGINXLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              nginx
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={CSLogo} alt="CSLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              C#
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={UnityLogo} alt="UnityLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Unity5
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="w-[60%] h-[100%] rounded-3xl">
            <img src={TailwindLogo} alt="TailwindLogo" />
          </div>
          <div className="justify-center items-center">
            <p className="font-inter font-semibold subpixel-antialiased text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Tailwind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
