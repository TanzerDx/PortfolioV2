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

function TechStack() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-[5%] gap-y-[5%] pr-[10%] pt-[3%] pb-[10%]">
        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="pt-[6%]" src={ReactLogo} alt="ReactLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              React
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={SpringLogo} alt="SpringLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Spring Boot
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img
              className="pl-[6%] pt-[8%]"
              src={DockerLogo}
              alt="DockerLogo"
            />
          </div>
          <div className="justify-center items-center relative">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Docker
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={JavaLogo} alt="JavaLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Java
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={KubernetesLogo} alt="KubernetesLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Kubernetes
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img
              className="p-[6%] rounded-2xl"
              src={JSLogo}
              alt="JavaScriptLogo"
            />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              JavaScript
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={HTML5Logo} alt="HTML5Logo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              HTML5
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={TSLogo} alt="TypeScriptLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              TypeScript
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={NGINXLogo} alt="NGINXLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              nginx
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={TailwindLogo} alt="TailwindLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Tailwind
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={UnityLogo} alt="UnityLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              Unity5
            </h1>
          </div>
        </div>

        <div className="text-black flex flex-col justify-center items-center hover:-translate-y-[6%] duration-300 group">
          <div className="p-[5%] w-[60%] h-[100%] rounded-3xl">
            <img className="p-[6%]" src={CSLogo} alt="CSLogo" />
          </div>
          <div className="justify-center items-center">
            <h1 className="font-inter font-bold text-md mt-[10%] text-center opacity-0 group-hover:opacity-100 transition-opacity text-white duration-300">
              C#
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
